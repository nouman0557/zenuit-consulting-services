import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConsultingComponent } from './consulting/consulting.component';
import { CyberSecurityComponent } from './cyber-security/cyber-security.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { DevelopmentComponent } from './development/development.component';
import { SecurityComponent } from './security/security.component';
import { ServicesComponent } from './services/services.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CommomService } from './data-services/commom.service';
import { ResourcesComponent } from './resources/resources.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsultingComponent,
    CyberSecurityComponent,
    DataProtectionComponent,
    DevelopmentComponent,
    SecurityComponent,
    ServicesComponent,
    SolutionsComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    ResourcesComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [CommomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
