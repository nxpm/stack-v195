import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient, UserCreateInput } from '@prisma/client'
import { getGravatarUrl, hashPassword } from './api-data-access.helper'

@Injectable()
export class ApiDataAccessService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super()
  }

  public async onModuleDestroy() {
    await this.$disconnect()
  }

  public async onModuleInit() {
    await this.$connect()
  }

  async createUser(input: Partial<UserCreateInput>) {
    const password = await hashPassword(input.password)
    const email = input.email.trim()
    return this.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        email,
        username: email,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password,
        role: 'User',
      },
    })
  }

  public findUserByEmail(email: string) {
    return this.user.findOne({ where: { email } })
  }

  public findUserById(userId: string) {
    return this.user.findOne({ where: { id: userId } })
  }

  public findUserByUsername(username: string) {
    return this.user.findOne({ where: { username } })
  }
}
