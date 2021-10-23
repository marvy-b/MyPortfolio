import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'about', component: AboutComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
