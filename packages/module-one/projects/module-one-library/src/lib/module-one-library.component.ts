import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-module-one-library',
  template: `
    <p>
      module-one-library works!
    </p>
  `,
  styles: []
})
export class ModuleOneLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
