import { Posts } from '../../services/Posts';

import {AfterViewInit, Component, ViewChild, Input} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource, MatTable} from '@angular/material/table';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit  {
  @Input() data: Posts[];
  displayedColumns: string[] = ['id', 'title', 'body', 'action'];
  dataSource = new MatTableDataSource<Posts>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Posts>;
  constructor() { }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Posts>(this.data);
    this.dataSource.paginator = this.paginator;
    console.log('this.data', this.data, 'dataSource', this.dataSource);
  }
}
