import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankMainComponent } from './bank-main.component';

describe('BankMainComponent', () => {
  let component: BankMainComponent;
  let fixture: ComponentFixture<BankMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
