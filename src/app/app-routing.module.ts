import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultingComponent } from './consulting/consulting.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { DevelopmentComponent } from './development/development.component';
import { HomeComponent } from './home/home.component';
import { SecurityComponent } from './security/security.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';

const routes: Routes = [

  { path: 'Home', component: HomeComponent },

  { path: 'consulting', component: ConsultingComponent },

  { path: 'cyber-security', component: CyberSecurityComponent },

  { path: 'data-protection', component: DataProtectionComponent },

  { path: 'development', component: DevelopmentComponent },

  { path: 'security', component: SecurityComponent },

  { path: 'services', component: ServicesComponent },

  { path: 'solutions', component: SolutionsComponent },

  { path: '', redirectTo: 'Home', pathMatch: 'full' },

  { path: '**', redirectTo: 'Home' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
