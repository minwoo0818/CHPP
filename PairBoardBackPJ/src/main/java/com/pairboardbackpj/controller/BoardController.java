package com.pairboardbackpj.controller;

import com.pairboardbackpj.dto.BoardDto;
import com.pairboardbackpj.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class BoardController {

    private final BoardService BoardService;

    @GetMapping("/boards/{BoardId}")
    public BoardDto getBoards(@PathVariable Integer BoardId) {
        return BoardService.findBoardId(BoardId);
    }

}
