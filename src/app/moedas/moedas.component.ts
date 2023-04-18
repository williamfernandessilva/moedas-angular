import { Component } from '@angular/core';

@Component({
  selector: 'app-moedas',
  templateUrl: './moedas.component.html',
  styleUrls: ['./moedas.component.css']
})
export class MoedasComponent {
 dolar: number;
 euro: number;
 libra: number;
 real: number;


 calcu(){
    this.dolar = this.real/this.dolar;
    this.euro = this.real/this.euro;
    this.libra = this.real/this.libra;
 }

}
