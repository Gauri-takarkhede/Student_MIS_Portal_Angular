import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { StudentLoginComponent } from './pages/student-login/student-login.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
import { FacultyLoginComponent } from './pages/faculty-login/faculty-login.component';

@NgModule({
  declarations: [
    AuthComponent,
    StudentLoginComponent,
    StudentRegisterComponent,
    FacultyLoginComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule],
})
export class AuthModule {}
