import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule,
  MatButtonModule,
   MatIconModule,
   MatSidenavModule,
   MatDividerModule,
   MatListModule,
   MatFormFieldModule,
   MatInputModule,
   MatCardModule,
   MatSlideToggleModule
   } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MiniProfileComponent } from './sidebar-sections/mini-profile/mini-profile.component';
import { RouterLinksComponent } from './sidebar-sections/router-links/router-links.component';

import { RouterModule, Routes } from '@angular/router';
import { HistoryPageComponent } from './history/history-page/history-page.component';
import { MainPageComponent } from './home/main-page/main-page.component';
import { AnaliticsPageComponent } from './analitics/analitics-page/analitics-page.component';
import { ProjectsPageComponent } from './projects/projects-page/projects-page.component';
import { LoginPageComponent } from './enrollment/login-page/login-page.component';
import { LogoutPageComponent } from './enrollment/logout-page/logout-page.component';
import { SigninPageComponent } from './enrollment/signin-page/signin-page.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HistoryCardComponent } from './history/history-card/history-card.component';


const appRoutes: Routes = [
  // { path: './', component: MainPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'analitics', component: AnaliticsPageComponent },
  { path: 'history', component: HistoryPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'logout', component: LogoutPageComponent },
  { path: 'register', component: SigninPageComponent },
  { path: './', redirectTo: '/home'  },
  { path: '**', redirectTo: '/home'  }
];

@NgModule({
  declarations: [
    AppComponent,
    MiniProfileComponent,
    RouterLinksComponent,
    HistoryPageComponent,
    MainPageComponent,
    AnaliticsPageComponent,
    ProjectsPageComponent,
    LoginPageComponent,
    LogoutPageComponent,
    SigninPageComponent,
    HistoryCardComponent,
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
