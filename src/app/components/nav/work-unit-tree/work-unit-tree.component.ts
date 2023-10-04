import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import { WorkUnit } from 'src/app/interfaces/work-unit.interface';
import { WorkUnitService } from 'src/app/services/work-unit.service';
import { Subscription, map } from 'rxjs';

interface TreeNode {
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-work-unit-tree',
  templateUrl: './work-unit-tree.component.html',
  styleUrls: ['./work-unit-tree.component.scss']
})
export class WorkUnitTreeComponent implements OnInit, OnDestroy {
  @Input() workUnits!: WorkUnit[];
  private subscriptions$: Subscription[] = []
  public workData: WorkUnit[] = [];

  treeControl = new NestedTreeControl<TreeNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<TreeNode>();

  hasChild = (_: number, node: TreeNode) => !!node.children && node.children.length > 0;

  constructor(private workUnitService: WorkUnitService) {
    const subs = this.workUnitService.getWorkUnits().subscribe(data => {
      this.workData = data;
      this.dataSource.data = this.transformData(this.workUnits);
    });
    this.subscriptions$.push(subs);
  }

  ngOnInit(): void {
  }

  transformData(workUnits: WorkUnit[]): TreeNode[] {
    const transformedData = workUnits.map(workUnit => ({
      name: workUnit.bailiffName,
      children: workUnit.debtors.map(debtor => ({
        name: debtor.name,
        children: workUnit.cases.map(caseItem => ({
          name: caseItem.package
        }))
      }))
    }));
  
    return transformedData;
  }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }
}
