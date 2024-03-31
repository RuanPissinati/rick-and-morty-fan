import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent
  ],
  imports: [
    FormsModule
  ],
  providers: [
    AuthService // Adicione o AuthService aos providers
  ],
  exports: [
    LoginComponent,
    HomeComponent
  ]
})
export class PagesModule { }

