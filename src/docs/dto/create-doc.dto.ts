import { IsDefined, IsInt, IsMobilePhone, IsNumberString, MinLength, Validate } from "class-validator";
import { DocTypeExistsRule } from "../customValidators/doc-type-exists-rule";

export class CreateDocDto {

    @IsDefined()
    @IsInt()
    @Validate(DocTypeExistsRule)
    docTypeId : number;

    @IsDefined()
    @IsNumberString()
    @MinLength(5)
    number : string;

    @IsDefined()
    @IsMobilePhone("es-CO")
    phone : string;

    @IsInt()
    user_id? : number;
}
