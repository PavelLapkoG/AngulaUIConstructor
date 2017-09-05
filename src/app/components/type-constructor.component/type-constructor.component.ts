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
    } catch (e) {
      // not valid JSON
      console.log(e);
      this.snackBar.open('Problems with JSON', 'Undo', {
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
      switch (result) {
        case 1 :
          this.uiConstructorObject.push(TYPE_CONST.textarea);
          break;
        case 2 :
          this.uiConstructorObject.push(TYPE_CONST.checkbox);
          break;
        case 3 :
          this.uiConstructorObject.push(TYPE_CONST.radio);
          break;
        default : return;
      }
    });
  }
}


