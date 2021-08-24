import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { PostsService } from './services/posts.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        MatPaginatorModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule
      ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call postsData and get response as empty array', fakeAsync(() => {
    const fixture = TestBed.createComponent(HomeComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(PostsService);
    let spy_getPosts = spyOn(service,"getPosts").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.getAllPosts();
    tick(100);
    expect(component.postsData).toEqual([]);
  }))
});

