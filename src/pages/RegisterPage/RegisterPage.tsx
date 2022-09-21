import { Button, Link, SxProps } from '@mui/material';
import { memo, useCallback, useEffect } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Background from '../../components/Background';
import CenteredPaper from '../../components/CenteredPaper';
import { SignUpForm } from '../../components/forms/SignupForm';
import { CreateUserProps } from '../../models/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './RegisterPage.module.scss';

export type ISignUpForm = {
  email: string;
  login: string;
  password: string;
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const error: string = useAppSelector<string>((state) => state.user.error);

  const methods = useForm<ISignUpForm>();

  useEffect(() => {
    if (error) {
      methods.setError('login', { message: error });
    } else {
      methods.clearErrors();
    }
  }, [error, methods]);

  const textFieldStyles: SxProps = {
    marginTop: '10px',
    borderRadius: '5px',
    input: {
      borderRadius: '5px',
    },
  };

  const handleLoginLinkClick = useCallback(() => {
    navigate('/login');
    dispatch({ type: 'CLEAR_ERROR' });
  }, [navigate, dispatch]);

  const onSubmit = useCallback<SubmitHandler<ISignUpForm>>(
    (user: CreateUserProps) =>
      dispatch({ type: 'CREATE_USER', payload: { user } }),
    [dispatch]
  );

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
            <SignUpForm styles={textFieldStyles} />
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
          onClick={handleLoginLinkClick}
          sx={{ marginTop: '20px', cursor: 'pointer' }}
        >
          Login
        </Link>
      </CenteredPaper>
    </Background>
  );
};

export default memo(RegisterPage);
