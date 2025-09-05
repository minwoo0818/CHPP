package com.pairboardbackpj.domain.repository;

import com.pairboardbackpj.constant.BoardStatus;
import com.pairboardbackpj.domain.Board;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface BoardRepository extends CrudRepository<Board,Integer> {
    List<Board> findByBoardStatus(BoardStatus boardStatus);
}
