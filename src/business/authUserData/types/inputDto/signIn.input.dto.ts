import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsStrongPassword, Max, MaxLength, MinLength } from 'class-validator';

export class SigInputDto {
    @IsString()
    @ApiProperty()
    email: string;

    @IsString()
    @ApiProperty()
    password: string;
}
