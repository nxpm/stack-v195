import { ApiDataAccessModule } from '@stack-v195/api/data-access'
import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

import { ApiDataAccessAuthService } from './api-data-access-auth.service'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  imports: [
    ApiDataAccessModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'NXPM_STACK_SECRET6140900',
    }),
  ],
  exports: [ApiDataAccessAuthService],
  providers: [ApiDataAccessAuthService, JwtStrategy],
})
export class ApiDataAccessAuthModule {}
