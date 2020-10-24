import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Angular Elements </h1>
    <div id="container"></div>
    <button (click)="addGreeter()"> Add greeter </button>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  addGreeter(){
    const container = document.getElementById('container');
    container.innerHTML= '<app-greeter></app-greeter>'
  }
}
