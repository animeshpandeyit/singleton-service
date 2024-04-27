import { Component } from '@angular/core';
import { NumlistService } from '../numlist.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrl: './comp2.component.css',
})
export class Comp2Component {
  constructor(private _numlistService: NumlistService) {}
}
