import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { GetBoards } from '../Components/CategoryApi';
import { useEffect, useState } from 'react';
import type { Board } from '../type';

export default function Category() {

    const [boarddata,setBoardData] = useState<Board[]>([]);

const loadBoardData = () => {
    GetBoards()
    .then(res => {
        console.log("API 응답:", res);
        setBoardData(res);
    })
    .catch(err => console.log(err));
}

useEffect(() => {
    loadBoardData();
}, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          {Array.isArray(boarddata) && boarddata.map((board) => (
            <div key={board.boardid}>
                <Typography gutterBottom variant="h5" component="div">
                    {board.boardtitle}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {board.boardcontent}
                </Typography>
            </div>
      ))}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
