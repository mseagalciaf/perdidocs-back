import { Exclude } from "class-transformer";
import { IsAlphanumeric, IsDefined, IsEmail, IsInt, IsString, Matches, MaxLength, Min, minLength, MinLength } from "class-validator";
import { Unique } from "typeorm";


export class CreateUserDto {

    @IsDefined()
    @IsString()
    @MinLength(3)
    name : string;

    @IsDefined()
    @IsEmail()
    @Unique('users',['email'])
    email : string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,{message : "Password must contain at least 1 upper case letter, at least 1 lower case letter, at least 1 number or special character"})
    password : string;

}
