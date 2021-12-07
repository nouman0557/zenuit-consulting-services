import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './dynamic-pages/blog/blog.component';
import { ResourcesComponent } from './dynamic-pages/resources/resources.component';
import { HomeComponent } from './home/home.component';
import { ConsultingComponent } from './static-pages/consulting/consulting.component';
import { CyberSecurityComponent } from './static-pages/cyber-security/cyber-security.component';
import { DataProtectionComponent } from './static-pages/data-protection/data-protection.component';
import { DevelopmentComponent } from './static-pages/development/development.component';
import { SecurityComponent } from './static-pages/security/security.component';
import { ServicesComponent } from './static-pages/services/services.component';
import { SolutionsComponent } from './static-pages/solutions/solutions.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent },

  { path: 'consulting', component: ConsultingComponent },

  { path: 'cyber-security', component: CyberSecurityComponent },

  { path: 'data-protection', component: DataProtectionComponent },

  { path: 'development', component: DevelopmentComponent },

  { path: 'security', component: SecurityComponent },

  { path: 'services', component: ServicesComponent },

  { path: 'solutions', component: SolutionsComponent },

  { path: 'resources', component: ResourcesComponent },

  { path: 'blog', component: BlogComponent },


  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
