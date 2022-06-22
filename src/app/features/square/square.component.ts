import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  @Input() id: number;
  @Output() elementSelected = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  removeElement() {
    this.elementSelected.emit(this.id);
  }
}
