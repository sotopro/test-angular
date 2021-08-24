import { Posts } from '../../services/Posts';
import {Component, ViewChild, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTable} from '@angular/material/table';
import { DialogService } from 'src/app/shared/dialog.service';
import { NotificationService } from 'src/app/shared/notification.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements AfterViewInit   {
  @Input() data: Posts[];
  @Output() onDeletePost: EventEmitter<Posts> = new EventEmitter();
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['id', 'title', 'body', 'action'];
  dataSource = new MatTableDataSource<Posts>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<Posts>;
  constructor(private dialogService: DialogService, private notificationService: NotificationService) { }


  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<Posts>(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  onDelete(posts: Posts) {
    this.dialogService.openConfirmDialog('¿Está seguro que desea eliminar este registro?')
    .afterClosed().subscribe(result =>{
      if(result){
        this.onDeletePost.emit(posts);
        this.dataSource.data = this.dataSource.data.filter(x => x.id !== posts.id);
        this.notificationService.success('¡Se eliminó el registro satisfactoriamente!');
      }
    });
  }
}
