import { BrowserModule } from '@angular/platform-browser';
import { AngularMaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list-component/list.component';
import { ListItemComponent } from './list-item-component/list-item.component';
import { FilmsService } from "./services/films.service";
import { GenreDirectiveDirective } from './directives/genre-directive.directive';
import { PaginationComponentComponent } from './pagination-component/pagination-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListService } from "./services/list.service";
import { ListHeaderComponent } from './list-header-component/list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    GenreDirectiveDirective,
    PaginationComponentComponent,
    ListHeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [FilmsService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
