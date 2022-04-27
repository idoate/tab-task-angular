import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public texto!: string;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarTextoTab($event:any){
    this.texto = $event.texto;

  }
}
