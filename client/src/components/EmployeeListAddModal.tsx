import { FormEvent, useEffect, useRef } from 'react';
import * as users from '../api/users';
import useEmployeeInput from '../hooks/useEmployeeInput';
import Modal from './Modal';

type Props = {
  close: (success?: boolean) => void;
};

const emptyUser = {
  id: -1,
  isAdmin: false,
  name: '',
  email: '',
};

const EmployeeListAddModal = ({ close }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  const {
    name,
    email,
    isAdmin,
    onChangeName,
    onChangeEmail,
    onChangeAdmin,
  } = useEmployeeInput(emptyUser);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name && !email) return;
    await users.create({ name, email, isAdmin });
    close(true);
  };

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Modal>
      <form onSubmit={submit}>
        <label>Name</label>
        <input type="text" value={name} onChange={onChangeName} ref={ref} />
        <br />
        <label>Email</label>
        <input type="text" value={email} onChange={onChangeEmail} />
        <br />
        <label>
          <input type="checkbox" checked={isAdmin} onChange={onChangeAdmin} />
          <span>is admin</span>
        </label>
        <hr />
        <button onClick={() => close()}>Cancel</button>
        <button type="submit" disabled={!name && !email}>
          Submit
        </button>
      </form>
    </Modal>
  );
};

export default EmployeeListAddModal;
