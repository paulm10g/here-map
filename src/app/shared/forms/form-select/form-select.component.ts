import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectChange, MatSelectModule} from "@angular/material/select";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrl: './form-select.component.scss'
})
export class FormSelectComponent {
  @Input() list?: Array<{ id: number, name: string }>;
  @Output() id: EventEmitter<number> = new EventEmitter<number>;

  change($event: MatSelectChange) {
    this.id.emit($event.value)
  }
}
