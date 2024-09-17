import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienImmobilierComponent } from './bien-immobilier.component';

describe('BienImmobilierComponent', () => {
  let component: BienImmobilierComponent;
  let fixture: ComponentFixture<BienImmobilierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BienImmobilierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BienImmobilierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
