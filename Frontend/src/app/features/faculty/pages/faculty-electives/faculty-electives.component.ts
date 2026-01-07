import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FacultyService } from '../../services/faculty.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-faculty-electives',
  templateUrl: './faculty-electives.component.html',
  styleUrls: ['./faculty-electives.component.scss'],
})
export class FacultyElectivesComponent implements OnInit {
  @ViewChild('allocationTable') table!: ElementRef;
  modules: any = [];
  selectedModule: any = null;
  allocations: any = [];

  constructor(private facultyService: FacultyService) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules() {
    this.facultyService.getAllElectives().subscribe((res) => {
      this.modules = res;
    });
  }

  onModuleSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    const id = select.value;
    this.selectedModule = this.modules.find((m: any) => m._id === id);

    this.facultyService
      .getAllocations(id)
      .subscribe((res) => (this.allocations = res));
  }

  async generatePDF() {
    try {
      const element = this.table.nativeElement;
      console.log(element);
      const canvas = await html2canvas(element, {
        scale: 2,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 280; // A4 landscape width
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight);

      // Filename with module name and date
      const filename = `${this.selectedModule?.moduleName}_allocations_${
        new Date().toISOString().split('T')[0]
      }.pdf`;
      pdf.save(filename);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Failed to generate PDF');
    }
  }
}
