export class Entity {
  protected id: number;

  public getId(): number {
    if (typeof this.id === 'undefined') throw new Error(`${this.constructor.name}: ID is empty.`);
    return this.id;
  }
}
