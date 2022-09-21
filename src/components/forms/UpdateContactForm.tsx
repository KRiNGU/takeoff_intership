import { SxProps } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { IUpdateContactForm } from '../../pages/ContactsListPage/UpdateContactModal/UpdateContactModal';
import { phoneNumberRules } from '../../validation/phoneNumber';
import { telegramRules } from '../../validation/telegram';
import FormTextField from '../FormTextField';

export interface UpdateContactFormProps {
  styles?: SxProps;
}

const UpdateContactForm = ({ styles }: UpdateContactFormProps) => {
  const { control } = useFormContext<IUpdateContactForm>();
  return (
    <>
      <FormTextField
        name="name"
        control={control}
        type="text"
        autoComplete="off"
        sx={styles}
        label="Name"
        required
        fullWidth
      />
      <FormTextField
        name="lastName"
        control={control}
        type="text"
        autoComplete="off"
        sx={styles}
        label="Last name"
        required
        fullWidth
      />
      <FormTextField
        name="email"
        control={control}
        type="text"
        autoComplete="off"
        sx={styles}
        label="Email"
        required
        fullWidth
      />
      <FormTextField
        name="patronymic"
        control={control}
        type="text"
        autoComplete="off"
        sx={styles}
        label="Patronymic"
        fullWidth
      />
      <FormTextField
        name="telegram"
        control={control}
        type="text"
        autoComplete="off"
        sx={styles}
        label="Telegram"
        controllerProps={{ rules: telegramRules }}
        fullWidth
      />
      <FormTextField
        name="phoneNumber"
        control={control}
        type="text"
        autoComplete="off"
        sx={styles}
        label="Phone"
        controllerProps={{ rules: phoneNumberRules }}
        fullWidth
      />
      <FormTextField
        name="country"
        control={control}
        type="text"
        autoComplete="off"
        sx={styles}
        label="Country"
        fullWidth
      />
    </>
  );
};

export default memo(UpdateContactForm);
