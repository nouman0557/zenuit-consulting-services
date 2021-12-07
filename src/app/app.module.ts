import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolutionsComponent } from './static-pages/solutions/solutions.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { CommonService } from './core/data-services/common.service';
import { BlogComponent } from './dynamic-pages/blog/blog.component';
import { BlogHttpService } from './core/http/blog-http.service';
import { ResourcesHttpService } from './core/http/resources-http.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptorService } from './core/interceptors/eror-interceptor.service';
import { BlogService } from './core/data-services/blog.service';
import { ResourcesService } from './core/data-services/resources.service';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ResourcesComponent } from './dynamic-pages/resources/resources.component';
import { ConsultingComponent } from './static-pages/consulting/consulting.component';
import { CyberSecurityComponent } from './static-pages/cyber-security/cyber-security.component';
import { DataProtectionComponent } from './static-pages/data-protection/data-protection.component';
import { DevelopmentComponent } from './static-pages/development/development.component';
import { SecurityComponent } from './static-pages/security/security.component';
import { ServicesComponent } from './static-pages/services/services.component';
import { NavbarComponent } from './layout/navbar/navbar.component';

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
    BlogComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    CommonService,
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
