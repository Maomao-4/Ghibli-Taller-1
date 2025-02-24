import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudioGhibliService {

  constructor(private http: HttpClient) { }

  getMovies(params: any) {
    return this.http.get(environment.baseUrl + environment.films, { params });
  }

  getMovieById(id: string) {
    return this.http.get(`${environment.baseUrl}/films/${id}`);
  }
  
  
}
