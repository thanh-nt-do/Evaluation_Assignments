import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidatorCheckConfirmedPasswordComponent } from './features/validator-check-confirmed-password/validator-check-confirmed-password.component';
import { JobsBoardComponent } from './features/rxjs-lab/jobs-board/jobs-board.component';
import { InterestedJobsBoardComponent } from './features/rxjs-lab/interested-jobs-board/interested-jobs-board.component';
import { HttpClientModule } from '@angular/common/http';
import { JobCardComponent } from './features/rxjs-lab/job-card/job-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CvsNavComponent } from './features/router-lab/cvs-nav/cvs-nav.component';
import { DirectoryPageComponent } from './features/router-lab/directory-page/directory-page.component';
import { UserCardComponent } from './features/router-lab/directory-page/user-card/user-card.component';
import { ContactUsPageComponent } from './features/router-lab/contact-us-page/contact-us-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidatorCheckConfirmedPasswordComponent,
    JobsBoardComponent,
    InterestedJobsBoardComponent,
    JobCardComponent,
    CvsNavComponent,
    DirectoryPageComponent,
    UserCardComponent,
    ContactUsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
