import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletrodomesticosComponent } from './eletrodomesticos.component';

describe('EletrodomesticosComponent', () => {
  let component: EletrodomesticosComponent;
  let fixture: ComponentFixture<EletrodomesticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletrodomesticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EletrodomesticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
