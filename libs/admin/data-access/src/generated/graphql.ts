import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AdminCreateChapterInput = {
  dateEstablished: Scalars['String']
  description: Scalars['String']
  location: Scalars['String']
  name: Scalars['String']
}

export type AdminCreateChapterMemberInput = {
  memberId: Scalars['String']
  role?: Maybe<ChapterMemberRole>
}

export type AdminCreateCompanyInput = {
  name: Scalars['String']
}

export type AdminCreateCompanyMemberInput = {
  fromDate?: Maybe<Scalars['DateTime']>
  location?: Maybe<Scalars['String']>
  memberId: Scalars['String']
  role?: Maybe<Scalars['String']>
  thruDate?: Maybe<Scalars['DateTime']>
}

export type AdminCreateIndustryInput = {
  name: Scalars['String']
}

export type AdminCreateReferralInput = {
  email: Scalars['String']
  firstName: Scalars['String']
  fromChapterId: Scalars['String']
  lastName: Scalars['String']
  notes: Scalars['String']
  phone: Scalars['String']
  rating: ReferralRating
  toChapterId: Scalars['String']
  toMemberId: Scalars['String']
}

export type AdminCreateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  developer?: Maybe<Scalars['Boolean']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role: Role
}

export type AdminUpdateChapterInput = {
  name?: Maybe<Scalars['String']>
}

export type AdminUpdateChapterMemberInput = {
  memberId: Scalars['String']
  role?: Maybe<ChapterMemberRole>
}

export type AdminUpdateCompanyInput = {
  name?: Maybe<Scalars['String']>
}

export type AdminUpdateCompanyMemberInput = {
  fromDate?: Maybe<Scalars['DateTime']>
  location?: Maybe<Scalars['String']>
  memberId: Scalars['String']
  role?: Maybe<Scalars['String']>
  thruDate?: Maybe<Scalars['DateTime']>
}

export type AdminUpdateIndustryInput = {
  name?: Maybe<Scalars['String']>
}

export type AdminUpdateReferralInput = {
  email: Scalars['String']
  firstName: Scalars['String']
  lastName: Scalars['String']
  notes: Scalars['String']
  phone: Scalars['String']
  rating: ReferralRating
}

export type AdminUpdateUserInput = {
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  developer?: Maybe<Scalars['Boolean']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role: Role
}

export type Chapter = {
  __typename?: 'Chapter'
  createdAt?: Maybe<Scalars['DateTime']>
  dateEstablished?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  members?: Maybe<Array<ChapterMember>>
  name?: Maybe<Scalars['String']>
  status?: Maybe<ChapterStatus>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type ChapterMember = {
  __typename?: 'ChapterMember'
  chapter?: Maybe<Chapter>
  id?: Maybe<Scalars['String']>
  member?: Maybe<Member>
  role?: Maybe<ChapterMemberRole>
}

/** Chapter member role */
export enum ChapterMemberRole {
  Admin = 'Admin',
  Chairman = 'Chairman',
  Chapter = 'Chapter',
  Guest = 'Guest',
  Leader = 'Leader',
  Member = 'Member',
  Mentor = 'Mentor',
  President = 'President',
  SalesManager = 'SalesManager',
  Trainer = 'Trainer',
  VicePresident = 'VicePresident',
}

/** Chapter status */
export enum ChapterStatus {
  Active = 'Active',
  Inactive = 'Inactive',
  Inquiry = 'Inquiry',
  NowForming = 'NowForming',
  PhaseOne = 'PhaseOne',
  Shutdown = 'Shutdown',
}

export type Company = {
  __typename?: 'Company'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  members?: Maybe<Array<CompanyMember>>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type CompanyMember = {
  __typename?: 'CompanyMember'
  fromDate?: Maybe<Scalars['DateTime']>
  location?: Maybe<Scalars['String']>
  member?: Maybe<Member>
  role?: Maybe<Scalars['String']>
  thruDate?: Maybe<Scalars['DateTime']>
}

export type Industry = {
  __typename?: 'Industry'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type ListChaptersInput = {
  limit?: Maybe<Scalars['Float']>
  orderBy?: Maybe<Scalars['String']>
  orderDirection?: Maybe<Scalars['String']>
  search?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Float']>
}

export type ListMembersInput = {
  limit?: Maybe<Scalars['Float']>
  orderBy?: Maybe<Scalars['String']>
  orderDirection?: Maybe<Scalars['String']>
  search?: Maybe<Scalars['String']>
  skip?: Maybe<Scalars['Float']>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export type Member = {
  __typename?: 'Member'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  chapters?: Maybe<Array<ChapterMember>>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  lastSeen?: Maybe<Scalars['DateTime']>
  linkedin?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  status?: Maybe<MemberStatus>
  twitter?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
  website?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
}

export type MemberCount = {
  __typename?: 'MemberCount'
  count?: Maybe<Scalars['Float']>
}

/** User member status */
export enum MemberStatus {
  Away = 'Away',
  Offline = 'Offline',
  Online = 'Online',
}

export type Mutation = {
  __typename?: 'Mutation'
  adminCreateChapter?: Maybe<Chapter>
  adminCreateChapterMember?: Maybe<Chapter>
  adminCreateCompany?: Maybe<Company>
  adminCreateCompanyMember?: Maybe<Company>
  adminCreateIndustry?: Maybe<Industry>
  adminCreateReferral?: Maybe<Referral>
  adminCreateUser?: Maybe<User>
  adminDeleteChapter?: Maybe<Scalars['Boolean']>
  adminDeleteChapterMember?: Maybe<Scalars['Boolean']>
  adminDeleteCompany?: Maybe<Scalars['Boolean']>
  adminDeleteCompanyMember?: Maybe<Scalars['Boolean']>
  adminDeleteIndustry?: Maybe<Scalars['Boolean']>
  adminDeleteReferral?: Maybe<Scalars['Boolean']>
  adminDeleteUser?: Maybe<Scalars['Boolean']>
  adminUpdateChapter?: Maybe<Chapter>
  adminUpdateChapterMember?: Maybe<Chapter>
  adminUpdateCompany?: Maybe<Company>
  adminUpdateCompanyMember?: Maybe<Company>
  adminUpdateIndustry?: Maybe<Industry>
  adminUpdateReferral?: Maybe<Referral>
  adminUpdateUser?: Maybe<User>
  forgotPassword?: Maybe<Scalars['Boolean']>
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<UserToken>
  markAllNotificationsRead?: Maybe<Scalars['Int']>
  markNotificationRead?: Maybe<Notification>
  markNotificationUnread?: Maybe<Notification>
  register?: Maybe<UserToken>
  resetPassword?: Maybe<User>
  sendReferral?: Maybe<Referral>
  shareMemberByEmail?: Maybe<Member>
  updateStatus?: Maybe<Member>
  validateEmail?: Maybe<Scalars['Boolean']>
}

export type MutationAdminCreateChapterArgs = {
  input: AdminCreateChapterInput
}

export type MutationAdminCreateChapterMemberArgs = {
  chapterId: Scalars['String']
  input: AdminCreateChapterMemberInput
}

export type MutationAdminCreateCompanyArgs = {
  input: AdminCreateCompanyInput
}

export type MutationAdminCreateCompanyMemberArgs = {
  companyId: Scalars['String']
  input: AdminCreateCompanyMemberInput
}

export type MutationAdminCreateIndustryArgs = {
  input: AdminCreateIndustryInput
}

export type MutationAdminCreateReferralArgs = {
  input: AdminCreateReferralInput
}

export type MutationAdminCreateUserArgs = {
  input: AdminCreateUserInput
}

export type MutationAdminDeleteChapterArgs = {
  chapterId: Scalars['String']
}

export type MutationAdminDeleteChapterMemberArgs = {
  chapterId: Scalars['String']
  memberId: Scalars['String']
}

export type MutationAdminDeleteCompanyArgs = {
  companyId: Scalars['String']
}

export type MutationAdminDeleteCompanyMemberArgs = {
  companyId: Scalars['String']
  memberId: Scalars['String']
}

export type MutationAdminDeleteIndustryArgs = {
  industryId: Scalars['String']
}

export type MutationAdminDeleteReferralArgs = {
  referralId: Scalars['String']
}

export type MutationAdminDeleteUserArgs = {
  userId: Scalars['String']
}

export type MutationAdminUpdateChapterArgs = {
  chapterId: Scalars['String']
  input: AdminUpdateChapterInput
}

export type MutationAdminUpdateChapterMemberArgs = {
  chapterId: Scalars['String']
  input: AdminUpdateChapterMemberInput
}

export type MutationAdminUpdateCompanyArgs = {
  companyId: Scalars['String']
  input: AdminUpdateCompanyInput
}

export type MutationAdminUpdateCompanyMemberArgs = {
  companyId: Scalars['String']
  input: AdminUpdateCompanyMemberInput
}

export type MutationAdminUpdateIndustryArgs = {
  industryId: Scalars['String']
  input: AdminUpdateIndustryInput
}

export type MutationAdminUpdateReferralArgs = {
  input: AdminUpdateReferralInput
  referralId: Scalars['String']
}

export type MutationAdminUpdateUserArgs = {
  input: AdminUpdateUserInput
  userId: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationMarkNotificationReadArgs = {
  notificationId: Scalars['String']
}

export type MutationMarkNotificationUnreadArgs = {
  notificationId: Scalars['String']
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type MutationResetPasswordArgs = {
  password: Scalars['String']
  token: Scalars['String']
}

export type MutationSendReferralArgs = {
  input: SendReferralInput
}

export type MutationShareMemberByEmailArgs = {
  input: ShareMemberByEmailInput
}

export type MutationUpdateStatusArgs = {
  input: UpdateStatusInput
}

export type MutationValidateEmailArgs = {
  token: Scalars['String']
}

export type Notification = {
  __typename?: 'Notification'
  actor?: Maybe<Member>
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  read?: Maybe<Scalars['Boolean']>
  referenceId?: Maybe<Scalars['String']>
  referenceType?: Maybe<NotificationReferenceType>
  referral?: Maybe<Referral>
  to?: Maybe<Member>
  type?: Maybe<NotificationType>
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Notification reference type */
export enum NotificationReferenceType {
  Referral = 'Referral',
}

/** Notification type */
export enum NotificationType {
  ReferralReceived = 'ReferralReceived',
}

export type Query = {
  __typename?: 'Query'
  adminChapter?: Maybe<Chapter>
  adminChapters?: Maybe<Array<Chapter>>
  adminCompanies?: Maybe<Array<Company>>
  adminCompany?: Maybe<Company>
  adminIndustries?: Maybe<Array<Industry>>
  adminIndustry?: Maybe<Industry>
  adminReferral?: Maybe<Referral>
  adminReferrals?: Maybe<Array<Referral>>
  adminUser?: Maybe<User>
  adminUsers?: Maybe<Array<User>>
  chapter?: Maybe<Chapter>
  chapters?: Maybe<Array<Chapter>>
  me?: Maybe<User>
  member?: Maybe<Member>
  members?: Maybe<Array<Member>>
  membersCount?: Maybe<MemberCount>
  myChapters?: Maybe<Array<ChapterMember>>
  notifications?: Maybe<Array<Notification>>
  referralsReceived?: Maybe<Array<Referral>>
  referralsSent?: Maybe<Array<Referral>>
  reportReferralsFromUser: Scalars['Int']
  reportReferralsTotal: Scalars['Int']
  reportReferralsToUser: Scalars['Int']
  reportTransactionsTotalChapter: Scalars['Int']
  reportTransactionsTotalUser: Scalars['Int']
  uptime: Scalars['Float']
}

export type QueryAdminChapterArgs = {
  chapterId: Scalars['String']
}

export type QueryAdminCompanyArgs = {
  companyId: Scalars['String']
}

export type QueryAdminIndustryArgs = {
  industryId: Scalars['String']
}

export type QueryAdminReferralArgs = {
  referralId: Scalars['String']
}

export type QueryAdminUserArgs = {
  userId: Scalars['String']
}

export type QueryChapterArgs = {
  chapterId: Scalars['String']
}

export type QueryChaptersArgs = {
  input?: Maybe<ListChaptersInput>
}

export type QueryMemberArgs = {
  memberId: Scalars['String']
}

export type QueryMembersArgs = {
  input?: Maybe<ListMembersInput>
}

export type QueryMembersCountArgs = {
  input?: Maybe<ListMembersInput>
}

export type QueryNotificationsArgs = {
  read?: Maybe<Scalars['Boolean']>
}

export type QueryReportTransactionsTotalChapterArgs = {
  chapterId: Scalars['String']
}

export type Referral = {
  __typename?: 'Referral'
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  from?: Maybe<Member>
  fromChapter?: Maybe<Chapter>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  notes?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  rating?: Maybe<ReferralRating>
  sentBy?: Maybe<Member>
  to?: Maybe<Member>
  toChapter?: Maybe<Chapter>
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Referral rating */
export enum ReferralRating {
  Cold = 'Cold',
  Hot = 'Hot',
  Warm = 'Warm',
}

export type RegisterInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
  phone?: Maybe<Scalars['String']>
}

/** User role */
export enum Role {
  Admin = 'Admin',
  Guest = 'Guest',
  User = 'User',
}

export type SendReferralInput = {
  email: Scalars['String']
  firstName: Scalars['String']
  fromChapterId: Scalars['String']
  fromMemberId?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  notes: Scalars['String']
  phone: Scalars['String']
  rating: ReferralRating
  toChapterId: Scalars['String']
  toMemberId: Scalars['String']
}

export type ShareMemberByEmailInput = {
  email: Scalars['String']
  memberId: Scalars['String']
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type UpdateStatusInput = {
  status: MemberStatus
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
  ) {}

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }
}
