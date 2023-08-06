import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/AboutUs/about-us.component';
import { PricingComponent } from './components/Pricing/pricing.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'about-us', component: AboutUsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'Home', component:HomeComponent },
  {
    path: '**',
    redirectTo: 'Home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
