export interface TreeNode {
    expandable: boolean;
    name: string;
    level: number;
    workUnitId?: string;
    entityType?: string;
    status?: string;
    date?: string;
    type?: string;
    court?: string;
    isBailiffNode?: boolean;
    isDebtorsNode?: boolean;
    bailiffName?: string;
    children?: TreeNode[];
    isSelected?: boolean;
  }