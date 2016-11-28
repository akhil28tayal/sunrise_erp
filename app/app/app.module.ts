import { NgModule } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component' ;
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SalesComponent } from './components/sales/sales.component';

import { AppRoutingModule } from './app.routes';


@NgModule({
    imports: [ BrowserModule, FormsModule, AppRoutingModule ],
    declarations : [ AppComponent, HeaderFooterComponent, SidebarComponent, SalesComponent ],
    entryComponents: [ SalesComponent ],
    bootstrap: [ AppComponent ] 
})

export class AppModule { }