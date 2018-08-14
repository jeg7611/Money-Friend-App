import { Component } from '@angular/core';
import { DataService } from './data.service';
import { Post } from './Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoneyFriend';

  name = 'Jose Eyber Garcia';
  age = 28;
  posts = [];

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    });
  }
}
