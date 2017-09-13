import {Inject} from '@angular/core';
import {Component} from '@angular/core';
import {MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'add-type-card-dialog',
  templateUrl: 'add-card-dialog.component.html',
})
export class AddTypeCardDialogComponent {

  radioArray = [
    {value: 'textarea', title: 'TextArea'},
    {value: 'checkbox', title: 'Checkbox'},
    {value: 'radio', title: 'Radio'},
  ];

  selectedType = 'textarea';

  constructor(
    public dialogRef: MdDialogRef<AddTypeCardDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
