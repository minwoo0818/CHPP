package com.pairboardbackpj.controller;

import com.pairboardbackpj.dto.BoardDto;
import com.pairboardbackpj.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
//@CrossOrigin(origins = "http://localhost:5173")
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/boards/{boardId}")
    public BoardDto getBoards(@PathVariable Integer BoardId) {
        return boardService.findBoardById(BoardId);
    }

    @GetMapping("/category")
    public List<BoardDto> getBoards() {
        return boardService.findAll();
    }

}
