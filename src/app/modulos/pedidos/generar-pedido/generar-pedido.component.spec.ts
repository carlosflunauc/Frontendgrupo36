import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarPedidoComponent } from './generar-pedido.component';

describe('GenerarPedidoComponent', () => {
  let component: GenerarPedidoComponent;
  let fixture: ComponentFixture<GenerarPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
