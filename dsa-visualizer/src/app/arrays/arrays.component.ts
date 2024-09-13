import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-arrays',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './arrays.component.html',
  styleUrl: './arrays.component.css'
})
export class ArraysComponent {
  public sortMethods: any[] = [
    { id: 1, sortMethod: 'Bubble Sort' },
    { id: 2, sortMethod: 'Merge Sort' },
    { id: 3, sortMethod: 'Quick Sort' }];

   selectedSortMethodId: number | null = null;

    updateObj(selectedId: number) {
      this.selectedSortMethodId = selectedId;
    }
}
