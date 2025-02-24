import { Component, input, Input, OnInit } from '@angular/core';
import { IonCard, IonAvatar, IonContent } from '@ionic/angular/standalone';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonContent, IonCard, IonAvatar,NgIf],
})

export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() image: string = '';
  @Input() original_title: string ='';
  @Input() original_title_romanised: string = '';
  @Input() release_date: string = '';
  @Input() running_time: string ='';
  @Input() rt_score: string='';
  @Input() description: string = '';
  @Input() controller: number = 0;

}
