import { Button } from '@mui/material';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';

const TablePage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [clickCounter, setClickCouter] = useState<number>(0);

  const handleButtonClick = useCallback(() => {
    setClickCouter((prev) => prev + 1);
  }, []);

  const handleClickCheck = useCallback(() => {
    dispatch({ type: 'CHECK' });
  }, [dispatch]);

  const handleNavigate = useCallback(() => {
    navigate('/home');
  }, [navigate]);
  console.log(process.env.SERVER_URL);

  return (
    <>
      <h1>Число кликов: {clickCounter}</h1>
      <button onClick={handleButtonClick}>Клик</button>
      <br />
      <button onClick={handleClickCheck}>Проверка саг</button>
      <br />
      <Button variant="contained" onClick={handleNavigate}>
        Link
      </Button>
    </>
  );
};

export default TablePage;
