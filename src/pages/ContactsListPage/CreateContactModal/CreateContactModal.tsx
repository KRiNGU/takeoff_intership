import { Button, Modal, SxProps, Typography } from '@mui/material';
import { memo, useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import CenteredPaper from '../../../components/CenteredPaper';
import CreateContactForm from '../../../components/forms/CreateContactForm';
import {
  createDefaultState,
  ICreateContactForm,
} from '../../../models/contacts';

export interface CreateContactModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: ICreateContactForm) => void;
}

const CreateContactModal = ({
  open,
  onClose,
  onSubmit,
}: CreateContactModalProps) => {
  const methods = useForm<ICreateContactForm>({
    defaultValues: createDefaultState,
  });

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleSubmitForm = useCallback<SubmitHandler<ICreateContactForm>>(
    (data) => {
      onSubmit(data);
      handleClose();
      methods.reset();
    },
    [onSubmit, handleClose, methods]
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
          <FormProvider {...methods}>
            <form
              id="create-form"
              onSubmit={methods.handleSubmit(handleSubmitForm)}
            >
              <CreateContactForm styles={textFieldStyles} />
            </form>
          </FormProvider>
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
