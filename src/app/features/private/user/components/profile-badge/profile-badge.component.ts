import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile-badge',
  templateUrl: './profile-badge.component.html',
  styleUrls: ['./profile-badge.component.scss']
})
export class ProfileBadgeComponent implements OnInit {

  @Input() userEmail!: string

  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
  }

  ngOnInit(): void {
  }

  signOut() {
    this.angularFireAuth.signOut().then(res => {
      this.router.navigateByUrl('login');
    })
  }

}
