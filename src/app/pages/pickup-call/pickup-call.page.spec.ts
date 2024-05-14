import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupCallPage } from './pickup-call.page';
import { Router } from '@angular/router';

describe('PickupCallPage', () => {
  let component: PickupCallPage;
  let fixture: ComponentFixture<PickupCallPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupCallPage);
    component = fixture.componentInstance;
    router = TestBed.get(router);
  });

  it('add pickup calls got to all pickup-calls',() =>{
    spyOn(router,'navigate');
    component.pickupCalls();
    expect(router.navigate).toHaveBeenCalledOnceWith(['pickup-calls']);
  })
});
