import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './LoginPage.module.scss';

type Inputs = {
  test: string;
  requeiredTest: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = useCallback<SubmitHandler<Inputs>>(
    (data) => console.log(data),
    []
  );

  console.log(watch('test'));

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
        }}
      >
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <input defaultValue="test" {...register('test')} />
          <input {...register('requeiredTest')} required />
          {errors.requeiredTest && <span>This field is required</span>}
          <input type="submit" />
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
