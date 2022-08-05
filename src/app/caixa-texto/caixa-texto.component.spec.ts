import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixaTextoComponent } from './caixa-texto.component';

describe('CaixaTextoComponent', () => {
  let component: CaixaTextoComponent;
  let fixture: ComponentFixture<CaixaTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixaTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixaTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
