import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
import type { Board_Type } from "../type";

export type BoardHandle = {
    handleOpen: () => void;
    handleClose: () => void;
}

type BoardProps = {
    BoardData: Board_Type;
    loadBoardData: () => void;
}

const Board = forwardRef<BoardHandle, BoardProps>(({BoardData, loadBoardData}, ref) => {
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
                <DialogTitle>{BoardData.boardTitle}</DialogTitle>
                <DialogContent>
                {BoardData.boardStatus}
                {BoardData.boardContent}
                {BoardData.good}
                {BoardData.bad}
                {BoardData.pictureUrl}
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