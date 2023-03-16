import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepecifComponent } from './sepecif.component';

describe('SepecifComponent', () => {
  let component: SepecifComponent;
  let fixture: ComponentFixture<SepecifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SepecifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SepecifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
