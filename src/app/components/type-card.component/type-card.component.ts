import {Component, Input, Output, EventEmitter} from '@angular/core';
import {StringToBooleanPipe} from '../../pipes/stringBool';

@Component({
  selector: 'type-card',
  templateUrl: 'type-card.component.html',
  providers: [StringToBooleanPipe]
})

export class TypeCardComponent {

  @Input() typeCardData;
  @Input() typeCardIndex;
  @Output() changeCardData = new EventEmitter();

  constructor(private strBool: StringToBooleanPipe) {
  }

  deleteCard() {
    this.changeCardData.emit({index: this.typeCardIndex, value: 'delete'});
  }

  updateCheckbox(index){
    let booleanValue = this.strBool.transform(this.typeCardData.description.options[index].value);
    booleanValue = !booleanValue;
    this.typeCardData.description.options[index].value = booleanValue.toString() ;
    this.changeCardData.emit({index: this.typeCardIndex, data: this.typeCardData});
  }

  updateRadio(value) {
    console.log(value);
    this.typeCardData.description.value = value;
    this.changeCardData.emit({index: this.typeCardIndex, data: this.typeCardData});
  }

  updateInput() {
    this.changeCardData.emit({index: this.typeCardIndex, data: this.typeCardData});
  }

}
