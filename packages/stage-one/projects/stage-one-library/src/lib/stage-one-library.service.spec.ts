import { TestBed, inject } from '@angular/core/testing';

import { StageOneLibraryService } from './stage-one-library.service';

describe('StageOneLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StageOneLibraryService]
    });
  });

  it('should be created', inject([StageOneLibraryService], (service: StageOneLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
