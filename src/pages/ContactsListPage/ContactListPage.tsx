import { memo, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

export const ContactListPage = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector<number>((state) => state.user.id);
  useEffect(() => {
    dispatch({ type: 'GET_CONTACTS', payload: { ownerId: userId } });
  }, [dispatch, userId]);
  return <></>;
};

export default memo(ContactListPage);
