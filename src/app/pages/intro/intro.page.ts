import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonButton, IonGrid } from '@ionic/angular/standalone';
import {InputComponent} from '../../component/input/input.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonGrid, IonButton, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,InputComponent]
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { }

  
  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home']);
  }

}
