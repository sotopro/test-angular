import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../home/components/modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }
  openConfirmDialog(message: string){
    return this.dialog.open(ModalComponent,{
       width: '400px',
       disableClose: true,
       data :{
         message : message
       }
     });
   }
}
