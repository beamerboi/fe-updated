import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseMainComponent } from './enterprise-main.component';

describe('EnterpriseMainComponent', () => {
  let component: EnterpriseMainComponent;
  let fixture: ComponentFixture<EnterpriseMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseMainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
