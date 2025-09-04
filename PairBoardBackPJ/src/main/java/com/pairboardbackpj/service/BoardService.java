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

    public BoardDto findBoardId(Integer BoardId){
        Board board = boardRepository.findById(BoardId).orElseThrow(EntityNotFoundException::new);

        return BoardDto.builder()
                .BoardId(board.getBoardId())
                .BoardTitle(board.getBoardTitle())
                .BoardContent(board.getBoardContent())
                .Good(board.getGood())
                .Bad(board.getBad())
                .PictureUrl(board.getPictureUrl())
                .build();
    }

    public List<BoardDto> findAll(){
        List<BoardDto> boardDtos = new ArrayList<>();
        for (Board board : boardRepository.findAll()) {
            boardDtos.add(BoardDto.builder()
                    .BoardId(board.getBoardId())
                    .BoardTitle(board.getBoardTitle())
                    .BoardContent(board.getBoardContent())
                    .Good(board.getGood())
                    .Bad(board.getBad())
                    .PictureUrl(board.getPictureUrl())
                    .build());
        }
        return boardDtos;
    }
}
