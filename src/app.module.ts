import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { envSchema } from './configuration/env.schema';
import typeorm from './configuration/typeorm.config';
import { AuthUserDataModule } from './business/authUserData/authUserData.module';
import { UtilsModule } from './utils';

@Module({
    imports: [
        ConfigModule.forRoot({
            ignoreEnvFile: !!process.env.CI,
            envFilePath: join(__dirname, '..', '.env'),
            validationSchema: envSchema,
            isGlobal: true,
            load: [typeorm],
        }),

        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
                const options = configService.get<TypeOrmModuleOptions>('typeorm');
                if (!options) {
                    throw new Error('TypeORM configuration is undefined');
                }
                return options;
            },
        }),
        UtilsModule,
        AuthUserDataModule,
    ],
    controllers: [],
    providers: [AppService],
})
export class AppModule {}
