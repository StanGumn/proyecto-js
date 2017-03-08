import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDeporteComponent } from './listar-deporte.component';

describe('ListarDeporteComponent', () => {
  let component: ListarDeporteComponent;
  let fixture: ComponentFixture<ListarDeporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDeporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
