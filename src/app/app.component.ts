import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet-my-yuka';

  public myTitle: string;
  public mySlogan: string;
  
  champSaisi = new FormControl('');

  constructor() {
    this.myTitle = "My Yuka";
    this.mySlogan = "Obtenez les informations sur les produits alimentaires"
  }

  public afficherChampSaisi() {
    alert(this.champSaisi.value)
  }
}
