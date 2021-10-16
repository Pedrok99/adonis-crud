import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/Users'

export default class UsersController {

  public async index({response, params }: HttpContextContract) { //list
    let users;
    const userId = params.userId;
    try {
      if(userId){
        const tempUser = await User.findByOrFail('userId', userId)
        users = tempUser.isActive? tempUser : []
      }else{
        users = await User.query().where('isActive', true).limit(20)
      }
    } catch (e) {
      return response.status(400).json({error:e})
    }  
    return response.status(200).send( users )
  }

  public async create({ request, response }: HttpContextContract) {
    const user = {...request.body()}
    try {
      await User.create(user)
    } catch (e) {
      return response.status(400).json({
        message: 'User could not be created, please check the provided information or the database connection', 
        error:e
      })
    }
    delete user.password;
    return response.status(200).send( user )
  }

  public async delete({ request, response }: HttpContextContract) {
    const { userId = null } = { ...request.body() }
    if(userId){
      try {
        await User.query().where('userId', userId).update({ isActive: false })
      } catch (e) {
        return response.status(500).json({
          message:'Failed to delete user',
          error:e
        })
      }
    }else{
      return response.status(400).send({error: 'No userId provided.'})
    }
    return response.status(200).send({message:'Successfully deleted'})
  }

  public async update({ request, response }: HttpContextContract) {
    let updatedUser = { ...request.body() }
    let user;
    if(updatedUser.userId){
      try {
        //await User.query().where('userId', user.userId).update(updatedUser)
        user = await User.findByOrFail('userId', updatedUser.userId)
        if(user.isActive){
          await user.merge(updatedUser).save()
        }else{
          throw new Error('User deleted.')
        }
      } catch (e) {
        return response.status(500).json({
          message:'Failed to update user.',
          error:e.message
        })
      }
    }else{
      return response.status(400).send({error: 'No userId provided.'})
    }
    
    return response.status(200).send(user)
  }

}
