import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO';
  storedPosts: string[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
    console.log(this.storedPosts);
  }

}
