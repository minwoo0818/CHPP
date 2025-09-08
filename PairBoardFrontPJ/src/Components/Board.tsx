import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";

export default function Board ()
{
          const [open, setOpen] = useState(false);

          const handleOpen = () => setOpen(true);
          const handleClose = () => setOpen(false);

          return (
          <>
                    
          <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>New Car</DialogTitle>
                    <DialogContent>
                    <CarDialogContent
                              car={car}
                              handleChange={handleChange}
                    />                                             
                    </DialogContent>
                    <DialogActions>
                              {/* <Button onClick={handleSave}>저장</Button> */}
                              <Button onClick={handleClose}>닫기</Button>
                    </DialogActions>
          </Dialog>
          </>

          )
}