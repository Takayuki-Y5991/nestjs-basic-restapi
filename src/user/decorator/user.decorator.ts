import { ExecutionContext, createParamDecorator } from '@nestjs/common';

export interface UserInfo {
  name: string;
  id: number;
  iat: number;
  exp: number;
}

export const User = createParamDecorator((_, context: ExecutionContext) => {
  return context.switchToHttp().getRequest().user;
});
