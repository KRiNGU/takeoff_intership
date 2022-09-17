import { Button, Link, SxProps } from '@mui/material';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormTextField from '../../components/FormTextField';
import styles from './LoginPage.module.scss';

type Inputs = {
  login: string;
  password: string;
};

const LoginPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<Inputs>();

  const onSubmit = useCallback<SubmitHandler<Inputs>>(
    (data) => console.log(data),
    []
  );

  const textFieldStyles: SxProps = {
    marginTop: '10px',
    backgroundColor: '#43686F',
    width: '50%',
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
      <Paper
        sx={{
          width: '500px',
          height: '500px',
          backgroundColor: '#112433',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
          onClick={handleRegisterLinkClick}
          sx={{ marginTop: '20px', cursor: 'pointer' }}
        >
          Register
        </Link>
      </Paper>
    </Container>
  );
};

export default LoginPage;
