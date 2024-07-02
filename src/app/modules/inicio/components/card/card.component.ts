import { Component } from '@angular/core';
import { Auriculares } from 'src/app/models/auriculares';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  public Info: Auriculares[] = [];

  constructor() {
    this.Info = [
      //card 1
      {
        uid: "",
        nombre: "Auriculares Lenovo Livepods",
        modelo: "Pro Lenovo Lp40 Pro Negro ",
        duracionBateria: "4 Horas",
        precio: 23000,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_941628-MLA71496728465_092023-F.webp",
        alt: "AURIS",
      },
      //card 2
      {
        uid: "",
        nombre: "Auriculares In-ear Inalámbricos",
        modelo: "Xiaomi Redmi Buds 4 Lite Negro",
        duracionBateria: "5 Horas",
        precio: 33600,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_872254-MLU75152007327_032024-F.webphttps://http2.mlstatic.com/D_NQ_NP_2X_894995-MLU72606101780_112023-F.webp",
        alt: "",
      },
      //card 3
      {
        uid: "",
        nombre: "Auriculares Inalambricos True",
        modelo: "Wireless Jbl Wave Flex Color Negro",
        duracionBateria: "32",
        precio: 117.783,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_894995-MLU72606101780_112023-F.webp",
        alt: "",
      },
      //card 4
      {
        uid: "",
        nombre: "Auriculares Bq50",
        modelo: "Hi-fi Audio",
        duracionBateria: "5 Horas",
        precio: 18700,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_783616-MLA77216632763_062024-F.webp",
        alt: "",
      },
      //card 5 
      {
        uid: "",
        nombre: "Auriculares Bluetooth ",
        modelo: "Buds NVK-A9760 ",
        duracionBateria: "7 Horas",
        precio: 25500,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_979143-MLA73596203136_122023-F.webp ",
        alt: "",
      },
      // card 6 
      {
        uid: "",
        nombre: "Auricular Inalambrico  ",
        modelo: "Jd Air Buds  ",
        duracionBateria: "5 Horas",
        precio: 20975,
        img: "https://http2.mlstatic.com/D_NQ_NP_2X_860249-MLU74352578122_022024-F.webp",
        alt: "",
      },




    ]
  }



}
