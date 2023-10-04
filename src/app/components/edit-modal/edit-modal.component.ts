import { ChangeDetectionStrategy } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Address } from 'src/app/interfaces/address.interface';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditModalComponent {
  public addresses: Address[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
  public dialogRef: MatDialogRef<EditModalComponent>,
  private addressService: AddressService) {
    this.addressService.getAddresses().subscribe(data => this.addresses = data.addresses);
    this.dialogRef.afterOpened().subscribe(() => console.log(this.getAddress(data)));
   }

   private getAddress(id: string): Address {
    return this.addressService.getAddress(this.addresses, id)[0];
   }
}
