import { SxProps } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ISignUpForm } from '../../pages/RegisterPage/RegisterPage';
import { emailRules } from '../../validation/email';
import { loginRules } from '../../validation/login';
import { passwordRules } from '../../validation/password';
import FormTextField from '../FormTextField';

export interface SignUpFormProps {
  styles?: SxProps;
}

export const SignUpForm = ({ styles }: SignUpFormProps) => {
  const { control } = useFormContext<ISignUpForm>();
  return (
    <>
      <FormTextField
        name="email"
        control={control}
        variant="outlined"
        margin="normal"
        type="text"
        autoComplete="off"
        sx={styles}
        id="email"
        label="Email"
        controllerProps={{
          rules: emailRules,
        }}
        fullWidth
        required
      />
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

export default memo(SignUpForm);
