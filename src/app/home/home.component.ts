import { Component, OnInit } from '@angular/core';
import { RouterLinkActive } from '@angular/router'

import * as moment from 'moment'

import { IUsers } from '../shared'
import { UserService } from '../providers/users.service'

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public users: Array<IUsers>

  constructor(private userService: UserService) { 
    console.log('Moment: ' + moment().format('YYYY-MM-DD'))
  }

  ngOnInit() { 
    this.userService.all()
      .then(users => {
        this.users = <Array<IUsers>>users
      }, err => {
        alert('Error: ' + JSON.stringify(err));
      });
  }

}