import { useCallback, useState } from 'react';
import { useAppDispatch } from '../redux/hooks';

const TablePage = () => {
  const dispatch = useAppDispatch();
  const [clickCounter, setClickCouter] = useState<number>(0);

  const handleButtonClick = useCallback(() => {
    setClickCouter((prev) => prev + 1);
  }, []);

  const handleClickCheck = useCallback(() => {
    dispatch({ type: 'CHECK' });
  }, [dispatch]);

  return (
    <>
      <h1>Число кликов: {clickCounter}</h1>
      <button onClick={handleButtonClick}>Клик</button>
      <br />
      <button onClick={handleClickCheck}>Проверка саг</button>
    </>
  );
};

export default TablePage;
