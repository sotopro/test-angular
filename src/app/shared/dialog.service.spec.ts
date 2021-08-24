import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DialogService } from './dialog.service';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalComponent } from 'src/app/home/components/modal/modal.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DialogService', () => {
  let modalService: DialogService;
  let dialogSpy: jasmine.Spy;

  beforeEach(() => {
      TestBed.configureTestingModule({
          imports: [MatDialogModule, BrowserAnimationsModule],
          providers: [
            DialogService,
            { provide: MAT_DIALOG_DATA, useValue: {} },
            { provide: MatDialogRef, useValue: {} }
          ]
      });
      modalService = TestBed.get(DialogService);
  });

  beforeEach(() => {
    dialogSpy = spyOn(TestBed.get(MatDialog), 'open').and.returnValue(DialogService);
});

  it('open modal ', () => {
      modalService.openConfirmDialog('¿Está seguro que desea eliminar este registro?');
      expect(dialogSpy).toHaveBeenCalled();

      // You can also do things with this like:
      expect(dialogSpy).toHaveBeenCalledWith(ModalComponent, { width: '400px', disableClose: true, data: { message: '¿Está seguro que desea eliminar este registro?'}});
  });
});
