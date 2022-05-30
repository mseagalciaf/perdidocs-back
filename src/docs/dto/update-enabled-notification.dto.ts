import { IsBoolean, IsDefined, IsEmail, IsInt, IsNumberString, IsString, MinLength, Validate } from "class-validator";
import { DocTypeExistsRule } from "../customValidators/doc-type-exists-rule";

export class UpdateEnabledNotificationDto{

    @IsDefined()
    @IsInt()
    id : number;

    // @IsEmail()
    email : string;

    @IsInt()
    @Validate(DocTypeExistsRule)
    docTypeId : number;

    @IsNumberString()
    @MinLength(5)
    number : string;

    @IsBoolean()
    viaEmail : boolean

    @IsBoolean()
    viaPush : boolean

}