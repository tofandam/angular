import { TestBed } from '@angular/core/testing';

import { ListaToDoService } from './lista-to-do.service';

describe('ListaToDoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaToDoService = TestBed.get(ListaToDoService);
    expect(service).toBeTruthy();
  });
});
