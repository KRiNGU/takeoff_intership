import { Button, Link, SxProps } from '@mui/material';
import Container from '@mui/material/Container';
import { memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import CenteredPaper from '../../components/CenteredPaper';
import FormTextField from '../../components/FormTextField';
import { useAppDispatch } from '../../redux/hooks';
import { loginRules } from '../../validation/login';
import { passwordRules } from '../../validation/password';
import styles from './LoginPage.module.scss';

type Inputs = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm<Inputs>();

  const onSubmit = useCallback<SubmitHandler<Inputs>>(
    (data) => {
      dispatch({ type: 'GET_USER', payload: data });
    },
    [dispatch]
  );

  const textFieldStyles: SxProps = {
    marginTop: '10px',
    backgroundColor: '#43686F',
    borderRadius: '5px',
    input: {
      color: '#D7D6DE',
      borderRadius: '5px',
    },
  };

  const handleRegisterLinkClick = useCallback(() => {
    navigate('/register');
  }, [navigate]);

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        backgroundColor: '#193F48',
        overflow: 'hidden',
        minHeight: '100%',
        position: 'relative',
      }}
    >
      <CenteredPaper
        width="500px"
        styles={{
          backgroundColor: '#112433',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '40px 70px',
        }}
      >
        <form
          id="login-form"
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="login" className={styles.label}>
            Login:
          </label>
          <FormTextField
            name="login"
            control={control}
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="off"
            sx={textFieldStyles}
            id="login"
            controllerProps={{
              rules: loginRules,
            }}
            fullWidth
            required
          />
          <label htmlFor="password" className={styles.label}>
            Password:
          </label>
          <FormTextField
            name="password"
            control={control}
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="off"
            sx={textFieldStyles}
            id="password"
            controllerProps={{
              rules: passwordRules,
            }}
            fullWidth
            required
          />
          <Button
            variant="contained"
            type="submit"
            form="login-form"
            sx={{ marginTop: '50px' }}
          >
            Submit
          </Button>
        </form>
        <Link
          className={styles.link}
          onClick={handleRegisterLinkClick}
          sx={{ marginTop: '20px', cursor: 'pointer' }}
        >
          Register
        </Link>
      </CenteredPaper>
    </Container>
  );
};

export default memo(LoginPage);
