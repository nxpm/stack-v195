import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserCreateInput } from '@prisma/client'
import { ApiDataAccessService } from '@stack-v195/api/data-access'
import { getGravatarUrl, hashPassword, validatePassword } from './api-data-access-auth.helper'
import { LoginInput } from './dto/login.input'
import { RegisterInput } from './dto/register.input'
import { UserToken } from './models/user-token'
import { Role } from './models/role'

@Injectable()
export class ApiDataAccessAuthService {
  constructor(private readonly data: ApiDataAccessService, private readonly jwtService: JwtService) {}

  async register(payload: RegisterInput) {
    const user = await this.createUser({
      ...payload,
    })

    return this.signUser(user)
  }

  async login(input: LoginInput) {
    const email = input.email.trim()
    const password = input.password.trim()
    const user = await this.findUserByEmail(email)

    if (!user) {
      throw new NotFoundException(`No user found for email: ${email}`)
    }

    const passwordValid = await validatePassword(password, user.password)

    if (!passwordValid) {
      throw new BadRequestException('Invalid password')
    }

    return this.signUser(user)
  }

  signUser(user): UserToken {
    const token = this.jwtService.sign({ userId: user?.id })
    return { token, user }
  }

  validateUser(userId: string) {
    return this.findUserById(userId)
  }

  getUserFromToken(token: string) {
    const userId = this.jwtService.decode(token)['userId']

    return this.findUserById(userId)
  }

  public findUserByEmail(email: string) {
    return this.data.user.findOne({ where: { email } })
  }

  public findUserById(userId: string) {
    return this.data.user.findOne({ where: { id: userId } })
  }

  public findUserByUsername(username: string) {
    return this.data.user.findOne({ where: { username } })
  }

  async createUser(input: Partial<UserCreateInput>) {
    const submittedPassword = !!input.password
    const password = input.password
    const hashedPassword = hashPassword(password)
    const email = input.email.trim()
    const username = input.username || email

    return this.data.user.create({
      data: {
        firstName: input.firstName,
        lastName: input.lastName,
        email,
        phone: input.phone,
        username,
        avatarUrl: input.avatarUrl || getGravatarUrl(input.email.toLowerCase()),
        password: hashedPassword,
        role: Role.User,
      },
    })
  }
}
