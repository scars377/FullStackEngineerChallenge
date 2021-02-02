import * as users from '../api/users';
import { useEffect, useState } from 'react';

const useEmployeeList = () => {
  const [list, setList] = useState<User[]>([]);

  const fetchList = async () => {
    const { data } = await users.list();
    setList(data);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return { list, fetchList };
};

export default useEmployeeList;
