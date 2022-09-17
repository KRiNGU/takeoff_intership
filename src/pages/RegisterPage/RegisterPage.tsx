import { Button, Container, Link, SxProps } from '@mui/material';
import { memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { CreateUserProps } from '../../api/user';
import CenteredPaper from '../../components/CenteredPaper';
import FormTextField from '../../components/FormTextField';
import { useAppDispatch } from '../../redux/hooks';
import styles from './RegisterPage.module.scss';

type Inputs = {
  email: string;
  login: string;
  password: string;
};

const RegisterPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { handleSubmit, control } = useForm<Inputs>();

  const onSubmit = useCallback<SubmitHandler<Inputs>>(
    (user: CreateUserProps) =>
      dispatch({ type: 'CREATE_USER', payload: { user } }),
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

  const handleLoginLinkClick = useCallback(() => {
    navigate('/login');
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
          <label htmlFor="email" className={styles.label}>
            Email:
          </label>
          <FormTextField
            name="email"
            control={control}
            variant="outlined"
            margin="normal"
            type="text"
            autoComplete="off"
            sx={textFieldStyles}
            id="email"
            fullWidth
            required
          />
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
          onClick={handleLoginLinkClick}
          sx={{ marginTop: '20px', cursor: 'pointer' }}
        >
          Login
        </Link>
      </CenteredPaper>
    </Container>
  );
};

export default memo(RegisterPage);
