import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from '../interfaces/user.interface';


@Injectable()
export class NotVerifiedEmailStrategy extends PassportStrategy(Strategy, 
    'not-verified-email') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwtEncryptionKey',
    });
  }

  async validate(user: User) {

    return { userId: user.id, email: user.email,firstName: user.firstName, lastName: user.lastName, emailVerified: user.emailVerified };
  }
}