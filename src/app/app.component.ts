import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h3>Moslem Tamplate</h3>',
  /* template: `
  <h3>Moslem</h3>
  <h2>Mousazadeh</h2>
  `, */
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Title Project MoslemMousazadeh.Com';
  WebSiteName = 'moslemmousazadeh.com';
  firsName = 'Moslem';
  lastName = 'Mousazadeh';
  flag = false;
  myclass = 'my1';
  myclass2 = 'my2';
  color = 'green';
}
