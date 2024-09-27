import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGoodsComponent } from './my-goods.component';

describe('MyGoodsComponent', () => {
  let component: MyGoodsComponent;
  let fixture: ComponentFixture<MyGoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyGoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyGoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
