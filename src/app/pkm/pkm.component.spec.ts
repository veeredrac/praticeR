import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkmComponent } from './pkm.component';

describe('PkmComponent', () => {
  let component: PkmComponent;
  let fixture: ComponentFixture<PkmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PkmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
