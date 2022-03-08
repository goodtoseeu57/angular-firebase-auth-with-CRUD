import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {

  userEmail!: string | null | undefined;

  constructor(private angularFireAuth: AngularFireAuth) {

  }

  ngOnInit(): void {

    this.angularFireAuth.user.subscribe(user => {
      this.userEmail = user?.email;
    })
  }


}
