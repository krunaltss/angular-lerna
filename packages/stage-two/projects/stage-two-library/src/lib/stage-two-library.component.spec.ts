import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageTwoLibraryComponent } from './stage-two-library.component';

describe('StageTwoLibraryComponent', () => {
  let component: StageTwoLibraryComponent;
  let fixture: ComponentFixture<StageTwoLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageTwoLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageTwoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
