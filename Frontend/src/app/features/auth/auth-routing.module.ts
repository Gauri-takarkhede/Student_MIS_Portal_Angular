import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './pages/student-login/student-login.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';
import { FacultyLoginComponent } from './pages/faculty-login/faculty-login.component';

const routes: Routes = [
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'student-register', component: StudentRegisterComponent },
  { path: 'faculty-login', component: FacultyLoginComponent },

  // Default auth route
  { path: '', redirectTo: 'student-login', pathMatch: 'full' },

  // Wildcard inside auth
  { path: '**', redirectTo: 'student-login' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
