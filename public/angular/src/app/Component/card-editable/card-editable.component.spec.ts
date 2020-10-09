import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditableComponent } from './card-editable.component';

describe('CardEditableComponent', () => {
  let component: CardEditableComponent;
  let fixture: ComponentFixture<CardEditableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEditableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
