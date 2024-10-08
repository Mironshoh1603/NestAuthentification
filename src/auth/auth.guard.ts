import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log(request.headers, 'Guard header');
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (!token) {
      throw new UnauthorizedException();
    }
    const payload = await this.jwtService.verify(token, {
      secret: 'Judayam Secret code',
    });
    if (!payload) {
      throw new UnauthorizedException();
    }
    request.payload = payload;
    return true;
  }
}
