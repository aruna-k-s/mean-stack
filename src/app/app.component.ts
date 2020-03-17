import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  posts = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callApi();
    this.postApi();
  }

  callApi() {
    this.http.get('http://localhost:3000/api/posts').subscribe(res => {
      this.posts = res['posts'];
    });
  }
  postApi() {
    this.http.post("http://localhost:3000/api/post", {
      title: 'hi its title',
      content: 'hi its content 1'
    }).subscribe(res => {
      console.log(res);
    })
  }
}
