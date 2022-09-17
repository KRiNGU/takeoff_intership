import { Paper, PaperProps, SxProps } from '@mui/material';
import { memo, ReactNode } from 'react';

export interface CenteredPaperProps {
  width?: string;
  height?: string;
  children: ReactNode;
  styles?: SxProps;
}

const CenteredPaper = ({
  width,
  height,
  children,
  styles = {},
  ...paperProps
}: CenteredPaperProps & PaperProps) => (
  <Paper
    sx={{
      width: width,
      height: height,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      ...styles,
    }}
    {...paperProps}
  >
    {children}
  </Paper>
);

export default memo(CenteredPaper);
