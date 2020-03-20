import { Subject } from 'rxjs';
import { Film } from '../models/film.model';

export class FilmsService {

  private films: Film[] = [
    new Film(
      'The Terror',
      ['horror', 'drama'],
      3,
      ['AMC'],
      '2019-10-20'
    ),
    new Film(
      'Better Call Saul',
      ['crime', 'tragedy'],
      4,
      ['AMC', 'Netflix'],
      '2019-11-05'
    ),
    new Film(
      'Preacher',
      ['drama', 'dark comedy'],
      5,
      ['AMC'],
      '2019-01-01'
    ),
    new Film(
      'The Terror',
      ['horror', 'drama'],
      2,
      ['AMC'],
      '2019-01-10'
    ),
    new Film(
      'Better Call Saul',
      ['crime', 'tragedy'],
      3,
      ['AMC', 'Netflix'],
      '2018-02-04'
    ),
    new Film(
      'The Terror',
      ['horror', 'drama'],
      1,
      ['AMC'],
      '2010-10-20'
    ),
    new Film(
      'Better Call Saul',
      ['crime', 'tragedy'],
      1,
      ['AMC', 'Netflix'],
      '2009-11-05'
    ),
    new Film(
      'Preacher',
      ['drama', 'dark comedy'],
      1,
      ['AMC'],
      '2008-01-01'
    ),
    new Film(
      'The Terror',
      ['horror', 'drama'],
      24,
      ['AMC'],
      '2020-01-10'
    ),
    new Film(
      'Better Call Saul',
      ['crime', 'tragedy'],
      5,
      ['AMC', 'Netflix'],
      '2020-02-04'
    ),

    new Film(
      'Preacher',
      ['drama', 'dark comedy'],
      1,
      ['AMC'],
      '2008-01-01'
    ),
    new Film(
      'The Terror',
      ['horror', 'drama'],
      24,
      ['AMC'],
      '2020-01-10'
    ),
    new Film(
      'Better Call Saul',
      ['crime', 'tragedy'],
      5,
      ['AMC', 'Netflix'],
      '2020-02-04'
    )
  ];

  constructor() {}

  getFilms(): Film[] {
    return this.films.slice();
  }

}
