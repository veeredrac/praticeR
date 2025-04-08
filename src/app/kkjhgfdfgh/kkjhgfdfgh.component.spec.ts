import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KkjhgfdfghComponent } from './kkjhgfdfgh.component';

describe('KkjhgfdfghComponent', () => {
  let component: KkjhgfdfghComponent;
  let fixture: ComponentFixture<KkjhgfdfghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KkjhgfdfghComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KkjhgfdfghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
