import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WorkUnit } from './interfaces/work-unit.interface';
import { WorkUnitService } from './services/work-unit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eos-task';
}
