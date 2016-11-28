import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'side-bar',
    templateUrl: '../../htmls/side-bar.html',
    styleUrls: ['../../styles/sidebar.css']
})

export class SidebarComponent { 
    functions = [ 'Sales', 'Purchase', 'Inventory', 'Receivable', 'Payable', 'General Ledger', 'Manufacturing', 'Asset Manager' ]
}