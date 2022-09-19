import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  redirectUser() {
    this.router.navigate(['/help'])
  }

  constructor(public route: ActivatedRoute, public router: Router) {
    debugger;
   }

  ngOnInit(): void {
  }

}
