import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationEmailComponent } from './Pages/confirmation-email/confirmation-email.component';
import { EmailNotConfirmedComponent } from './Pages/email-not-confirmed/email-not-confirmed.component';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';

const routes: Routes = [
  {path: '',   redirectTo: '/reset-password', pathMatch: 'full'},
  {path: 'reset/:id', component: ResetPasswordComponent},
  {path: 'confirmation-email', component: ConfirmationEmailComponent},
  {path: 'not-confirmation-email', component: EmailNotConfirmedComponent},
];

@NgModule({
  // imports: [RouterModule.forChild(routes)],
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class RoutingRoutingModule { }
