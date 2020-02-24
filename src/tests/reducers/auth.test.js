import authReducer from '../../reducers/auth';

test('should store user ID upon login', () => {
  const action = {
    type: 'LOGIN',
    uid: 1
  };
  const state = authReducer({}, action);
  expect(state.uid).toEqual(action.uid);
});

test('should remove uid', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'id'}, action);
  expect(state).toEqual({})
});