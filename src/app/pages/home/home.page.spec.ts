import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.page';
import { Router } from '@angular/router';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    router = TestBed.get(router);
  });

  it('click See all button goes to pickup calles page',()=>{
    spyOn(router,'navigate');
    component.pickupCalls();
    expect(router.navigate ).toHaveBeenCalledOnceWith(['pickup-calls'])
  });

  it('click See all button goes to pickup calles page',()=>{
    spyOn(router,'navigate');
    component.newpickupCalls();
    expect(router.navigate).toHaveBeenCalledOnceWith(['pickup-call'])
  });

});
