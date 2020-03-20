import { Injectable} from '@angular/core';
import { Subject }  from 'rxjs';
import { FilmsService } from "./films.service";
import { Film } from "../models/film.model";

@Injectable()
export class ListService {
  list: Film[];
  pageSizes = [5, 10, 25];
  pageSize = this.pageSizes[0];
  pageCounts: number[][];
  firstItem = 0;
  pageCountChanged = new Subject<number[]>();
  itemsChanged = new Subject<Film[]>();

  constructor (private filmsService: FilmsService) {
    this.list = this.filmsService.getFilms();
    this.pageCounts = this.pageSizes.map((item) => {
      const pages = [];
      const lastPage = Math.ceil(this.list.length / item);
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
      return pages;
    });
  }

  getList(): Film[] {
    return this.list.slice(0, this.pageSize);
  }

  sortList(reverse: boolean): void {
    if (reverse) {
      this.list = this.list.sort((a: Film, b: Film) => a.name > b.name ? -1 : 1);
    } else {
      this.list = this.list.sort((a: Film, b: Film) => a.name > b.name ? 1 : -1);
    }
    this.firstItem = 0;
    this.itemsChanged.next(this.list.slice(this.firstItem, this.pageSize));
  }

  getPageSizes(): number[] {
    return this.pageSizes.slice();
  }

  getPageCount(): number[] {
    return this.pageCounts[0];
  }

  setPageSize(index: number): void {
    this.pageSize = this.pageSizes[index];
    this.firstItem = 0;
    this.itemsChanged.next(this.list.slice(this.firstItem, this.pageSize));
    this.pageCountChanged.next(this.pageCounts[index]);
  }

  updatePageNumber(page: number): void {
    const start = (page - 1) * this.pageSize;
    const end = start + this.pageSize;

    this.itemsChanged.next(this.list.slice(start, end));
  }

}
