import {Inject} from '@angular/core';
import {Component} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'add-type-card-dialog',
  templateUrl: 'add-card-dialog.component.html',
})
export class AddTypeCardDialogComponent {

  radioArray = [
    {value: 1, title: 'TextArea'},
    {value: 2, title: 'Checkbox'},
    {value: 3, title: 'Radio'},
  ];

  selectedType = 1;

  constructor(
    public dialogRef: MdDialogRef<AddTypeCardDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
