import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WindTurbine } from './wind-turbine.model';

@Component({
  selector: 'app-wind-turbine-item',
  templateUrl: './wind-turbine-item.component.html',
  styleUrls: ['./wind-turbine-item.component.scss']
})
export class WindTurbineItemComponent implements OnInit {
  @Input() item: WindTurbine;

  @Output() onUpdated: EventEmitter<WindTurbine> = new EventEmitter();
  @Output() onDeleted: EventEmitter<number> = new EventEmitter();

  windTurbine: WindTurbine;

  isEditMode = false;

  ngOnInit() {
    this.windTurbine = Object.assign({}, this.item);
  }

  onEdit() {
    this.isEditMode = true;
  }

  onSave() {
    this.isEditMode = false;
    this.onUpdated.emit(this.windTurbine);
  }

  onCancel() {
    this.isEditMode = false;
    this.windTurbine = Object.assign({}, this.item);
  }

  onDelete() {
    this.isEditMode = false;
    this.onDeleted.emit(this.windTurbine.id);
  }
}
