import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, find, pipe } from 'rxjs';
import { Address } from '../interfaces/address.interface';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private addressesUrl = '../assets/getPersonAddresses.json';

  constructor(private http: HttpClient) { }

  getAddresses(): Observable<{addresses: Address[]}> {
    return this.http.get<{addresses: Address[]}>(this.addressesUrl);
  }

  getAddress(addresses: Address[], id: string): Address[] {
    return addresses.filter(address => address.id === id);
  }
}
