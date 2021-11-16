import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styles: ['h1 {color: red};']
})
export class AppComponent implements OnInit {
  title = 'Default Student-List';
  name: string = "";
  clicked(): void {
    this.title = "Fred's Student-List";
  }
  clicked2(): void {
    this.title = "Dan's Student-List";
  }

  ngOnInit(): void {

    console.debug("This is a debug message");
  }
}
