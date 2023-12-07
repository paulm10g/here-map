import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {FormSelectComponent} from "./form-select/form-select.component";


@NgModule({
  declarations: [
    FormSelectComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
  ],
  exports: [
    FormSelectComponent
  ]
})
export class AppFormsModule {
}
