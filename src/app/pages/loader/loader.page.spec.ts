import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoaderPage } from './loader.page';
import { Router } from '@angular/router';

describe('LoaderPage', () => {
  let component: LoaderPage;
  let fixture: ComponentFixture<LoaderPage>;
  let router: Router;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderPage);
    component = fixture.componentInstance;
    router = TestBed.get(router);
  });

  it('should create', fakeAsync(() => {
    spyOn(router,'navigate');
    component.ngOnInit();
    tick(1500);
    expect(router.navigate).toHaveBeenCalledWith(['login']);
  }));
});
