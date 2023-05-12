
import { User } from '../interfaces';
import { AbstractModel } from "@virtual-class-frontend/virtual-class-core";

export class UserModel extends AbstractModel<User> {

  constructor(protected override data: User) {
    super(data);
  }

  getId(): string {
    return this.data.sub;
  }

  getEmail(): string {
    return this.data.email;
  }

  getDisplayName(): string {
    return this.data.displayName;
  }

}
