import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/Users'

export default class UsersController {

  public async index({ response }: HttpContextContract) {
    let users;
    try {
      users = await User.all()
    } catch (e) {
      return response.status(400).json({error:e})
    }  
    return response.status(200).send( users )
  }

  public async create({ request, response }: HttpContextContract) {
    const data = {...request.body()}
    
    try {
      await User.create(data)
    } catch (e) {
      return response.status(400).json({error:e})
    }
    delete data.password;
    return response.status(418).send( data )
  }

}
