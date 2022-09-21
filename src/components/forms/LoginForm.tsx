import { SxProps } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ILoginForm } from '../../pages/LoginPage/LoginPage';
import { loginRules } from '../../validation/login';
import { passwordRules } from '../../validation/password';
import FormTextField from '../FormTextField';

export interface LoginFormProps {
  styles?: SxProps;
}

export const LoginForm = ({ styles }: LoginFormProps) => {
  const { control } = useFormContext<ILoginForm>();
  return (
    <>
      <FormTextField
        name="login"
        control={control}
        variant="outlined"
        margin="normal"
        type="text"
        autoComplete="off"
        sx={styles}
        id="login"
        label="Login"
        controllerProps={{
          rules: loginRules,
        }}
        fullWidth
        required
      />
      <FormTextField
        name="password"
        control={control}
        variant="outlined"
        margin="normal"
        type="text"
        autoComplete="off"
        sx={styles}
        id="password"
        label="Password"
        controllerProps={{
          rules: passwordRules,
        }}
        fullWidth
        required
      />
    </>
  );
};

export default memo(LoginForm);
