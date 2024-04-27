import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.css',
})
export class Comp1Component {
  list1: number[] = [];
  constructor(private _numlistService: NumlistService) {
    this.list1 = this._numlistService.getlist();
  }

  addnumber(val: any) {
    this._numlistService.addnum(val);
    this.list1 = this._numlistService.getlist();
  }
}
