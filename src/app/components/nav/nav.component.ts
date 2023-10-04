import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { WorkUnit } from 'src/app/interfaces/work-unit.interface';
import { WorkUnitService } from 'src/app/services/work-unit.service';




@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  public workUnitData: WorkUnit[] = [];

  constructor(private workUnitService: WorkUnitService) {
    this.workUnitService.getWorkUnits().subscribe(data => {
      // console.log('data in nav', data);
      this.workUnitData = data;
      // console.log('workunitdata', this.workUnitData)
    });
  }

  public ngOnInit(): void {
    // console.log('onInit data', this.workUnitData)
  }

}
