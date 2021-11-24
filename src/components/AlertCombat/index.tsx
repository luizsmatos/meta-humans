import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useAppContext } from '../../hooks/useAppContext';

const AlertCombat = () => {
  const { open, handleCloseDialogCombat, handleStartCombat } = useAppContext();
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseDialogCombat}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Esta pronto para o combate?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Se sim, você deve escolher dois personagens para que eles se
            enfrentem.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialogCombat}>Desistir</Button>
          <Button onClick={handleStartCombat} autoFocus>
            Começar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertCombat;
