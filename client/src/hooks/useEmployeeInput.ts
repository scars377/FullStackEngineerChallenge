import { ChangeEvent, useCallback, useEffect, useState } from 'react';

const emptyEmployee = {
  id: -1,
  isAdmin: false,
  name: '',
  email: '',
};

const useEmployeeInput = (user: User | null) => {
  const u = user || emptyEmployee;

  const { id } = u;
  const [name, setName] = useState(u.name);
  const [email, setEmail] = useState(u.email);
  const [isAdmin, setAdmin] = useState(u.isAdmin);

  const isDirty = name !== u.name || email !== u.email || isAdmin !== u.isAdmin;

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const onChangeAdmin = (e: ChangeEvent<HTMLInputElement>) =>
    setAdmin(e.target.checked);

  const revert = useCallback(() => {
    setName(u.name);
    setEmail(u.email);
    setAdmin(u.isAdmin);
  }, [u]);

  useEffect(() => {
    revert();
  }, [u, revert]);

  return {
    id,
    name,
    email,
    isAdmin,
    onChangeName,
    onChangeEmail,
    onChangeAdmin,
    isDirty,
    revert,
  };
};

export default useEmployeeInput;
