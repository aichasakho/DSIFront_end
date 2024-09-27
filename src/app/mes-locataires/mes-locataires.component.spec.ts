import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesLocatairesComponent } from './mes-locataires.component';

describe('MesLocatairesComponent', () => {
  let component: MesLocatairesComponent;
  let fixture: ComponentFixture<MesLocatairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesLocatairesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesLocatairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
