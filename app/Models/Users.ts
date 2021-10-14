import { DateTime } from 'luxon'
import { BaseModel, column, beforeCreate } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class Users extends BaseModel {

  @column({ isPrimary: true, columnName:'userId', serializeAs:'userId'})
  public userId: number

  @column({columnName:'firstName', serializeAs:'firstName'})
  public firstName: string

  @column({columnName:'lastName', serializeAs:'lastName'})
  public lastName: string

  @column({columnName:'phone', serializeAs:'phone'})
  public phone: string
  
  @column()
  public email: string
  
  @column({ serializeAs: null })
  public password: string

  @column({serializeAs:null})
  public isActive: boolean 

  @column.dateTime({ autoCreate: true , columnName:'createdAt', serializeAs:'createdAt'})
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true, columnName:'updatedAt', serializeAs:null})
  public updatedAt: DateTime

  @beforeCreate()
  public static async hashPassword(user: Users) {
    try{
      user.password = await Hash.make(user.password.toString())
    }catch(e){
      console.log(e)
    }
  }  
}
