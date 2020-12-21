export class MyDet {
  static id: number;

  newId:number;
  name: string;
  status: boolean;
  color: string;

  constructor() {
  
  }
}

MyDet.id = 0;
export let _detectors:MyDet[]=[];

