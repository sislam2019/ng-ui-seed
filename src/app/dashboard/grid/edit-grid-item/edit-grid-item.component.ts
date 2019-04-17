import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { GridData } from './../../../_models/grid-data';
import { IntlService } from '@progress/kendo-angular-intl';

@Component({
  selector: 'app-edit-grid-item',
  templateUrl: './edit-grid-item.component.html',
  styleUrls: ['./edit-grid-item.component.scss']
})
export class EditGridItemComponent {

  constructor(public intl: IntlService) {}
  public active = false;
  public editForm: FormGroup = new FormGroup({

    ESTIMATE_DESCRIPTION: new FormControl('', Validators.required),
    REQUEST_START_DATE: new FormControl(),
    REQUEST_END_DATE: new FormControl(),
    BUYER_NAME: new FormControl('', Validators.required),
  });

  public range = { REQUEST_START_DATE: this.intl.parseDate('4/4/2019'), REQUEST_END_DATE: null };

  @Input() public isNew = false;

  @Input() public set model(post: GridData) {
    this.editForm.reset(post);

    this.active = post !== undefined;
  }

  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() save: EventEmitter<GridData> = new EventEmitter();

  public onSave(e): void {
    e.preventDefault();
    this.save.emit(this.editForm.value);
    this.active = false;
  }

  public onCancel(e): void {
    e.preventDefault();
    this.closeForm();
  }

  private closeForm(): void {
    this.active = false;
    this.cancel.emit();
  }

}
