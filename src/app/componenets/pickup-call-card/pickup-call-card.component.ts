import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pickup-call-card',
  templateUrl: './pickup-call-card.component.html',
  styleUrls: ['./pickup-call-card.component.scss'],
})
export class PickupCallCardComponent  implements OnInit {

  @Input() hasheader!: boolean;
  @Input() hasfooter!: boolean;
  @Input() status!: string;
  @Input() createdat!: string;
  @Input() notes!: string;
  @Input() value!: string;
  constructor() { }

  ngOnInit() {}

}
