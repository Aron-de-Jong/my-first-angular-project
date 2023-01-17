import { Component, OnChanges, SimpleChanges } from '@angular/core';

const TEMPLATE = `
  <h2>Source code version</h2>
  <button (click)="newMajor">New minor version</button>  
  <button>New major version</button>
  <app-version-child [major]="major" [minor]="minor"></app-version-child>
`

@Component({
  selector: 'app-version-parent',
  //template: ``
  template: TEMPLATE
})
export class VersionParentComponent {
  // ngOnChanges(changes: SimpleChanges): void {
  //   const log: string[] = [];
  //   const logs2 = Object.keys(changes).map(changedProp => {
  //     const to = JSON.stringify(changedProp);
  //     to
  //   });
  //   this.changeLog.push(log.join(', '))
  // }

  major = 24
  minor = 8

  newMajor(){
    this.major++;
  }
  newMinor(){
    this.minor++;
  }
}
