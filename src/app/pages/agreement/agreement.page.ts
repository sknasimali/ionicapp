import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.page.html',
  styleUrls: ['./agreement.page.scss'],
})
export class AgreementPage implements OnInit {
  userdata = {
    name:"Nasim",
    description:"Fullstack Developer",
    address:"Kolkata",
    image:"https://cdn-icons-png.flaticon.com/512/21/21104.png"
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

  accept(){
    console.log("accept");
    this.router.navigate(['/login']);
  }
  decline(){
    console.log("decline");
  }
  getData(){
    let navigatedata : NavigationExtras = {
      state : {
        user:this.userdata
      }
    }
    this.router.navigate(['/userdata'],navigatedata);
  }
}
