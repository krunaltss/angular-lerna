import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageOneLibraryComponent } from './stage-one-library.component';

describe('StageOneLibraryComponent', () => {
  let component: StageOneLibraryComponent;
  let fixture: ComponentFixture<StageOneLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageOneLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageOneLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
