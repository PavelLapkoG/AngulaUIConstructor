//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,
        MdCheckboxModule,
        MdGridListModule,
        MdCardModule,
        MdFormFieldModule,
        MdListModule,
        MdInputModule,
        MdRadioModule,
        MdSnackBarModule,
        MdDialogModule} from '@angular/material';
import {CodemirrorModule} from 'ng2-codemirror';
import {DndModule} from 'ng2-dnd';
//components
import {AppComponent } from './app.component';
import {TypeConstructorComponent} from './components/type-constructor.component/type-constructor.component';
import {AddTypeCardDialogComponent} from './components/add-card-dialog.component/add-card-dialog.component';
import {TypeCardComponent} from './components/type-card.component/type-card.component';
//pipes
import {StringToBooleanPipe} from './pipes/stringBool';

@NgModule({
  declarations: [
    AppComponent,
    TypeConstructorComponent,
    TypeCardComponent,
    StringToBooleanPipe,
    AddTypeCardDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    MdGridListModule,
    MdCardModule,
    MdFormFieldModule,
    MdListModule,
    MdInputModule,
    MdRadioModule,
    CodemirrorModule,
    FormsModule,
    MdSnackBarModule,
    MdDialogModule,
    DndModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddTypeCardDialogComponent]

})
export class AppModule { }
