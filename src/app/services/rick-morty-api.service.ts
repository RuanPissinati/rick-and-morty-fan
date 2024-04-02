import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyApiService {
  private apiUrl = 'https://rickandmortyapi.com/api';
  
  constructor(private http: HttpClient) { }

  searchCharacters(name: string, page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/character?page=${page}&name=${name}`);
  }
}
