import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilsComponent } from './acceuils.component';

describe('AcceuilsComponent', () => {
  let component: AcceuilsComponent;
  let fixture: ComponentFixture<AcceuilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceuilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceuilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
