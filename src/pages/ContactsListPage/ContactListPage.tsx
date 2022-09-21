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
  TextField,
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
import SearchIcon from '@mui/icons-material/Search';

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

  const [searchField, setSearchField] = useState<string>('');

  useEffect(() => {
    dispatch({
      type: 'GET_CONTACTS',
      payload: { ownerId: user.id },
    });
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

  const handleChangeSearchField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchField(e.target.value);
    },
    []
  );

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
        payload: { ...data, ownerId: user.id },
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

  const handleSubmitSearchForm = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      dispatch({
        type: 'GET_CONTACTS',
        payload: { ownerId: user.id, search: searchField },
      });
    },
    [dispatch, user.id, searchField]
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
          <TableContainer
            sx={{
              marginTop: '100px',
              position: 'relative',
              overflow: 'visible',
              borderRadius: '5px',
            }}
            component={Paper}
          >
            <Paper>
              <form
                style={{
                  width: '400px',
                  position: 'absolute',
                  right: '0',
                  transform: 'translate(0, -100%)',
                  backgroundColor: 'white',
                  borderRadius: '0',
                  borderTopLeftRadius: '5px',
                  borderTopRightRadius: '5px',
                  display: 'flex',
                  overflow: 'hidden',
                }}
                onSubmit={handleSubmitSearchForm}
                id="search-form"
              >
                <TextField
                  autoComplete="off"
                  variant="filled"
                  value={searchField}
                  onChange={handleChangeSearchField}
                  sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    borderTopRightRadius: '5px',
                  }}
                />
                <Button
                  type="submit"
                  form="search-form"
                  variant="contained"
                  sx={{
                    borderRadius: '0',
                    borderTopRightRadius: '5px',
                  }}
                >
                  <SearchIcon />
                </Button>
              </form>
            </Paper>
            <Table
              aria-label="Contacts table"
              sx={{ overflow: 'hidden', borderTopLeftRadius: '5px' }}
            >
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
                borderTopLeftRadius: '0',
                borderTopRightRadius: '0',
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
