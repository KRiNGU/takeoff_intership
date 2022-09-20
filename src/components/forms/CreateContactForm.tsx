import { SxProps } from '@mui/material';
import { memo } from 'react';
import { useFormContext } from 'react-hook-form';
import { ICreateContactForm } from '../../pages/ContactsListPage/CreateContactModal/CreateContactModal';
import FormTextField from '../FormTextField';

export interface CreateContactFormProps {
  styles?: SxProps;
}

const CreateContactForm = ({ styles }: CreateContactFormProps) => {
  const { control } = useFormContext<ICreateContactForm>();
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
        fullWidth
      />
      <FormTextField
        name="phoneNumber"
        control={control}
        type="text"
        autoComplete="off"
        sx={styles}
        label="Phone"
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

export default memo(CreateContactForm);
