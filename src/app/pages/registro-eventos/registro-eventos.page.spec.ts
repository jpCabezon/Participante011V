import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroEventosPage } from './registro-eventos.page';

describe('RegistroEventosPage', () => {
  let component: RegistroEventosPage;
  let fixture: ComponentFixture<RegistroEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
