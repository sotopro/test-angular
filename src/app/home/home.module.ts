import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { PostsService } from './services/posts.service';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    HeaderComponent,
    ListComponent,
    ItemListComponent,
    ModalComponent,
    SnackbarComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule
  ],
  providers: [PostsService],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
