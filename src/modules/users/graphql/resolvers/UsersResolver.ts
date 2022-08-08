import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
import { Pet } from '../../../pets/database/entities/Pet'
import { User } from '../../database/entities/User'

@Resolver(User)
export class UsersResolver {
  @Query(() => [User])
  async getUsers (): Promise<User[]> {
    return User.find()
  }

  @Mutation(() => User)
  async createUsers (
    @Arg('firstname') firstname: string,
    @Arg('lastname') lastname: string,
    @Arg('email') email: string,
    @Arg('password') password: string
  ): Promise<User> {
    const newUser = Object.assign(new User(), {
      firstname,
      lastname,
      email,
      password
    })

    await newUser.save()

    return newUser
  }

  @FieldResolver(() => [Pet])
  async pets (
    @Root() root: User
  ): Promise<Pet[]> {
    return Pet.find({
      where: { userId: root.id }
    })
  }
}
