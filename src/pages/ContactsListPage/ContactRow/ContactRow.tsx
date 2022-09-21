import React, { memo, useCallback } from 'react';
import { Contact } from '../../../models/contacts';
import { styled } from '@mui/system';
import { TableRow, TableCell, Button } from '@mui/material';

export interface ContactRowProps {
  contact: Contact;
  onClick: (contact: Contact) => void;
  onDeleteClick: (contactId: number) => void;
  key: number;
}

const ContactRow = ({ contact, onClick, onDeleteClick }: ContactRowProps) => {
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
    position: 'relative',
  }));

  const handleDeleteClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onDeleteClick(contact.id);
    },
    [onDeleteClick, contact]
  );

  return (
    <StyledTableRow onClick={() => onClick(contact)}>
      <StyledTableCell align="center">{contact.id}</StyledTableCell>
      <StyledTableCell align="center">{contact.email}</StyledTableCell>
      <StyledTableCell align="center">{contact.name}</StyledTableCell>
      <StyledTableCell align="center">
        {contact.lastName}
        <Button
          onClick={handleDeleteClick}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translate(0, -50%)',
          }}
          variant="contained"
          color="error"
        >
          Delete
        </Button>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export default memo(ContactRow);
