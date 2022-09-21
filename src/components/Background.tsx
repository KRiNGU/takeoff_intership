import { SxProps } from '@mui/material';
import { Container } from '@mui/system';
import { memo, ReactNode } from 'react';

export interface BackgroundProps {
  styles?: SxProps;
  children?: ReactNode;
}

const Background = ({ children, styles }: BackgroundProps) => (
  <Container
    maxWidth={false}
    disableGutters
    sx={{
      backgroundColor: '#53AFD8',
      minHeight: '100%',
      position: 'relative',
      ...styles,
    }}
  >
    {children}
  </Container>
);

export default memo(Background);
