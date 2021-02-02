import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import useEmployeeList from '../hooks/useEmployeeList';
import EmployeeListAddModal from './EmployeeListAddModal';

export const emptyUser = {
  id: -1,
  name: '',
  email: '',
  isAdmin: false,
};

const EmployeeList = () => {
  const { path } = useRouteMatch();
  const { list, fetchList } = useEmployeeList();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchList();
  }, []); // eslint-disable-line

  const onModalClose = async (success = false) => {
    setModal(false);
    if (success) await fetchList();
  };

  return (
    <div>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Admin</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.isAdmin && 'true'}</td>
              <td>
                <Link to={`${path}/${user.id}`}>{user.name}</Link>
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => setModal(true)}>Add</button>

      {modal && <EmployeeListAddModal close={onModalClose} />}
    </div>
  );
};

export default EmployeeList;
