import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../../services/faculty.service';
import { StudentService } from 'src/app/features/student/services/student.service';
import { ColDef } from 'ag-grid-community';
import { AddDetailsBtnComponent } from 'src/app/features/faculty/pages/students-mngt/add-details-btn/add-details-btn.component';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss'],
})
export class AllStudentsComponent implements OnInit {
  public students: any;

  columnDefs: ColDef[] = [
    {
      headerName: 'Name',
      field: 'name',
      sortable: true,
      filter: true,
      pinned: true,
    },
    { headerName: 'MIS', field: 'mis', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    {
      headerName: 'Department',
      field: 'department',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Student Details',
      field: 'studentDetailsId',
      cellRenderer: AddDetailsBtnComponent,
      sortable: true,
      filter: true,
    },
  ];

  defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    resizable: true,
    autoHeight: true,
  };

  rowData = [
    {
      name: 'Rahul Sharma',
      mis: '12345',
      email: 'rahul@test.com',
      department: 'Computer',
    },
    {
      name: 'Priya Singh',
      mis: '12346',
      email: 'priya@test.com',
      department: 'Mechanical',
    },
    {
      name: 'Rahul Sharma',
      mis: '12345',
      email: 'rahul@test.com',
      department: 'Computer',
    },
    {
      name: 'Priya Singh',
      mis: '12346',
      email: 'priya@test.com',
      department: 'Mechanical',
    },
    {
      name: 'Rahul Sharma',
      mis: '12345',
      email: 'rahul@test.com',
      department: 'Computer',
    },
    {
      name: 'Priya Singh',
      mis: '12346',
      email: 'priya@test.com',
      department: 'Mechanical',
    },
    {
      name: 'Rahul Sharma',
      mis: '12345',
      email: 'rahul@test.com',
      department: 'Computer',
    },
    {
      name: 'Priya Singh',
      mis: '12346',
      email: 'priya@test.com',
      department: 'Mechanical',
    },
    {
      name: 'Rahul Sharma',
      mis: '12345',
      email: 'rahul@test.com',
      department: 'Computer',
    },
    {
      name: 'Priya Singh',
      mis: '12346',
      email: 'priya@test.com',
      department: 'Mechanical',
    },
    {
      name: 'Rahul Sharma',
      mis: '12345',
      email: 'rahul@test.com',
      department: 'Computer',
    },
    {
      name: 'Priya Singh',
      mis: '12346',
      email: 'priya@test.com',
      department: 'Mechanical',
    },
  ];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe((res) => {
      this.students = res;
      console.log(this.students);
    });
  }
}
