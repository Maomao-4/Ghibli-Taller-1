import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonImg, IonGrid, IonCol, IonRow, IonCard, IonAvatar, IonSearchbar } from '@ionic/angular/standalone';
import { InputComponent } from '../../component/input/input.component';
import { Router } from '@angular/router';
import { StudioGhibliService } from '../../services/studio-ghibli.service';
import { Injector } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/component/card/card.component';
import { HeaderComponent } from 'src/app/component/header/header.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSearchbar, IonAvatar, IonCard, IonRow, IonCol, IonGrid, 
    IonImg,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    InputComponent,
    RouterModule,
    CardComponent,
    HeaderComponent
  ],
})
export class HomePage implements OnInit {
  films: any[] = [];
  params = {} as any;

  constructor(private router: Router, private injector: Injector,
    private ghibliSvc: StudioGhibliService
  ) {}

  

  ngOnInit() {
    this.params.page = 0;
    this.ghibliSvc = this.injector.get(StudioGhibliService); // 🚀 Evita la inyección temprana
    this.params.page = 0;
    this.getFilms();
  }

  intro() {
    this.router.navigate(['/intro']);
  }


  getFilms(event?: any) {
    this.params.page += 1;
  
    this.ghibliSvc.getMovies(this.params).subscribe({
      next: (res: any) => {
        console.log('Respuesta de la API:', res); // 🔍 Depuración
  
        if (Array.isArray(res)) {
          this.films.push(...res); // ✅ Si la API devuelve un array, lo agregamos directamente
        } else if (res?.results) {
          this.films.push(...res.results); // ✅ Si la API tiene `results`, lo usamos
        } else {
          console.error('Formato inesperado en la respuesta:', res); // ⚠️ Para depuración
        }
      },
      error: (err: any) => {
        console.error('Error en la petición:', err);
      }
    });
  }

  searchFilms() {
    const query = this.params.name?.trim().toLowerCase();
  
    if (!query) {
      this.resetFilms(); // 🔹 Si el input está vacío, restablece la lista
      return;
    }
  
    this.ghibliSvc.getMovies({}).subscribe({
      next: (res: any) => {
        if (Array.isArray(res)) {
          this.films = res.filter((film: any) =>
            film.original_title_romanised.toLowerCase().includes(query) || 
            film.original_title.toLowerCase().includes(query)
          );
        } else {
          this.films = [];
        }
      },
      error: (err: any) => {
        console.error("Error al buscar películas:", err);
      }
    });
  }
  
 
  resetFilms() {
    this.params.page = 1;
    this.films = [];
    this.getFilms();
  }
  
  
  
}
