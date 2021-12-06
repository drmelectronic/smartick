import {Component, OnInit} from '@angular/core';
import {Pregunta} from "./models/pregunta.model";
import {PreguntaEnum} from "./models/preguntaEnum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Smartick';

  ngOnInit(): void {
  }

}
