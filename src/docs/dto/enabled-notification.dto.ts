import { IsBoolean, IsDefined, IsEmail, IsInt, IsNumberString, IsString, MinLength, Validate } from "class-validator";
import { DocTypeExistsRule } from "src/docs/customValidators/doc-type-exists-rule";

export class EnabledNotificationDto{

    @IsDefined()
    @IsString()
    registryToken : string;

    @IsDefined()
    @IsEmail()
    email : string;

    @IsDefined()
    @IsInt()
    @Validate(DocTypeExistsRule)
    docTypeId : number;

    @IsDefined()
    @IsNumberString()
    @MinLength(5)
    number : string;

    @IsDefined()
    @IsBoolean()
    viaEmail : boolean

    @IsDefined()
    @IsBoolean()
    viaPush : boolean

}