import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class VerifyAccountExistsInputDto {
    @ApiProperty({ example: 'johdoe@email.com' })
    @IsEmail()
    email: string;
}
