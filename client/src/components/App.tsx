import { Redirect, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import AdminView from './AdminView';
import Header from './Header';
import EmployeeView from './EmployeeView';

const Global = createGlobalStyle`
  html, body {
    padding:0;
    margin:0;
  }
  table, th, td {
    border: 1px solid gray;
    border-collapse: collapse;
    padding: 0.25em 0.5em;
  }
`;

const Main = styled.main`
  margin-top: 2.5em;
  padding: 2em 4em;
`;

const App = () => (
  <div style={{ height: '100%' }}>
    <Global />
    <Header />
    <Main>
      <Switch>
        <Route path="/admin">
          <AdminView />
        </Route>
        <Route path="/employee">
          <EmployeeView />
        </Route>
        <Redirect to="/admin" />
      </Switch>
    </Main>
  </div>
);

export default App;
