import { login, logout } from '../../actions/auth';

test('should return uid upon login', () => {
  const action = login({ uid: 1 });
  expect(action).toEqual({ 
    type: 'LOGIN',
    uid: 1
   })
});

test('should return LOGOUT action type', () => {
  const action = logout();
  expect(action).toEqual({ 
    type: 'LOGOUT',
   })
});