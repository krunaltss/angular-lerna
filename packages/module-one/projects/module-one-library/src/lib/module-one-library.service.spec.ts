import { TestBed, inject } from '@angular/core/testing';

import { ModuleOneLibraryService } from './module-one-library.service';

describe('ModuleOneLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModuleOneLibraryService]
    });
  });

  it('should be created', inject([ModuleOneLibraryService], (service: ModuleOneLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
