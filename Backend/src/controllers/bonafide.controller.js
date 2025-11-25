export const createBonafideRequest = async (req, res) => {
  try {
    const { reason } = req.body;
    const studentId = req.user.id; // from JWT

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
    const status = req.query.status;

    let filter = {};
    if (status) filter.status = status;

    const requests = await BonafideRequest.find(filter).populate(
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
        approvedBy: req.user.id,
        updatedAt: Date.now(),
      },
      { new: true }
    );

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
    const requestId = req.params.id;

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
  const requestId = req.params.id;

  const request = await BonafideRequest.findById(requestId);

  if (!request || request.status !== "approved") {
    return res.status(400).json({ error: "Bonafide not approved yet" });
  }

  res.download(request.pdfUrl);
};
