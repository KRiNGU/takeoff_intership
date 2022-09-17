import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  RouteProps,
} from 'react-router-dom';
import { connect } from 'react-redux';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import './style.css';
import { IStore } from './redux/store';

interface AppProps extends RouteProps {
  userId: number;
}

const App = (props: AppProps) => (
  <BrowserRouter>
    {props.userId ? (
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Navigate to="/home" replace />} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    )}
  </BrowserRouter>
);

const mapStoreToProps = (store: IStore): AppProps => ({
  userId: store.user.id,
});

export default connect(mapStoreToProps)(App);
