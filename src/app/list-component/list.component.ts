import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/index";

import {Film} from '../models/film.model';
import { ListService } from "../services/list.service";

@Component({
  selector: 'app-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.less']
})

export class ListComponent implements OnInit {
  list: Film[] = [];
  subscriptionList: Subscription;


  constructor(private listService: ListService) {}

  ngOnInit() {
    this.subscriptionList = this.listService.itemsChanged
      .subscribe(
        (list: Film[]) => {
          this.list = list;
        }
      );
    this.list = this.listService.getList();
  }
}
