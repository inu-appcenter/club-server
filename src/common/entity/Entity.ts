import { Code } from '../code/Code';
import { Exception } from '../exception/Exception';
import { Optional } from '../type/CommonTypes';
import { ClassValidationDetails, ClassValidator } from '../utils/class-validator/ClassValidator';

export class Entity {
  protected id: number;

  public getId(): number {
    if (typeof this.id === 'undefined') throw new Error(`${this.constructor.name}: ID is empty.`);
    return this.id;
  }

  public async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> = await ClassValidator.validate(this);
    if (details) throw Exception.new({ code: Code.ENTITY_VALIDATION_ERROR, data: details });
  }
}
