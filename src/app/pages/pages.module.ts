import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { RickMortyApiService } from '../services/rick-morty-api.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    BrowserAnimationsModule, // Importante para animações do Angular Material
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatBadgeModule,
    MatIconModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [
    RickMortyApiService,
    AuthService // Adicione o AuthService aos providers
  ],
  exports: [
    LoginComponent,
    HomeComponent
  ]
})
export class PagesModule { }

