import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserEntity } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt'
import { NotVerifiedEmailStrategy } from './strategies/not-verified-email.strategy';
import { OtpEntity } from './entities/otp.entity';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, OtpEntity]), JwtModule.register({
    secret: 'jwtEncryptionKey',
    signOptions: {
      expiresIn: '5m',
    },
  })],

  controllers: [UsersController],
  providers: [UsersService, NotVerifiedEmailStrategy],
})
export class UsersModule { }
