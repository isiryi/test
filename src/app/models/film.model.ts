export class Film {
  public name: string;
  public genre: string[];
  public season: number;
  public network: string[];
  public premiere: string;

  constructor(name: string, genre: string[], season: number, network: string[], premiere: string) {
    this.name = name;
    this.genre = genre;
    this.season = season;
    this.network = network;
    this.premiere = premiere;
  }
}
