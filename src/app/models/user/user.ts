import { Address } from './address'
import { Email } from './email'
import { PhoneNumber } from './phoneNumber'
import { Role } from './role'
import { RolCompany } from './rol_company'

export class User {
  public _id: string
  public password?: string
  public phones: Array<PhoneNumber>
  public nit: string
  public isActive: boolean
  public isLock: boolean
  public state: string
  public address: Address
  public code: string
  public point: number
  public create: Date
  public roles: Array<any>
  public id_organization?: string
  public id_role?: string
  public isRemove?: boolean

  constructor (
    public email: string,
    public name: string,
    public lastName: string
  ) {}
}
