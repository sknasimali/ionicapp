import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.page.html',
  styleUrls: ['./userdata.page.scss'],
})
export class UserdataPage implements OnInit {
  currentData: any;
  datatest: String = "Test Data";
  constructor(private route:ActivatedRoute, public router: Router) {
    this.route.queryParams.subscribe(params=>{
      this.currentData = this.router.getCurrentNavigation()?.extras?.state?.['user'];
      console.log(this.currentData);
    });
   }

  ngOnInit() {
  }

}
