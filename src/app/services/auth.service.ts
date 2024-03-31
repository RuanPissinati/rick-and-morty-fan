import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    // Verificação simples de credenciais (mockado)
    if (username === 'usuario' && password === 'senha') {
      // Simula um login bem-sucedido
      localStorage.setItem('loggedIn', 'true');
      return of(true);
    } else {
      // Simula um login falhado
      return of(false);
    }
  }

  logout(): void {
    // Simula o logout
    localStorage.removeItem('loggedIn');
  }

  isLoggedIn(): boolean {
    // Verifica se o usuário está logado
    return localStorage.getItem('loggedIn') === 'true';
  }
}
