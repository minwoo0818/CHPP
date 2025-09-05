package com.pairboardbackpj.service;

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

    public BoardDto findBoardById(Integer boardId){
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
}
