import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureListeComponent } from './facture-liste.component';

describe('FactureListeComponent', () => {
  let component: FactureListeComponent;
  let fixture: ComponentFixture<FactureListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
