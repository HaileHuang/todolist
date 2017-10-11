import * as usersService from '../services/todoitems';

export default {
  namespace: 'todoitems',
  state: {
    list: [],
  },
  reducers: {
    save(state, { payload: { data: list } }) {
      return { ...state, list };
    },
  },
  effects: {
    *fetch({ payload: haha }, { call, put }) {
      const { data, headers } = yield call(usersService.fetch, {});
      yield put({
        type: 'save',
        payload: {
          data
        },
      });
    },
    *remove({ payload: id }, { call, put }) {
      yield call(usersService.remove, id);
      yield put({ type: 'fetch', payload: '' });
    },
    *update({ payload: { id, title, checked } }, { call, put }) {
      yield call(usersService.update, id, title, checked);
      yield put({ type: 'fetch', payload: '' });
    },
    *create({ payload: { title, checked } }, { call, put }) {
      yield call(usersService.create, title, checked);
      yield put({ type: 'fetch', payload: '' });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
