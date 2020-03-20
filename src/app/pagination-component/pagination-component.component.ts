import { Component, OnInit } from '@angular/core';
import { ListService } from "../services/list.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-pagination-component',
  templateUrl: './pagination-component.component.html',
  styleUrls: ['./pagination-component.component.less']
})
export class PaginationComponentComponent implements OnInit {
  pageSizes: number[];
  currentPageSize: number;
  pageCount;
  currentPage: number;
  subscriptionPage: Subscription;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.pageSizes = this.listService.getPageSizes();
    this.currentPageSize = this.pageSizes[0];
    this.pageCount = this.listService.getPageCount();
    this.currentPage = this.pageCount[0];
    this.subscriptionPage = this.listService.pageCountChanged
      .subscribe((pageCount) => {
          this.pageCount = pageCount;
      });
  }

  onPageSizeChanged(index: number, size: number): void {
    if (this.currentPageSize !== size) {
      this.listService.setPageSize(index);
      this.currentPageSize = size;
      this.currentPage = this.pageCount[0];
    }
  }

  onPageNumberChanged(page: number): void {
    this.listService.updatePageNumber(page);
    this.currentPage = page;
  }

  onPreviousPage(): void {
    if (this.currentPage > 1 ) {
      --this.currentPage;
      this.listService.updatePageNumber(this.currentPage);
    } else {
      return;
    }
  }

  onNextPage(): void {
    if (this.currentPage < this.pageCount.slice(-1)[0] ) {
      ++this.currentPage;
      this.listService.updatePageNumber(this.currentPage);
    } else {
      return;
    }
  }

}
