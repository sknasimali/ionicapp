import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPage } from './register.page';
import { Router } from '@angular/router';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPage);
    component = fixture.componentInstance;
    router = TestBed.get(router);
  });
  it('should go to home page on pressed register button',()=>{
    spyOn(router,'navigate');
    component.register();
    expect(router.navigate).toHaveBeenCalledOnceWith(['home']);
  })
});
