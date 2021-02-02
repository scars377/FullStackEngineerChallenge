import { client } from '.';

export const list = (userId: number) =>
  client.get<Review[]>(`/users/${userId}/reviews`);

export const create = (data: ReviewCreatePayload) =>
  client.post('/reviews', data);

export const get = (id: number) => client.get(`/reviews/${id}`);

export const update = (id: number, data: ReviewUpdatePayload) =>
  client.put(`/reviews/${id}`, data);

export const del = (id: number) => client.delete(`/reviews/${id}`);
