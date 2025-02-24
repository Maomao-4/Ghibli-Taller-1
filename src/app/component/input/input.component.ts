import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonInput } from "@ionic/angular/standalone";
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  standalone: true,
  imports: [IonInput, IonButton, CommonModule, FormsModule]
})
export class InputComponent  implements OnInit {

  @Input() text: string = '';
  @Output() action = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  onClick() {
    this.action.emit();
  }

}
