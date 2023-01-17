import { Component, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-version-parent',
  //template: ``
  template: `
  <h2>Source code version</h2>
  
  <button type="button" (click)="newMinor()">New minor version</button>  
  <button type="button" (click)="newMajor()">New major version</button>
  <app-version-child [major]="major" [minor]="minor"></app-version-child>
  `
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
