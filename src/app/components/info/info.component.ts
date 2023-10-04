import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Address } from 'src/app/interfaces/address.interface';
import { AddressService } from 'src/app/services/address.service';
import { EditModalComponent } from '../edit-modal/edit-modal.component';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  dataSource: Address[] = [];
  checked = false;

  constructor(private addressService: AddressService, public dialog: MatDialog) {
    this.addressService.getAddresses().subscribe(data => {
      this.dataSource = data.addresses;
    });
  }

  displayedColumns: string[] = ['action', 'settlementName', 'address', 'status',];

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, rowId: string): void {
    this.dialog.open(EditModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: rowId
    });
  }

  private getClickedAddress(id: string): Address | undefined {
    return this.dataSource.find(address => address.id === id);
  }

}
