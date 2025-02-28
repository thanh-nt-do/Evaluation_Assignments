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

@NgModule({
  declarations: [
    AppComponent,
    ValidatorCheckConfirmedPasswordComponent,
    JobsBoardComponent,
    InterestedJobsBoardComponent,
    JobCardComponent
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
