import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { RickMortyApiService } from 'src/app/services/rick-morty-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  characters: any[] = [];
  searchTerm: string = '';
  pageSize: number = 6;
  totalCharacters: number = 0;
  colorOptions = ['primary', 'accent', 'warn'];
  colorToggle = this.colorOptions[0];
  backgroundColorOptions = ['primary', 'accent', 'warn', 'none'];
  backgroundColorToggle = this.backgroundColorOptions[0];
  favoritos: any[] = [];
  nenhumPersonagemEncontrado:boolean = true

  constructor(
    private authService: AuthService, 
    private router: Router,
    private apiService: RickMortyApiService
  ) { }

  search(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.apiService.searchCharacters(this.searchTerm, page).subscribe(
      (response: any) => {
        // Se a resposta for bem-sucedida, atualize os personagens
        this.characters = response.results;
        this.totalCharacters = response.info.count;
        this.nenhumPersonagemEncontrado=false        
      },
      (error: any) => {
        // Se ocorrer um erro, faça o tratamento do erro aqui
        this.nenhumPersonagemEncontrado=true      
        // Você pode exibir uma mensagem de erro ao usuário, ou realizar outras ações de tratamento de erro
      }
    );
  }
  
  
  onPageChange(event: any): void {
    this.loadCharacters(event.pageIndex + 1);
  }
  favoritarPersonagem(character: any): void {
    const index = this.favoritos.indexOf(character);
    if (index !== -1) {
      this.favoritos.splice(index, 1); // Remove o personagem se já estiver na lista
    } else {
      this.favoritos.push(character); // Adiciona o personagem se não estiver na lista
    }
  }
  isFavorito(character: any): boolean {
    return this.favoritos.includes(character);
  }
  desfavoritarPersonagem(character: any): void {
    const index = this.favoritos.indexOf(character);
    if (index !== -1) {
      this.favoritos.splice(index, 1);
    }
  }

  logout(): void {
    this.router.navigate(['/login']); // Redireciona o usuário para a página de login
    this.authService.logout();
  }
}
