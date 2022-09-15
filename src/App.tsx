import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import TablePage from './pages/TablePage';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TablePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);
