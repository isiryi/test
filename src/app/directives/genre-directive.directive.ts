import { Directive, Input, OnInit, ElementRef} from '@angular/core';

@Directive({
  selector: '[appGenreDirective]'
})
export class GenreDirectiveDirective  implements OnInit  {
  @Input() genre: string;

  constructor(private element: ElementRef){ }

  ngOnInit() {

    let bgColor: string;
    let color: string;
    switch (this.genre) {
      case 'horror':
        bgColor = '#666666';
        color = '#ffffff';
        break;
      case 'drama':
        bgColor = '#ffb3ff';
        color = '#ffffff';
        break;
      case 'crime':
        bgColor = '#cc0099';
        color = '#ffffff';
        break;
      case 'tragedy':
        bgColor = '#ff6666';
        color = '#ffffff';
        break;
      case 'dark comedy':
        bgColor = '#cccccc';
        color = '#ffffff';
        break;
      default:
        bgColor = '#ffffff';
        color = '#333333';

    }
    this.element.nativeElement.style.backgroundColor = bgColor;
    this.element.nativeElement.style.color = color;
  }

}
