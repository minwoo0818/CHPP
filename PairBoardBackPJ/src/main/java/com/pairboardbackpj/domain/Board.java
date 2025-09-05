package com.pairboardbackpj.domain;

import com.pairboardbackpj.constant.BoardStatus;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
    private Account account;

}
