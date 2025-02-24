import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar, IonCard, IonRow, IonGrid, IonCol, IonImg, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import {InputComponent} from '../../component/input/input.component';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudioGhibliService } from 'src/app/services/studio-ghibli.service';
import { CardComponent } from 'src/app/component/card/card.component';
import { HeaderComponent } from 'src/app/component/header/header.component';

@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.page.html',
  styleUrls: ['./movies-detail.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonImg, IonCol, IonGrid, IonRow, IonCard, IonAvatar, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,InputComponent,SharedModule, CardComponent, HeaderComponent]
})
export class MoviesDetailPage implements OnInit {

  movieId: string = '';
  movieD= null as any;

  constructor(private router: Router,
    private actRoute: ActivatedRoute,
    private ghibliSvc: StudioGhibliService

  ) { 
    this.movieId = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log(this.movieId);
  }

  ngOnInit() {

    if (this.movieId) {
      this.getMovieDetail(this.movieId);
    }
  }

  intro(){
    this.router.navigate(['/intro']);
  }

  home(){
    this.router.navigate(['/home']);
  }

  movie: any;

  getMovieDetail(id: string) {
    this.ghibliSvc.getMovieById(id).subscribe({
      next: (res: any) => {
        this.movie = res;
        console.log('Película:', this.movie);
        this.movieD = res;
      },
      error: (err: any) => {
        console.error('Error al obtener la película:', err);
      }
    });
  }
}
