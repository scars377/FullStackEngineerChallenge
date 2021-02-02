/// <reference types="react-scripts" />

type UserCreatePayload = {
  isAdmin: boolean;
  name: string;
  email: string;
};

type User = UserCreatePayload & {
  id: number;
};

type UserUpdatePayload = Partial<UserCreatePayload>;

type ReviewCreatePayload = {
  revieweeId: number;
  reviewerId: number;
  content: string;
};

type Review = ReviewCreatePayload & {
  id: number;
};

type ReviewUpdatePayload = Partial<ReviewCreatePayload>;
