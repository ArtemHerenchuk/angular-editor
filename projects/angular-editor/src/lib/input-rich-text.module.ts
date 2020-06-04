import {NgModule} from '@angular/core';
import {InputRichTextComponent} from './input-rich-text.component';
import {InputRichTextToolbarComponent} from './input-rich-text-toolbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AeSelectComponent } from './ae-select/ae-select.component';
import {ColorPickerModule} from "ngx-color-picker";

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, ColorPickerModule
  ],
  declarations: [InputRichTextComponent, InputRichTextToolbarComponent, AeSelectComponent],
  exports: [InputRichTextComponent, InputRichTextToolbarComponent]
})
export class InputRichTextModule {
}
