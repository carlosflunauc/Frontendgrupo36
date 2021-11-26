import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbNavegacionComponent } from './navb-navegacion.component';

describe('NavbNavegacionComponent', () => {
  let component: NavbNavegacionComponent;
  let fixture: ComponentFixture<NavbNavegacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbNavegacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbNavegacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
