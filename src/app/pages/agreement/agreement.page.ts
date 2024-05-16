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
  constructor(private router:Router) { 
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },10)
  }

  ngOnInit() {
    let agreement = window.localStorage.getItem("agreement");
    console.log('123'+agreement);
   /* if(agreement == 'accept'){
      setTimeout(()=>{
        this.router.navigate(['/login']);
      },10)
      
    }*/
    console.log("Reload first");
  }

  accept(){
    console.log("accept");
    window.localStorage.setItem("agreement",'accept');
    this.router.navigate(['/login']);
  }
  decline(){
    console.log("decline");
  }
  getData(){
    let getLocalData = window.localStorage.getItem("key");
    console.log(getLocalData);
    let navigatedata : NavigationExtras = {
      state : {
        user:this.userdata
      }
    }
    this.router.navigate(['/userdata'],navigatedata);
  }
}
