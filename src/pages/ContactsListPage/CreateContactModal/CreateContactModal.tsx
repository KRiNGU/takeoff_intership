import { Button, Modal, SxProps, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Contact } from '../../../models/contacts';
import CenteredPaper from '../../../components/CenteredPaper';
import FormTextField from '../../../components/FormTextField';

export interface CreateContactModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Contact) => void;
}

const CreateContactModal = ({
  open,
  onClose,
  onSubmit,
}: CreateContactModalProps) => {
  const { control, handleSubmit } = useForm<Contact>();

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleSubmitForm = useCallback<SubmitHandler<Contact>>(
    (data) => {
      console.log(data);
      onSubmit(data);
    },
    [onSubmit]
  );

  const textFieldStyles: SxProps = {
    marginTop: '10px',
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        <CenteredPaper
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '30px 40px',
            width: '400px',
          }}
        >
          <Typography id="create-modal-title" variant="h6" component="h2">
            Input contact&apos;s data
          </Typography>
          <form id="create-form" onSubmit={handleSubmit(handleSubmitForm)}>
            <FormTextField
              name="name"
              control={control}
              type="text"
              autoComplete="off"
              sx={textFieldStyles}
              label="Name"
              required
              fullWidth
            />
            <FormTextField
              name="lastName"
              control={control}
              type="text"
              autoComplete="off"
              sx={textFieldStyles}
              label="Last name"
              required
              fullWidth
            />
            <FormTextField
              name="patronymic"
              control={control}
              type="text"
              autoComplete="off"
              sx={textFieldStyles}
              label="Patronymic"
              fullWidth
            />
            <FormTextField
              name="telegram"
              control={control}
              type="text"
              autoComplete="off"
              sx={textFieldStyles}
              label="Telegram"
              fullWidth
            />
            <FormTextField
              name="phoneNumber"
              control={control}
              type="text"
              autoComplete="off"
              sx={textFieldStyles}
              label="Phone"
              fullWidth
            />
            <FormTextField
              name="country"
              control={control}
              type="text"
              autoComplete="off"
              sx={textFieldStyles}
              label="Country"
              fullWidth
            />
          </form>
          <Button
            form="create-form"
            type="submit"
            variant="contained"
            sx={{ marginTop: '20px' }}
          >
            Create
          </Button>
        </CenteredPaper>
      </div>
    </Modal>
  );
};
export default memo(CreateContactModal);
