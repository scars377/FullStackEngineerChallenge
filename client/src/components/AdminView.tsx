import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import EmployeeDetail from './EmployeeDetail';

const AdminView = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/employees/:id`}>
        <EmployeeDetail />
      </Route>
      <Route path={`${path}/employees`}>
        <EmployeeList />
      </Route>
      <Redirect to={`${path}/employees`} />
    </Switch>
  );
};
export default AdminView;
