import { Component } from '@angular/core';
import {ListService} from "../services/list.service";

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.less']
})
export class ListHeaderComponent {
  name = 'Name';
  season = 'Season';
  network = 'Network';
  premiere = 'Premiere';

  constructor(private listService: ListService) {}

  onListSorting (reverse: boolean): void {
    this.listService.sortList(reverse);
  }

}
