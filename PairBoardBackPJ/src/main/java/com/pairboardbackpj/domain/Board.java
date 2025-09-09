package com.pairboardbackpj.domain;

import com.pairboardbackpj.constant.BoardStatus;
import com.pairboardbackpj.dto.BoardDto;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="board")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer boardId;

    private String boardTitle;

    private String boardContent;

    private Integer good;

    private Integer bad;

    private String pictureUrl;

    @Enumerated(EnumType.STRING)
    private BoardStatus boardStatus;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Account_Id", unique = true)
    private User user;

    public void updateBoard(BoardDto boardDto){
        this.boardTitle = boardDto.getBoardTitle();
        this.boardContent = boardDto.getBoardContent();
        this.good = boardDto.getGood();
        this.bad = boardDto.getBad();
        this.pictureUrl = boardDto.getPictureUrl();
        this.boardStatus = boardDto.getBoardStatus();
    }
}
