# Full Stack Developer Challenge

## Prerequisite
- PostgreSQL 13.1
- NodeJS 10.22
- yarn

## Setup
1. Clone the repository
```sh
git clone git@github.com:scars377/FullStackEngineerChallenge.git
cd FullStackEngineerChallenge
```

2. Change `server/.env` for postgreSQL settings if necessary.
```env
PGHOST=
PGUSER=
PGDATABASE=
PGPASSWORD=
PGPORT=
EXPRESS_PORT=4000
```

3. Install node dependencies and database initialization.
```sh
./setup.sh
```

3. Start both server and client apps
```
./start.sh
```

4. Visit http://localhost:3000/


## Tech stacks
**Client**
- typescript
- create-react-app
- react-router
- axios

**Server**
- typescript
- express
- postgreSQL

## Requirements
The requirements are to design a web application with CRUD methods of 2 major models: `Employee` and `Review` which has connections with each other.
The minimum viable product should contains:
- User authentication.
- CRUD methods with access control


## Scope
The instruction states that "It will take approximately 2 - 3 hours to complete this code test". Thus the scope of the implementation needs to be narrow down to a do-able scale. I decided to implement a simple client-server CRUD service without authentication. Also visual style is not considered.

## Design

### Database

**Models**
```
User
  id int
  isAdmin bool
  name string
  email string
```

```
Review
  id int
  revieweeId int
  reviewerId int
  content text
```

## Structure

### Backend
3 layers were used
- `db` which provides the connect between the backend app and the db service
- `model` which defines the methods of a model
- `routers` which defined the RESTful API and how they use the models.

### Frontend
- `api` which defines the API interface to the server.
- `components` which is all the React components
- `hooks` with the common logics.
And `react-router` is used to define the navigations.



## Assumptions & Follow-ups

**User = Employee**
Since this is a "performance review" app. I assume all users are employees. If it's not the case, `isEmployee` column can be added as a quick solution, or we can add `UserGroup` (stated in the next point).

**A complete access control**
With only 2 roles (admin/employee) it might suit a rather small company but with the number of employees scales up it wouldn't work too great. I would create `UserGroup` and `UserGroupMapping` so that an "admin" can only manage the "employees" in the same group but not all the other users. 

**Authentication**
In my implementation no authentication is yet implemented. We can add `password` into the User model to store a hashed password, or use a 3rd-party oauth provider.

**Better review content**
A performance review is not likely to be just a text, nor be just one format. A review to a manger and to a engineer would be different. To make this work we can `format` to the `Review` model, or if we want it to be comprehensive (eg. A customizable review format designer) we should further create tables for that.

**Optimizing db connections**
For instance a connection pool should be create to manage and reuse the connections.

**Review time period**
A review process would have its time scheduled. So in the `Review` model, the date information such as `start` `end` should be added.

**Better list retrieving**
In a real world service we should consider the list might be rather long. Thus a pagenition should be implemented. Also when the employees increase, filtering and searching would become more and more crucial.

**Client side cache**
I didn't use `redux` because I set the scope rather small. In a real project I would setup redux store for state management, data caching, and normalization.




