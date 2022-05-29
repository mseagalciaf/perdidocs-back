import { IsBoolean, IsDefined, IsEmail, IsInt, IsNumberString, IsString, MinLength, Validate } from "class-validator";
import { DocTypeExistsRule } from "src/docs/customValidators/doc-type-exists-rule";

export class GetEnabledNotificationByTokenDto{

    @IsDefined()
    @IsString()
    registryToken : string;
}