import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { BoardStatus, type Board_Type } from "../type";
import { ThumbDownAlt, ThumbUpAlt } from "@mui/icons-material";
import ItemImageUploader from "./ImageUploader";
import { UpdateBoard } from "../api/CategoryApi";

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
    const [boardData, setBoardData] = useState<Board_Type>({         
           boardTitle: '',
           boardContent: '',
           good: 0,
           bad: 0,
           pictureUrl: '',
           boardStatus: BoardStatus.NOTICE   
    });
    
    const handleOpen = async() => {
        await setBoardData(BoardData);
        console.log("handleOpen");
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'good' || name === 'bad') {
            setBoardData(prevData => ({
                ...prevData,
                [name]: Number(value)
            }));
        } else {
            setBoardData(prevData => ({
                ...prevData,
                [name]: value
            }));
        }
    };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//                     const value = e.target.value;
//                     const name = e.target.name;
//                     setBoard({...board, [name]: value});
//           }

 const handleGoodClick = () => {
        setBoardData(prevData => ({
            ...prevData,
            good: prevData.good + 1
        }));
    };

    const handleBadClick = () => {
        setBoardData(prevData => ({
            ...prevData,
            bad: prevData.bad + 1
        }));
    };

    useImperativeHandle(ref, () => ({
        handleOpen,
        handleClose,
    }));

    const handleSave = async() => {
        await UpdateBoard(boardData);
        loadBoardData();
        setBoardData({
            boardTitle: '',
           boardContent: '',
           good: 0,
           bad: 0,
           pictureUrl: '',
           boardStatus: BoardStatus.NOTICE   
        });
        handleClose();
    }

    useEffect(() => {
        if (open) {
            setBoardData(BoardData); // Dialog 열려있을 때만 최신 props 반영
        }
    }, [BoardData, open]);


    return (
        <>
        <Dialog open={open} onClose={handleClose}
                sx={{'& .MuiDialog-paper' : { maxWidth: 'md', width: '80%'}}}>
                <DialogTitle>{boardData.boardTitle}</DialogTitle>
                <DialogContent>                
                <Stack spacing={2} mt={1}>
                    <TextField label="카테고리"
                               name="boardStatus"
                               value={boardData.boardStatus}
                               onChange={handleChange} />
                    <TextField label="글내용"
                               name="boardContent"
                               value={boardData.boardContent}
                               onChange={handleChange}
                               multiline
                               rows={4} />
                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2 }}>
                            <IconButton onClick={handleGoodClick} color="primary">
                                <ThumbUpAlt />
                            </IconButton>
                            <Typography variant="body1">{boardData.good}</Typography>

                            <IconButton onClick={handleBadClick} color="secondary">
                                <ThumbDownAlt />
                            </IconButton>
                            <Typography variant="body1">{boardData.bad}</Typography>
                        </Stack>
                    {/* <TextField label="좋아요"
                               name="good"
                               value={BoardData.good}
                               onChange={handleChange} />
                    <TextField label="싫어요"
                               name="bad"
                               value={BoardData.bad}
                               onChange={handleChange} /> */}
                    {/* <TextField label="이미지"
                               name="pictureUrl"
                               value={BoardData.pictureUrl}
                               onChange={handleChange} />                      */}
                               <ItemImageUploader BoardData={boardData} loadBoardData={loadBoardData}/>
                </Stack>
                </DialogContent>
                <DialogActions>
                            <Button onClick={handleSave}>저장</Button>
                            <Button onClick={handleClose}>닫기</Button>
                </DialogActions>
        </Dialog>
        </>

        );
});

export default Board;