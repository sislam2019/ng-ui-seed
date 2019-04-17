import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';
import { UploadModule } from '@progress/kendo-angular-upload';
import { MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { DialogsModule } from '@progress/kendo-angular-dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GridModule,
    UploadModule,
    MultiSelectModule,
    InputsModule,
    DateInputsModule,
    DropDownsModule,
    ExcelExportModule,
    UploadModule,
    DialogsModule
  ],
  exports: [
    CommonModule,
    GridModule,
    UploadModule,
    MultiSelectModule,
    InputsModule,
    DateInputsModule,
    DropDownsModule,
    ExcelExportModule,
    UploadModule,
    DialogsModule
  ]
})
export class AngularKendoModule { }
