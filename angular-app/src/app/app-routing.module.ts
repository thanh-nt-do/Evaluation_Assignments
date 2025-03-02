import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryPageComponent } from './features/router-lab/directory-page/directory-page.component';
import { ContactUsPageComponent } from './features/router-lab/contact-us-page/contact-us-page.component';

const routes: Routes = [
  { path: '', component: DirectoryPageComponent },
  { path: 'contact', component: ContactUsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
