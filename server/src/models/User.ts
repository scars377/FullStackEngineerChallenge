import db from '../db';

type UserCreateData = {
  isAdmin: boolean;
  name: string;
  email: string;
};

type UserUpdateData = Partial<UserCreateData>;

class User {
  id: number;
  isAdmin: boolean;
  name: string;
  email: string;

  constructor(data: any) {
    this.id = data.id;
    this.isAdmin = data.is_admin;
    this.name = data.name;
    this.email = data.email;
  }

  static async list(): Promise<User[]> {
    const { rows } = await db.query(
      `
      SELECT * FROM users
      `,
    );
    return rows.map((data) => new User(data));
  }

  static async get(userId: number): Promise<User> {
    const { rows } = await db.query(
      `
      SELECT * FROM users WHERE id=$1
      `,
      [userId],
    );
    return new User(rows[0]);
  }

  static async create(data: UserCreateData): Promise<void> {
    await db.query(
      `
      INSERT INTO users (is_admin, name, email)
      VALUES ($1, $2, $3)
      `,
      [data.isAdmin, data.name, data.email],
    );
  }

  static async update(userId: number, data: UserUpdateData): Promise<void> {
    await db.query(
      `
      UPDATE users
      SET is_admin=$1, name=$2, email=$3
      WHERE id=$4
      `,
      [data.isAdmin, data.name, data.email, userId],
    );
  }

  static async delete(userId: number): Promise<void> {
    await db.query(
      `
      DELETE FROM users 
      WHERE id=$1
      `,
      [userId],
    );
  }
}

export default User;
