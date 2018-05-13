import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  public games:any
  public show:boolean=false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://starlord.hackerearth.com/gamesext').subscribe(data => {
      this.games = data;
      this.show = true;

    });
  }
}
