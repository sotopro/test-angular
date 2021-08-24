import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [MatSnackBarModule],
        providers: [
          NotificationService
        ]
    });
    service = TestBed.get(NotificationService);
});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
