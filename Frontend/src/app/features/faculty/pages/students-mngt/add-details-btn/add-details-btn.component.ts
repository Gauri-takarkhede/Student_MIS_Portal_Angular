import { Component, EventEmitter, Output } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Router } from '@angular/router';
import { AddDetailsModalComponent } from '../add-details-modal/add-details-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-add-details-btn',
  templateUrl: './add-details-btn.component.html',
  styleUrls: ['./add-details-btn.component.scss'],
})
export class AddDetailsBtnComponent implements ICellRendererAngularComp {
  value = '';
  params: any;
  @Output() btnClick = new EventEmitter<any>();
  constructor(
    private router: Router,
    private dialog: MatDialog,
  ) {}

  agInit(params: ICellRendererParams): void {
    this.params = params.data;
    this.value = params.data.studentDetailsId;
  }
  refresh(params: ICellRendererParams) {
    return true;
  }
  // buttonClicked() {
  //   alert('clicked');
  // }
  addDetails() {
    const dialogRef = this.dialog.open(AddDetailsModalComponent, {
      maxWidth: '95%',
      width: '800px',
      data: this.params,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('User confirmed');
      } else {
        console.log('User cancelled');
      }
    });
  }
}
