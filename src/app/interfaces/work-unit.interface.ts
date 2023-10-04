import { Case } from "./case.interface";
import { Person } from "./person.interface";

export interface WorkUnit {
    workUnitId: string;
    entityType: string;
    status: string;
    key: number;
    date: string;
    type: string;
    court: string;
    bailiffName: string;
    debtors: Person[];
    otherPeople: Person[];
    cases: Case[];
  }

export interface NestedObject {
    id: string;
    name: string;
    children?: NestedObject[];
    showChildren?: boolean;
}