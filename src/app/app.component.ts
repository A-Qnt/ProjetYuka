import { HttpClient } from '@angular/common/http';
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

  public photo: string;
  public ingredient: string;
  public allergen: string;
  public nova: string;
  public nutriscore: string;
  public palm: string;
  public info: string;



  constructor(private http: HttpClient) {
    this.myTitle = "My Yuka";
    this.mySlogan = "Obtenez les informations sur les produits alimentaires";
    this.photo = "";
    this.ingredient = "";
    this.allergen = "";
    this.nova = "";
    this.nutriscore = "";
    this.palm = "";
    this.info = "";
  }



  public afficherChampSaisi() {
    return this.http.get<any>('https://world.openfoodfacts.org/api/v0/product/' + this.champSaisi.value)
      .subscribe(data => {
        console.log(data)
        this.photo = data.product.image_url
        this.ingredient =  data.product.ingredients_text_fr
        this.allergen =  data.product.allergens_from_ingredients
        this.nova =  data.product.nova_group
        this.nutriscore =  data.product.nutrition_grade_fr
        this.palm =  data.product.ingredients_from_palm_oil_n
        this.info =  data.product.stores
      })
  }
}
