import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sales',
    templateUrl: '../../htmls/sales.html',
    styleUrls: ['../../styles/sales.css']
})

export class SalesComponent { 
    isHovered = [ false, false, false, false, false ] ;
    onHover(count: number){
        this.isHovered[count] = !this.isHovered[count] ;
    }
}