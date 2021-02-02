import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useHistory, useRouteMatch } from 'react-router-dom';
import * as users from '../api/users';
import useEmployeeInput from '../hooks/useEmployeeInput';
import ReviewList from './ReviewList';

type Props = {
  user: User;
  onFetch: () => void;
};

const EmployeeDetail = ({ user, onFetch }: Props) => {
  const { replace } = useHistory();
  const {
    id,
    name,
    email,
    isAdmin,
    onChangeName,
    onChangeEmail,
    onChangeAdmin,
    revert,
    isDirty,
  } = useEmployeeInput(user);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await users.update(id, { name, email, isAdmin });
    await onFetch();
  };

  const confirmDelete = async () => {
    if (window.confirm('Delete user?')) {
      await users.del(id);
      replace('/admin/employees');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <td>{id}</td>
          </tr>
          <tr>
            <th>IsAdmin</th>
            <th>
              <label>
                <input
                  type="checkbox"
                  checked={isAdmin}
                  onChange={onChangeAdmin}
                />
                <span>Is Admin</span>
              </label>
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>
              <input type="text" value={name} onChange={onChangeName} />
            </th>
          </tr>
          <tr>
            <th>Email</th>
            <th>
              <input type="text" value={email} onChange={onChangeEmail} />
            </th>
          </tr>
        </tbody>
      </table>
      <button onClick={revert} disabled={!isDirty}>
        Revert
      </button>
      <button type="submit" disabled={!isDirty}>
        Update
      </button>
      <br />
      <button onClick={confirmDelete}>Delete</button>
    </form>
  );
};

const Container = () => {
  const { params } = useRouteMatch<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  const userId = parseInt(params.id, 10);

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  const fetchUser = async (userId: number) => {
    const { data } = await users.get(userId);
    setUser(data);
  };

  return (
    <div>
      <Link to="/admin/employees">&lt; Back</Link>
      <h1>Employee Detail</h1>
      {user && <EmployeeDetail user={user} onFetch={() => fetchUser(userId)} />}
      <hr />
      {user && <ReviewList revieweeId={user.id} />}
    </div>
  );
};

export default Container;
