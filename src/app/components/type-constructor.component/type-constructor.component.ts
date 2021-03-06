import {Injectable} from '@angular/core';
import {Component} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {MdSnackBar, MdDialog} from '@angular/material';
import {TYPE_CONST} from '../../app.constants';
import {AddTypeCardDialogComponent} from '../../components/add-card-dialog.component/add-card-dialog.component';

@Component({
  selector: 'type-constructor',
  templateUrl: 'type-constructor.component.html',
  providers: [JsonPipe]
})

@Injectable()
export class TypeConstructorComponent {

  correctView = true;
  // 3 type by default
  uiConstructorObject  = [TYPE_CONST.textarea, TYPE_CONST.checkbox, TYPE_CONST.radio];

  constructor(
    public snackBar: MdSnackBar,
    public dialog: MdDialog
  ) {}

  // ngModel change function
  changeCode(event) {
    try {
      this.uiConstructorObject = JSON.parse(event);
      this.correctView = true;
    } catch (e) {
      // not valid JSON
      this.correctView = false;
      console.error(e);
      this.snackBar.open(e.message, 'Undo', {
        duration: 2000
      });
    }
  }

  // update code function by event from another component
  changeCardData(data) {
    if (data.value === 'delete') {
      this.uiConstructorObject.splice(data.index, 1);
    } else {
      this.uiConstructorObject[data.key] = data.value;
    }
  }

  // adding dialog
  openAddDialog() {
    let addDialog = this.dialog.open(AddTypeCardDialogComponent, {
      width: '250px'
    });
    addDialog.afterClosed().subscribe(result => {
      this.uiConstructorObject.push(TYPE_CONST[result]);
    });
  }
}


