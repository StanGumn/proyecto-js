import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarNoticiasDeporteComponent } from './listar-noticias-deporte.component';

describe('ListarNoticiasDeporteComponent', () => {
  let component: ListarNoticiasDeporteComponent;
  let fixture: ComponentFixture<ListarNoticiasDeporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarNoticiasDeporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarNoticiasDeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
