import { Paper, PaperProps, SxProps } from '@mui/material';
import { forwardRef, memo, ReactNode } from 'react';

export interface CenteredPaperProps extends PaperProps {
  width?: string;
  height?: string;
  children: ReactNode;
  styles?: SxProps;
}

const CenteredPaper = forwardRef<React.ElementRef<'div'>, CenteredPaperProps>(
  (
    { width, height, children, styles = {}, ...paperProps }: CenteredPaperProps,
    ref
  ) => (
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
      component="div"
      ref={ref}
      {...paperProps}
    >
      {children}
    </Paper>
  )
);

CenteredPaper.displayName = 'CenteredPaper';

export default memo(CenteredPaper);
