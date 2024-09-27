import { TestBed } from '@angular/core/testing';

import { MesLocatairesService } from './mes-locataires.service';

describe('MesLocatairesService', () => {
  let service: MesLocatairesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MesLocatairesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
