import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ModalComponent } from './components/modal/modal.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { PaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ItemListComponent,
    ModalComponent,
    SnackbarComponent,
    PaginatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
