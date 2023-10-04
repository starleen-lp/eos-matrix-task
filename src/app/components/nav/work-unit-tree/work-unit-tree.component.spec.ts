import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkUnitTreeComponent } from './work-unit-tree.component';

describe('WorkUnitTreeComponent', () => {
  let component: WorkUnitTreeComponent;
  let fixture: ComponentFixture<WorkUnitTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkUnitTreeComponent]
    });
    fixture = TestBed.createComponent(WorkUnitTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
