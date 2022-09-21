import {
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Button,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { memo, useCallback, useEffect, useState } from 'react';
import Background from '../../components/Background';
import {
  Contact,
  updateDefaultState,
  ICreateContactForm,
  IUpdateContactForm,
} from '../../models/contacts';
import { User } from '../../models/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CreateContactModal from './CreateContactModal';
import UpdateContactModal from './UpdateContactModal/UpdateContactModal';
import ContactRow from '../../components/ContactRow';
import LogoutIcon from '@mui/icons-material/Logout';

export const ContactListPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector<User>((state) => state.user.user);
  const contactList = useAppSelector<Contact[]>((state) => state.contacts);

  const [isCreateModalOpened, setIsCreateModalOpened] =
    useState<boolean>(false);

  const [isUpdateContactOpened, setIsUpdateModalOpened] =
    useState<boolean>(false);

  const [updateContactState, setUpdateContactState] =
    useState<IUpdateContactForm>(updateDefaultState);
  const [updateContactId, setUpdateContactId] = useState<number>(0);

  useEffect(() => {
    dispatch({ type: 'GET_CONTACTS', payload: { ownerId: user.id } });
  }, [dispatch, user.id]);

  const handleCreateNewContactButtonClick = useCallback(() => {
    setIsCreateModalOpened(true);
  }, []);

  const handleCloseCreateNewContactModal = useCallback(() => {
    setIsCreateModalOpened(false);
  }, []);

  const handleCloseUpdateContactModal = useCallback(() => {
    setIsUpdateModalOpened(false);
  }, []);

  const handleContactClick = useCallback((contact: Contact) => {
    setUpdateContactState((prev) => ({ ...prev, ...contact }));
    setUpdateContactId(contact.id);
    setIsUpdateModalOpened(true);
  }, []);

  const handleUpdateContact = useCallback(
    (data: IUpdateContactForm) => {
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: { contact: data, id: updateContactId },
      });
    },
    [dispatch, updateContactId]
  );

  const handleCreateNewContact = useCallback(
    (data: ICreateContactForm) => {
      dispatch({
        type: 'CREATE_CONTACT',
        payload: { contact: { ...data, ownerId: user.id } },
      });
    },
    [dispatch, user.id]
  );

  const handleDeleteContact = useCallback(
    (contactId: number) => {
      dispatch({ type: 'DELETE_CONTACT', payload: { id: contactId } });
    },
    [dispatch]
  );

  const handleLogout = useCallback(() => {
    dispatch({ type: 'LOGOUT' });
  }, [dispatch]);

  return (
    <>
      <CreateContactModal
        open={isCreateModalOpened}
        onClose={handleCloseCreateNewContactModal}
        onSubmit={handleCreateNewContact}
      />
      <UpdateContactModal
        open={isUpdateContactOpened}
        onClose={handleCloseUpdateContactModal}
        onSubmit={handleUpdateContact}
        contact={updateContactState}
      />
      <Background styles={{ padding: '40px' }}>
        <h1
          style={{
            textAlign: 'center',
            color: '#303640',
            position: 'relative',
          }}
        >
          Список контактов пользователя {user.login}
          <IconButton
            onClick={handleLogout}
            sx={{
              width: '60px',
              height: '60px',
              marginLeft: '10px',
              position: 'absolute',
              top: '50%',
              transform: 'translate(0, -50%)',
              right: '100px',
            }}
          >
            <LogoutIcon sx={{ width: '40px', height: '40px' }} />
          </IconButton>
        </h1>
        <div
          style={{
            borderRadius: '5px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
            backgroundColor: 'transparent',
            color: '#FCFCF8',
            maxWidth: '1200px',
            margin: 'auto',
            marginTop: '50px',
          }}
        >
          <TableContainer component={Paper}>
            <Table aria-label="Contacts table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#303640' }}>
                  <TableCell align="center" sx={{ color: 'white' }}>
                    ID
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white' }}>
                    Email
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white' }}>
                    Name
                  </TableCell>
                  <TableCell align="center" sx={{ color: 'white' }}>
                    Last Name
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {contactList.map((contact, index) => (
                  <ContactRow
                    onDeleteClick={handleDeleteContact}
                    onClick={handleContactClick}
                    contact={contact}
                    key={index}
                  />
                ))}
              </TableBody>
            </Table>
            <Button
              variant="contained"
              sx={{
                width: '100%',
                padding: '0',
                height: '50px',
                borderRadius: '0',
              }}
              onClick={handleCreateNewContactButtonClick}
            >
              <AddIcon />
            </Button>
          </TableContainer>
        </div>
      </Background>
    </>
  );
};

export default memo(ContactListPage);
