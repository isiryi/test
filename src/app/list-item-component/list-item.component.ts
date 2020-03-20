import {Component, Input} from '@angular/core';

import {Film} from "../models/film.model";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.less']
})
export class ListItemComponent {
  @Input() film: Film;

  constructor() { }

}
