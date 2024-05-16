import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
  pickupCalls(){
    this.route.navigate(['pickup-calls']);
  }
  newpickupCalls(){
    this.route.navigate(['pickup-call']);
  }
  addchild(){
    this.route.navigate(['child']);
  }

}
