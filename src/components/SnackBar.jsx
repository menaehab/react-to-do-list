import { useContext } from 'react';
import { Alert, Snackbar } from '@mui/material';
import Slide from '@mui/material/Slide';
import { TodoContext } from '../contexts/TodoContext';

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function SnackBar() {
  const { snackbar, hideSnackbar } = useContext(TodoContext);

  return (
    <Snackbar
      open={snackbar.open}
      onClose={hideSnackbar}
      TransitionComponent={SlideTransition}
      autoHideDuration={2000}
    >
      <Alert 
        onClose={hideSnackbar} 
        severity="success" 
        color="primary" 
        variant="filled"
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
}
