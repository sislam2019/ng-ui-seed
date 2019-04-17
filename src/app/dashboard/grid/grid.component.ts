import { Component, OnInit } from '@angular/core';
import { GridData } from './../../_models/grid-data';
import { DataService } from './../../_services/data.service';

// Kendo Specific
import { State, process } from '@progress/kendo-data-query';
import { IntlService } from '@progress/kendo-angular-intl';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs/Observable';
import { GridService } from './grid.service';
import { map } from 'rxjs/operators/map';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  // variables declare and initialize
  // ================================
  public state: State = {
    skip: 0,
    take: 80,
    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: []
    }
  };
  public view: Observable<GridDataResult>;
  gridData: GridData[] = [];
  selectedGridData: GridData[] = [];
  public editDataItem: GridData;
  public isNew: boolean;

  constructor(
    public intl: IntlService,
    public dataService: DataService,
    public gridService: GridService
  ) { }

  ngOnInit() {

    this.view = this.gridService.pipe(map(data => process(data, this.state)));
    this.gridService.read();
  }

  // Grid data change stae for filtering, sorting, grouping
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridService.read();
  }

  public addHandler() {
    this.editDataItem = new GridData();
    this.isNew = true;
  }

  public editHandler({ dataItem }) {
    this.editDataItem = dataItem;
    this.isNew = false;
  }

  public cancelHandler() {
    this.editDataItem = undefined;
  }

  public saveHandler(post: GridData) {
    this.gridService.save(post, this.isNew);

    this.editDataItem = undefined;
  }

  public removeHandler({dataItem}) {
      this.gridService.remove(dataItem);
  }

}
