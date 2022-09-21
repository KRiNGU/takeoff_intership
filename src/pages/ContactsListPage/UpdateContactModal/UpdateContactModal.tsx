import { Button, Modal, SxProps, Typography } from '@mui/material';
import { memo, useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import CenteredPaper from '../../../components/CenteredPaper';
import UpdateContactForm from '../../../components/forms/UpdateContactForm';
import {
  updateDefaultState,
  IUpdateContactForm,
} from '../../../models/contacts';

export interface UpdateContactModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: IUpdateContactForm) => void;
  contact: IUpdateContactForm;
}

const UpdateContactModal = ({
  open,
  onClose,
  onSubmit,
  contact,
}: UpdateContactModalProps) => {
  const methods = useForm<IUpdateContactForm>({
    defaultValues: updateDefaultState,
  });

  useEffect(() => {
    let key: keyof IUpdateContactForm;
    for (key in contact) {
      methods.setValue(key, contact[key]);
    }
  }, [contact, methods]);

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleSubmitForm = useCallback(
    (data: IUpdateContactForm) => {
      onSubmit(data);
      handleClose();
    },
    [onSubmit, handleClose]
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
            Edit contact&apos;s data
          </Typography>
          <FormProvider {...methods}>
            <form
              id="create-form"
              onSubmit={methods.handleSubmit(handleSubmitForm)}
            >
              <UpdateContactForm styles={textFieldStyles} />
            </form>
          </FormProvider>
          <Button
            form="create-form"
            type="submit"
            variant="contained"
            sx={{ marginTop: '20px' }}
          >
            Update
          </Button>
        </CenteredPaper>
      </div>
    </Modal>
  );
};

export default memo(UpdateContactModal);
