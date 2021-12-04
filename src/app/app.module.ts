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
import { CommomService } from './core/data-services/commom.service';
import { ResourcesComponent } from './resources/resources.component';
import { BlogComponent } from './blog/blog.component';
import { BlogHttpService } from './http/blog-http.service';
import { ResourcesHttpService } from './http/resources-http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from './core/interceptors/eror-interceptor.service';
import { BlogService } from './core/data-services/blog.service';
import { ResourcesService } from './core/data-services/resources.service';

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
    RouterModule,
    HttpClientModule
  ],
  providers: [
    CommomService,
    BlogHttpService,
    ResourcesHttpService,
    BlogService,
    ResourcesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
