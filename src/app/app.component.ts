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
  fullname = 'Moslem Mousazadeh';
  email = 'MoslemMousazadeh@yahoo.com';
  phone = '0918229010';
  hide = false;
  showcolor(): void{
    this.flag = !this.flag;
  }
  show(): void {
    this.hide = !this.hide;
  }
  // tslint:disable-next-line:typedef
  clickMyinputtext(e) {
    console.log(e.value);
  }
}
