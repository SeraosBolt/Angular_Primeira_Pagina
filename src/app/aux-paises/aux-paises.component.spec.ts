import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuxPaisesComponent } from './aux-paises.component';

describe('AuxPaisesComponent', () => {
  let component: AuxPaisesComponent;
  let fixture: ComponentFixture<AuxPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuxPaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuxPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
