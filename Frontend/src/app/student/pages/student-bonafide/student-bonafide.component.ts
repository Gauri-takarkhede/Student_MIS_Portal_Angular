import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BonafideService } from 'src/app/shared/services/bonafide.service';

@Component({
  selector: 'app-student-bonafide',
  templateUrl: './student-bonafide.component.html',
  styleUrls: ['./student-bonafide.component.scss'],
})
export class StudentBonafideComponent implements OnInit {
  loading = false;
  message = '';
  requests: any[] = [];

  form = this.fb.group({
    reason: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private bonafideService: BonafideService
  ) {}

  ngOnInit() {
    this.getMyRequestsList();
  }

  getMyRequestsList() {
    this.bonafideService.getMyRequests().subscribe({
      next: (res) => {
        this.requests = res.data;
        this.loading = false;
      },
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.loading = true;

    this.bonafideService.createRequest(this.form.value).subscribe({
      next: () => {
        this.message = 'Bonafide request submitted';
        this.loading = false;
        this.form.reset();
        this.getMyRequestsList();
      },
      error: () => {
        this.message = 'Error submitting request';
        this.loading = false;
      },
    });
  }

  download(id: string) {
    this.bonafideService.downloadBonafide(id).subscribe((pdfBlob) => {
      const fileURL = window.URL.createObjectURL(pdfBlob);
      const a = document.createElement('a');
      a.href = fileURL;
      a.download = 'bonafide.pdf';
      a.click();
    });
  }
}
