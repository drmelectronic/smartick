import {Component, Input, OnInit} from '@angular/core';
import {KatexOptions} from "ng-katex";

@Component({
  selector: 'app-formula',
  templateUrl: './formula.component.html',
  styleUrls: ['./formula.component.css']
})
export class FormulaComponent implements OnInit {
  @Input() equation: string = '';
  options: KatexOptions = {displayMode: true}

  constructor() { }

  ngOnInit(): void {
  }

}
