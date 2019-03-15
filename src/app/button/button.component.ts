import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
   <button (click)="handleClick()">{{label}}</button>
  `,
  styles: [`
  button {
    border: solid 3px;
    padding: 8px 10px;
    background: #bada55;
    font-size:20px;
  }
  `],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {
  @Input() label = 'default label';
  @Output() action = new EventEmitter<number>();
  private clickCt = 0;

  handleClick() {
    this.clickCt++;
    this.action.emit(this.clickCt);
  }

  ngOnInit() {
  }

}
