import { Module } from '@nestjs/common'

import { ApiDataAccessService } from './api-data-access.service'

@Module({
  providers: [ApiDataAccessService],
  exports: [ApiDataAccessService],
})
export class ApiDataAccessModule {}
