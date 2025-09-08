package com.pairboardbackpj.dto;

import com.pairboardbackpj.constant.BoardStatus;
import lombok.*;

import java.time.LocalDateTime;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardDto {

    private Integer boardId;

    private String boardTitle;

    private String boardContent;

    private Integer good;

    private Integer bad;

    private String pictureUrl;

    private BoardStatus boardStatus;

//    private LocalDateTime regTime;
}
