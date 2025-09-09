import { Box, Button, ButtonGroup, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, IconButton, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { BoardStatus, type Board_Type } from "../type";
import { ThumbDownAlt, ThumbUpAlt } from "@mui/icons-material";
import ItemImageUploader from "./ImageUploader";
import { UpdateBoard } from "../api/CategoryApi";

export type BoardHandle = {
    handleOpen: (data: Board_Type | null) => void;
    handleClose: () => void;
}

type BoardProps = {
    BoardData: Board_Type | null;
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


    const handleOpen = (data: Board_Type | null) => {
        if (data && data.boardId)
        {
         //await 
         setBoardData(data);         
        }
        else
        {
         //await 
        setBoardData(
        {
            boardTitle: '',
           boardContent: '',
           good: 0,
           bad: 0,
           pictureUrl: '',
           boardStatus: BoardStatus.NOTICE
        }
        );
    }
        console.log("handleOpen");
    
        setOpen(true);

    }; 


    const handleClose = () => {         
        setBoardData({         
           boardTitle: '',
           boardContent: '',
           good: 0,
           bad: 0,
           pictureUrl: '',
           boardStatus: BoardStatus.NOTICE   
    });
        setOpen(false);
    }

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
        if (open && BoardData && BoardData.boardId) {
            setBoardData(BoardData); // Dialog 열려있을 때만 최신 props 반영
        }
    }, [BoardData, open]);


    return (
        <>
        <Dialog open={open} onClose={handleClose}
                sx={{'& .MuiDialog-paper' : { maxWidth: 'md', width: '80%'}}}>
                <DialogTitle>
                    <TextField label= "글제목"
                                        name="boardTitle"
                                        value={boardData.boardTitle}
                                        onChange={handleChange} />
                </DialogTitle>
                <DialogContent>  
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">카테고리</FormLabel>
                            <RadioGroup
                                row
                                aria-labelledby="board-status-group-label"
                                name="boardStatus"
                                value={boardData.boardStatus}   // ✅ 현재 선택된 값 반영
                                onChange={handleChange}         // ✅ boardData 상태 갱신
                            >
                            <FormControlLabel value="NOTICE" control={<Radio />} label="NOTICE" />
                            <FormControlLabel value="COMIC" control={<Radio />} label="COMIC" />
                            <FormControlLabel value="GAME" control={<Radio />} label="GAME" />
                            <FormControlLabel value="CAR" control={<Radio />} label="CAR" />
                            <FormControlLabel value="SPORTS" control={<Radio />} label="SPORTS" />
                            <FormControlLabel value="MOVIE" control={<Radio />} label="MOVIE" />
                        </RadioGroup>
                    </FormControl>              
                <Stack spacing={2} mt={1}>
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