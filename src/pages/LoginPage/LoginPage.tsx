import { Button, Link, SxProps } from '@mui/material';
import { memo, useCallback, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Background from '../../components/Background';
import CenteredPaper from '../../components/CenteredPaper';
import { LoginForm } from '../../components/forms/LoginForm';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './LoginPage.module.scss';

export type ILoginForm = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error: string = useAppSelector<string>((state) => state.user.error);

  const methods = useForm<ILoginForm>();

  useEffect(() => {
    if (error) {
      methods.setError('login', { message: error });
      methods.setError('password', { message: error });
    } else {
      methods.clearErrors();
    }
  }, [error, methods]);

  const onSubmit = useCallback<SubmitHandler<ILoginForm>>(
    (data) => {
      dispatch({ type: 'GET_USER', payload: data });
    },
    [dispatch]
  );

  const textFieldStyles: SxProps = {
    marginTop: '10px',
    borderRadius: '5px',
  };

  const handleRegisterLinkClick = useCallback(() => {
    navigate('/register');
    dispatch({ type: 'CLEAR_ERROR' });
  }, [navigate, dispatch]);

  return (
    <Background>
      <CenteredPaper
        width="500px"
        styles={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 70px',
        }}
      >
        <FormProvider {...methods}>
          <form
            id="login-form"
            className={styles.form}
            onSubmit={methods.handleSubmit(onSubmit)}
          >
            <LoginForm styles={textFieldStyles} />
            <Button
              variant="contained"
              type="submit"
              form="login-form"
              sx={{ marginTop: '50px' }}
            >
              Submit
            </Button>
          </form>
        </FormProvider>
        <Link
          className={styles.link}
          onClick={handleRegisterLinkClick}
          sx={{ marginTop: '20px', cursor: 'pointer' }}
        >
          Register
        </Link>
      </CenteredPaper>
    </Background>
  );
};

export default memo(LoginPage);
