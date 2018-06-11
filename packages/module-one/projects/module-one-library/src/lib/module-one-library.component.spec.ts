import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneLibraryComponent } from './module-one-library.component';

describe('ModuleOneLibraryComponent', () => {
  let component: ModuleOneLibraryComponent;
  let fixture: ComponentFixture<ModuleOneLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleOneLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleOneLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
