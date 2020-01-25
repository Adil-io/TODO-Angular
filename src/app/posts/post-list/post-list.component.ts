import { element } from 'protractor';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  onDelete(event) {
    const element = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    element.parentNode.removeChild(element);
  }

}
