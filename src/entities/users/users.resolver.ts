import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from '../../models/user.model';
import { UsersService } from './users.service';
@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return this.usersService.getUser(getUserArgs);
  }

  //   @Query(() => [User], { name: 'users', nullable: 'items' })
  //   getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
  //     return this.usersService.getUsers(getUsersArgs);
  //   }

  @Mutation(() => User)
  createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    return this.usersService.createUser(createUserData);
  }

  //   @Mutation(() => User)
  //   updateUser(@Args('updateUserData') updateUserData: UpdateUserInput): User {
  //     return this.usersService.updateUser(updateUserData);
  //   }

  //   @Mutation(() => User)
  //   deleteUser(@Args('deleteUserData') deleteUserData: DeleteUserInput): User {
  //     return this.usersService.deleteUser(deleteUserData);
  //   }
}
