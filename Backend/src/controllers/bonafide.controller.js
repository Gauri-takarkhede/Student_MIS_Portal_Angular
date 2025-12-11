import BonafideRequest from "../models/bonafideRequest.model.js";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";

export const createBonafideRequest = async (req, res) => {
  try {
    const { reason } = req.body;
    const studentId = req.user.id;
    console.log(reason, studentId);
    const newRequest = await BonafideRequest.create({
      studentId,
      reason,
    });

    res.status(201).json({
      message: "Bonafide request submitted",
      data: newRequest,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyBonafideRequests = async (req, res) => {
  try {
    const studentId = req.user.id;

    const requests = await BonafideRequest.find({ studentId });

    res.status(200).json({ data: requests });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllBonafideRequests = async (req, res) => {
  try {
    const requests = await BonafideRequest.find().populate(
      "studentId",
      "name mis email"
    );
    res.status(200).json({ data: requests });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const approveBonafide = async (req, res) => {
  try {
    const requestId = req.params.id;

    const updated = await BonafideRequest.findByIdAndUpdate(
      requestId,
      {
        status: "approved",
        approvedBy: req.user._id,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    console.log(updated);

    res.status(200).json({
      message: "Bonafide Approved",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const rejectBonafide = async (req, res) => {
  try {
    const requestId = req.params?.id;

    console.log(requestId, "requestId");

    const updated = await BonafideRequest.findByIdAndUpdate(
      requestId,
      {
        status: "rejected",
        approvedBy: req.user.id,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    res.status(200).json({
      message: "Bonafide Rejected",
      data: updated,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const downloadBonafide = async (req, res) => {
  try {
    const requestId = req.params.id;

    const request = await BonafideRequest.findById(requestId).populate(
      "studentId"
    );

    console.log(request);

    if (!request || request.status !== "approved") {
      return res.status(400).json({ error: "Bonafide not approved yet" });
    }

    const student = request.studentId;

    // Load Template PDF
    // const templatePath = path.join(
    //   __dirname,
    //   "../assets/BONAFIDE_CERTIFICATE.pdf"
    // );
    const templatePath = path.join(
      process.cwd(),
      "src",
      "assets",
      "BONAFIDE_CERTIFICATE.pdf"
    );
    console.log(templatePath);

    const templateBytes = fs.readFileSync(templatePath);

    const pdfDoc = await PDFDocument.load(templateBytes);
    const pages = pdfDoc.getPages();
    const page = pages[0];

    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

    // 🟦 Coordinates of insertion (you asked for “right position”)
    // I extracted them based on your PDF layout

    page.drawText(student.name, {
      x: 400,
      y: 420,
      size: 28,
      font,
      color: rgb(0, 0, 0),
    });

    // page.drawText(student.year, {
    //   x: 160,
    //   y: 605,
    //   size: 14,
    //   font,
    // });

    // page.drawText(student.department, {
    //   x: 350,
    //   y: 605,
    //   size: 14,
    //   font,
    // });

    page.drawText(new Date().getFullYear().toString(), {
      x: 1200,
      y: 380,
      size: 28,
      font,
    });

    page.drawText(student.mis, {
      x: 700,
      y: 340,
      size: 28,
      font,
    });

    page.drawText(request.reason, {
      x: 120,
      y: 170,
      size: 28,
      font,
      maxWidth: 400,
    });

    // Generate final PDF
    const pdfBytes = await pdfDoc.save();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${student.name}_bonafide.pdf`
    );

    res.send(Buffer.from(pdfBytes));
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};
