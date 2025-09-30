export interface AplicationResponse {
  id: string;
  name: string;
}

export class Application {
  readonly id: string;
  readonly name: string;
  
  constructor(data: AplicationResponse) {
    this.id = data.id;
    this.name = data.name;
  }
}
