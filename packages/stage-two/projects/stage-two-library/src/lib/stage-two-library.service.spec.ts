import { TestBed, inject } from '@angular/core/testing';

import { StageTwoLibraryService } from './stage-two-library.service';

describe('StageTwoLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StageTwoLibraryService]
    });
  });

  it('should be created', inject([StageTwoLibraryService], (service: StageTwoLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
