import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { MatDialog, MatDialogRef } from '@angular/material';
import {  RegisterformComponent } from '../registerform/registerform.component';
>>>>>>> fc7f55190b0e9dc1cc0436293073b68d8ae9a8d7

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
  }
=======
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openRegistrationForm() {
    this.dialog.open(RegisterformComponent, { width: '800px', height: '700px'});
  }
>>>>>>> fc7f55190b0e9dc1cc0436293073b68d8ae9a8d7

}
