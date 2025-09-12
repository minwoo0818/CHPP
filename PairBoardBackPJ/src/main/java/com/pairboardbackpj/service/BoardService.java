package com.pairboardbackpj.service;

import com.pairboardbackpj.constant.BoardStatus;
import com.pairboardbackpj.domain.Board;
import com.pairboardbackpj.domain.repository.BoardRepository;
import com.pairboardbackpj.dto.BoardDto;
import jakarta.persistence.EntityNotFoundException;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;

    public BoardDto findByBoardId(Integer boardId){
        Board board = boardRepository.findById(boardId).orElseThrow(EntityNotFoundException::new);

        return BoardDto.builder()
                .boardId(board.getBoardId())
                .boardTitle(board.getBoardTitle())
                .boardContent(board.getBoardContent())
                .good(board.getGood())
                .bad(board.getBad())
                .pictureUrl(board.getPictureUrl())
                .boardStatus(board.getBoardStatus())
                .build();
    }

    public List<BoardDto> findAll(){
        List<BoardDto> boardDtos = new ArrayList<>();
        for (Board board : boardRepository.findAll()) {
            boardDtos.add(BoardDto.builder()
                    .boardId(board.getBoardId())
                    .boardTitle(board.getBoardTitle())
                    .boardContent(board.getBoardContent())
                    .good(board.getGood())
                    .bad(board.getBad())
                    .pictureUrl(board.getPictureUrl())
                    .boardStatus(board.getBoardStatus())
                    .build());
        }
        return boardDtos;
    }

    public List<BoardDto> findByboardStatus(BoardStatus boardStatus){
        List<Board> boardList = boardRepository.findByBoardStatus(boardStatus);
        List<BoardDto> boardDtosList = new ArrayList<>();

        for (Board board : boardList) {
            boardDtosList.add(BoardDto.builder()
                    .boardId(board.getBoardId())
                    .boardTitle(board.getBoardTitle())
                    .boardContent(board.getBoardContent())
                    .good(board.getGood())
                    .bad(board.getBad())
                    .pictureUrl(board.getPictureUrl())
                    .boardStatus(board.getBoardStatus())
                    .build());
        }
        return boardDtosList;
    }

    public void updateBoard(BoardDto boardDto){
        Board board = boardRepository.findById(boardDto.getBoardId()).orElseThrow(EntityNotFoundException::new);
        board.updateBoard(boardDto);
    }

    public void createBoard(BoardDto boardDto){
        System.out.println("createBoard 실행됨");

        Board board = Board.builder()
                .boardTitle(boardDto.getBoardTitle())
                .boardContent(boardDto.getBoardContent())
                .pictureUrl(boardDto.getPictureUrl())
                .boardStatus(boardDto.getBoardStatus())
                .good(0)
                .bad(0)
                .build();
        boardRepository.save(board);

    }
}
