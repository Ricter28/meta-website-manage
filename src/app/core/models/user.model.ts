export class UserModel {
  id!: string;
  createdAt!: Date;
  updatedAt!: Date;
  email!: string;
  name!: string;
  address!: string;
  birthday!: string;
  role!: string;
  avatar!: string;
  gender!: string;
  phone!: string;
  notify!: boolean;
  userWithCompany!: string;
  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}

export class AccessTokenResponse {
  accessToken!: string;
  expiresIn!: string;

  public constructor(init?: Partial<AccessTokenResponse>) {
    Object.assign(this, init);
  }
}
