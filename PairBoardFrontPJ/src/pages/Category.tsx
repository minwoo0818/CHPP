import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { GetBoards } from '../Components/CategoryApi';
import { useEffect, useState } from 'react';
import type { Board } from '../type';

export default function Category() {

    const [boardData,setBoardData] = useState<Board[]>([]);
    const [isLoading, setIsLoading] = useState(true);

const loadBoardData = () => {
    GetBoards()
    .then(res => {
        console.log("API 응답:", res);
        setBoardData(res);
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    });
}

useEffect(() => {
    loadBoardData();
}, []);

  if (isLoading)
  {
    return <div> 게시물 목록을 불러오는 중입니다...</div>;
  }

  if (!Array.isArray(boardData) || boardData.length === 0)
  {
    return <div>게시물이 없습니다.</div>
  }

  return (
    <div style = {{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center'}}>
    { boardData.map((board) => (
    <Card sx={{ Width: 345 }} key={board.boardId}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/이광수3.jpg"
          alt={board.boardTitle}
        />
        <CardContent>         
            
                <Typography gutterBottom variant="h5" component="div">
                    {board.boardTitle}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {board.boardContent}
                </Typography>
            
      
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
    </div>
  );
}
