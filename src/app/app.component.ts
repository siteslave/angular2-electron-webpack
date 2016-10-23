import { Component } from '@angular/core';
import * as _crypto from 'crypto'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    let md5 = _crypto.createHash('md5').update('123456').digest('hex');
    console.log(md5)
  }
 }
