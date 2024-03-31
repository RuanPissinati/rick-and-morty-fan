import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  error: boolean = false;

  constructor(private authService: AuthService) { }
  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      loggedIn => {
        if (loggedIn) {
          // Redireciona para a página inicial após o login bem-sucedido
          window.location.href = '/home';
        } else {
          // Exibe mensagem de erro em caso de credenciais inválidas
          this.error = true;
        }
      }
    );
  }
}
