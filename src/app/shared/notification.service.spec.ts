import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [MatSnackBarModule],
        providers: [
          NotificationService
        ]
    });
    service = TestBed.get(NotificationService);
    snackBar = TestBed.get(MatSnackBar);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call success()', () => {
    const spy = spyOn(snackBar, 'open');
    service.success('Hello');
    expect(spy).toHaveBeenCalled();
  })
  it('should call error()', () => {
    const spy = spyOn(snackBar, 'open');
    service.error('Hello');
    expect(spy).toHaveBeenCalled();
  })
});
