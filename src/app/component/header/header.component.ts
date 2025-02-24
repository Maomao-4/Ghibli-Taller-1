import { Component, Input, OnInit } from '@angular/core';
import { IonHeader, IonToolbar} from '@ionic/angular/standalone';
import { InputComponent } from '../input/input.component';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone : true,
  imports: [IonHeader,IonToolbar,InputComponent]
})
export class HeaderComponent  implements OnInit {

  @Input() param!: string;


  constructor(private router: Router) { }

  ngOnInit() {}

  intro(route : string ) {
    this.router.navigate([`/${route}`]);
  }


}

