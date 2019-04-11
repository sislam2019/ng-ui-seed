import { Component, OnInit } from '@angular/core';
import { DropdownData } from './../../_models/dropdown-data';
import { DataService } from 'src/app/_services/data.service';
import { GroupResult, groupBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  public listItems: Array<string> = [
    'Baseball', 'Basketball', 'Cricket', 'Field Hockey',
    'Football', 'Table Tennis', 'Tennis', 'Volleyball'
  ];
  dropdownData: DropdownData[] = [];
  public groupedData: any[];
  cardBackground = true;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.dataService.getDropdownData().subscribe((data: DropdownData[]) => {
      this.dropdownData = data;
      this.groupedData = groupBy(this.dropdownData, [{field: 'Location'}]);
    });

  }
  toggleCardBackground(e) {
    if (e.checked === false) {
      this.cardBackground = false;
    }
    if (e.checked === true) {
      this.cardBackground = true;
    }
  }
}
