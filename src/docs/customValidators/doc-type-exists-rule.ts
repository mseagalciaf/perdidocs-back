import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { DocsService } from "../docs.service";

@ValidatorConstraint({ name: 'DocTypeExists', async: true })
@Injectable()
export class DocTypeExistsRule implements ValidatorConstraintInterface {
  constructor(
    private docService: DocsService
    ) {}

  async validate(value: number) {
    try {

      await this.docService.findDocType(value);

    } catch (e) {
      return false;
    }

    return true;
  }

  defaultMessage(args: ValidationArguments) {
    return `Doc Type doesn't exist`;
  }
}