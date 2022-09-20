import {
  Paper,
  Table,
  TableContainer,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
  Button,
} from '@mui/material';
import { styled } from '@mui/system';
import { memo, useCallback, useEffect, useState } from 'react';
import Background from '../../components/Background';
import { Contact } from '../../models/contacts';
import { User } from '../../models/user';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import CreateContactModal from './CreateContactModal';

export const ContactListPage = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector<User>((state) => state.user);
  useEffect(() => {
    dispatch({ type: 'GET_CONTACTS', payload: { ownerId: user.id } });
  }, [dispatch, user.id]);
  const contactList = useAppSelector<Contact[]>((state) => state.contacts);
  const [isCreateModalOpened, setIsCreateModalOpened] =
    useState<boolean>(false);

  const StyledTableCell = styled(TableCell)(() => ({
    borderColor: 'grey',
  }));

  const StyledTableRow = styled(TableRow)(() => ({
    '&:nth-of-type(odd)': {
      backgroundColor: '#BABABA',
    },
    '&:last-child': {
      borderWidth: 0,
    },
    '&:hover': {
      backgroundColor: '#9EA0C2',
    },
    '&:active': {
      backgroundColor: '#B8BBFF',
    },
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  }));

  const handleCreateNewContactButtonClick = useCallback(() => {
    setIsCreateModalOpened(true);
  }, []);

  const handleCloseCreateNewContactModal = useCallback(() => {
    setIsCreateModalOpened(false);
  }, []);

  return (
    <>
      <CreateContactModal
        open={isCreateModalOpened}
        onClose={handleCloseCreateNewContactModal}
        onSubmit={(data: Contact) => console.log(data)}
      />
      <Background styles={{ backgroundColor: 'white', padding: '40px' }}>
        <h1 style={{ textAlign: 'center', color: '#303640' }}>
          Список контактов пользователя {user.login}
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
                  <StyledTableRow
                    onClick={() => console.log(index)}
                    key={index}
                  >
                    <StyledTableCell align="center">
                      {contact.id}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {contact.email}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {contact.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {contact.lastName}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
            <Button onClick={handleCreateNewContactButtonClick}>Create</Button>
          </TableContainer>
        </div>
      </Background>
    </>
  );
};

export default memo(ContactListPage);
