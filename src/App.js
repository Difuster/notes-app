import './index.scss';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux';
import store from './slices/index';

function App() {
  return (
    <Provider store={store}>
      <div className="main">
        <MainPage />
      </div>
    </Provider>
  );
}

export default App;
