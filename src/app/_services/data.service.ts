import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DropdownData } from './../_models/dropdown-data';
import { GridData } from '../_models/grid-data';

import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // Grid
  getPosts() {
    return this.http.get<GridData[]>('../../assets/data/grid/post.json');
  }
  // Dropdown (single and multi-select)
  getDropdownData() {
    return this.http.get<DropdownData[]>('../../assets/data/dropdown/dropdown.json');
  }
}
