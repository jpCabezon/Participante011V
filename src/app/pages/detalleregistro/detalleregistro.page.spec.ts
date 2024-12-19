import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleregistroPage } from './detalleregistro.page';

describe('DetalleregistroPage', () => {
  let component: DetalleregistroPage;
  let fixture: ComponentFixture<DetalleregistroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleregistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
