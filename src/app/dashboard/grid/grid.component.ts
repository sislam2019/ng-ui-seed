import { Component, OnInit } from '@angular/core';
import { GridData } from './../../_models/grid-data';
import { DataService } from './../../_services/data.service';

// Kendo Specific
import { State } from '@progress/kendo-data-query';
import { IntlService } from '@progress/kendo-angular-intl';
import { DataStateChangeEvent } from '@progress/kendo-angular-grid';



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

  gridData: GridData[] = [];
  selectedGridData: GridData[] = [];

  constructor(
    public intl: IntlService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe((posts: GridData[]) => {
      posts.forEach(e => {
        e.REQUEST_START_DATE = this.intl.parseDate(e.REQUEST_START_DATE);
        e.REQUEST_END_DATE = this.intl.parseDate(e.REQUEST_END_DATE);
        e.Demos = e.Demos.split(',');
      });
      this.gridData = posts;
    });
  }

  // Grid data change stae for filtering, sorting, grouping
  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
  }

}
