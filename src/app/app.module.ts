import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResetPasswordComponent } from './Pages/reset-password/reset-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingRoutingModule } from './routing-routing.module';
import { IconsModule } from './shared/icons/icons.module';
import { ConfirmationEmailComponent } from './Pages/confirmation-email/confirmation-email.component';
import { EmailNotConfirmedComponent } from './Pages/email-not-confirmed/email-not-confirmed.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ResetPasswordComponent,
    ConfirmationEmailComponent,
    EmailNotConfirmedComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingRoutingModule,
    HttpClientModule,
    IconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
