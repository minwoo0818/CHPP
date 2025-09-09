package com.pairboardbackpj.controller;

import com.pairboardbackpj.constant.BoardStatus;
import com.pairboardbackpj.dto.BoardDto;
import com.pairboardbackpj.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/boards/{boardId}")
    public BoardDto getBoards(@PathVariable Integer BoardId) {
        return boardService.findByBoardId(BoardId);
    }

    @GetMapping("/category/all")
    public List<BoardDto> getBoards() {
        return boardService.findAll();
    }

    @GetMapping("/category/{boardStatus}")
    public List<BoardDto> getBoardsByStatus(@PathVariable String boardStatus) {
        BoardStatus status = BoardStatus.valueOf(boardStatus.toUpperCase());
        return boardService.findByboardStatus(status);
    }

    @PutMapping("/category")
    public void updateBoard(@RequestBody BoardDto boardDto) {
        boardService.updateBoard(boardDto);
    }
}
