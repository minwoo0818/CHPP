package com.pairboardbackpj.domain.repository;

import com.pairboardbackpj.domain.Board;
import org.springframework.data.repository.CrudRepository;

public interface BoardRepository extends CrudRepository<Board,Integer> {
}
