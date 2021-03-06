import dva from 'dva';
import createLoading from 'dva-loading';
import todoitems from './models/todoitems';
import router from './router';

// 1. Initialize
const app = dva();

// 2. Plugins
app.use(createLoading());

// 3. Model
app.model(todoitems);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');