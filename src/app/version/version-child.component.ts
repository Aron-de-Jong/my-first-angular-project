import { Input, Component, OnChanges, SimpleChanges } from '@angular/core';

const TEMPLATE = `
  <h3>Version: {{ major }}.{{ minor }}</h3>
  <h4>Change log:</h4>
  <ul>
    <li *ngFor="let change of changeLog">{{ change }}</li>
  </ul>
`

@Component({
  selector: 'app-version-child',
  //template: ``
  template: TEMPLATE
})
export class VersionChildComponent implements OnChanges {
// ngOnChanges(changes: SimpleChanges): void {
//   const log: string[] = [];
//   const logs2 = Object.keys(changes).map(changedProp => {
//     const to = JSON.stringify(changedProp);
//     to
//   });
//   this.changeLog.push(log.join(', '))
// }

ngOnChanges(changes: SimpleChanges) {
  const log: string[] = Object.keys(changes).map(function(propName) {
    const changedProp = changes[propName];
    const to = JSON.stringify(changedProp.currentValue);
    if (changedProp.isFirstChange()) {
      return `Initial value of ${propName} set to ${to}`;
    } else {
      const from = JSON.stringify(changedProp.previousValue);
      return `${propName} changed from ${from} to ${to}`;
    }
  });

  this.changeLog.push(log.join(', '));
}

  @Input() major = 0;
  @Input() minor = 0;
  changeLog = [
    "Changed code",
    "Refactored"
  ]


}
