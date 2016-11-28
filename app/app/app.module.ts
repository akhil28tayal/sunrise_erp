import { NgModule } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component' ;
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations : [ AppComponent, HeaderFooterComponent, SidebarComponent ],
    bootstrap: [ AppComponent ] 
})

export class AppModule { }