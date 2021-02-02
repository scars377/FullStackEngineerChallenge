import { client } from '.';

export const create = (data: UserCreatePayload) => client.post('/users', data);

export const get = (id: number) => client.get(`/users/${id}`);

export const list = () => client.get<User[]>('/users');

export const update = (id: number, data: UserUpdatePayload) =>
  client.put(`/users/${id}`, data);

export const del = (id: number) => client.delete(`/users/${id}`);
