import { connect } from 'react-redux';
import {
  BrowserRouter,
  Navigate,
  Route,
  RouteProps,
  Routes,
} from 'react-router-dom';
import { ContactListPage } from '../pages/ContactsListPage/ContactListPage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import RegisterPage from '../pages/RegisterPage';
import { IStore } from '../redux/store';

interface MainRouteProps extends RouteProps {
  userId: number;
}

const MainRoute = (props: MainRouteProps) => (
  <BrowserRouter>
    {props.userId ? (
      <Routes>
        <Route path="/" element={<Navigate to="/contacts" replace />} />
        <Route path="/contacts" element={<ContactListPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<Navigate to="/contacts" replace />} />
      </Routes>
    ) : (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    )}
  </BrowserRouter>
);

const mapStoreToProps = (store: IStore): MainRouteProps => ({
  userId: store.user.user.id,
});

export default connect(mapStoreToProps)(MainRoute);
