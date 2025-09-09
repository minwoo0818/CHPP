import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, Button, Pagination, PaginationItem } from '@mui/material';
import { GetBoards } from '../api/CategoryApi';
import { useEffect, useRef, useState } from 'react';
import type { Board_Type } from '../type';
import { useLocation, useParams, Link } from 'react-router-dom';
import type { BoardHandle } from '../Components/Board';
import Board from '../Components/Board';


const BASE_URL = import.meta.env.VITE_API_URL;
const ITEMS_PER_PAGE = 20;

export default function Category() {
  const { type } = useParams();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const boardRef = useRef<BoardHandle>(null);
  const page = parseInt(query.get('page') || '1', 10);

  const [boardData, setBoardData] = useState<Board_Type[]>([]);
  const [selectedBoard, setSelectedBoard] = useState<Board_Type | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadBoardData = () => {
    GetBoards(type)
      .then(res => {
        console.log("API 응답:", res);
        setBoardData(res);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));      
  };

  useEffect(() => {
    loadBoardData();
  }, [type]);

  if (isLoading) {
    return <div>게시물 목록을 불러오는 중입니다...</div>;
  }

  if (!Array.isArray(boardData) || boardData.length === 0) {
    return <div>게시물이 없습니다.</div>;
  }

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedData = boardData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(boardData.length / ITEMS_PER_PAGE);

  


  return (
    <>
 {/* '새 글 작성' 버튼 추가 */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '10px 20px' }}>
        <Button variant="contained" 
                onClick={() => {   
                  setSelectedBoard(null);          
                  boardRef.current?.handleOpen(null);
                }}>
          새 글 작성
        </Button>
      </Box>


      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        
        {paginatedData.map((board) => (
          
          <Card sx={{ width: 345, height: 250 }} key={board.boardId}>
            <CardActionArea onClick={() => {
              setSelectedBoard(board);
              boardRef.current?.handleOpen(board);
              }}>
                
              <CardMedia
                component="img"
                height="140"
                image={`${BASE_URL}${board.pictureUrl}`}
                alt={board.boardTitle}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {board.boardTitle}
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  {board.boardStatus}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {board.boardContent}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>


      {/* ✅ 선택된 게시물만 있을 때 Board 렌더링 */}
      {/* {selectedBoard && ( */}
        <Board ref={boardRef} BoardData={selectedBoard} loadBoardData={loadBoardData}></Board>
        {/* )}  */}
     

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
        <Pagination
          page={page}
          count={totalPages}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`/category/${type}${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </div>
    </>
  );
}