import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoCaComponent } from './pedido-ca.component';

describe('PedidoCaComponent', () => {
  let component: PedidoCaComponent;
  let fixture: ComponentFixture<PedidoCaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoCaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidoCaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
