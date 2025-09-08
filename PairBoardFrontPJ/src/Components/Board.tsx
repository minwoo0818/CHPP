import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";

export type BoardHandle = {
    handleOpen: () => void;
    handleClose: () => void;
}

const Board = forwardRef<BoardHandle>((_, ref) => {
    const [open, setOpen] = useState(false);
      
    const handleOpen = () => {
        setOpen(true);
        console.log("handleOpen");
    };
    const handleClose = () => setOpen(false);

    useImperativeHandle(ref, () => ({
        handleOpen,
        handleClose,
    }));
    return (
        <>
        <Dialog open={open} onClose={handleClose}>
                <DialogTitle>New Car</DialogTitle>
                <DialogContent>
                {/* <CarDialogContent
                            car={car}
                            handleChange={handleChange}
                />                                              */}
                </DialogContent>
                <DialogActions>
                            {/* <Button onClick={handleSave}>저장</Button> */}
                            <Button onClick={handleClose}>닫기</Button>
                </DialogActions>
        </Dialog>
        </>

        );
});

export default Board;