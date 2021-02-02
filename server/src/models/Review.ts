import db from '../db';

type ReviewCreateData = {
  revieweeId: number;
  reviewerId: number;
  content: string;
};

type ReviewUpdateData = {
  content: string;
};

class Review {
  id: number;
  revieweeId: number;
  reviewerId: number;
  content: string;

  constructor(data: any) {
    this.id = data.id;
    this.revieweeId = data.reviewee_id;
    this.reviewerId = data.reviewer_id;
    this.content = data.content;
  }

  static async list(revieweeId: number): Promise<Review[]> {
    const { rows } = await db.query(
      `
      SELECT * from reviews
      WHERE reviewee_id=$1
      `,
      [revieweeId],
    );
    return rows.map((data) => new Review(data));
  }

  static async get(id: number): Promise<Review> {
    const { rows } = await db.query(
      `
      SELECT * from reviews
      WHERE id=$1
      `,
      [id],
    );
    return new Review(rows[0]);
  }

  static async create(data: ReviewCreateData): Promise<void> {
    console.log(data);

    await db.query(
      `
      INSERT INTO reviews (reviewee_id, reviewer_id, content)
      VALUES ($1, $2, $3)
      `,
      [data.revieweeId, data.reviewerId, data.content],
    );
  }

  static async update(reviewId: number, data: ReviewUpdateData): Promise<void> {
    await db.query(
      `
      UPDATE reviews
      SET content=$1
      WHERE id=$2
      `,
      [data.content, reviewId],
    );
  }

  static async delete(reviweId: number): Promise<void> {
    await db.query(
      `
      DELETE FROM reviews
      WHERE id=$1
      `,
      [reviweId],
    );
  }
}

export default Review;
