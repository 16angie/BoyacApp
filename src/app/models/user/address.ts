import { City } from './city'

export class Address {
  public id: number
  public address: string
  public apto?: string
  public torre?: string
  public observacion?: string
  public ciudad: City
}
