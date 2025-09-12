package com.pairboardbackpj.dto;

import lombok.*;

import java.time.LocalDateTime;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReplyDto {

    private Long replyId;

    private String replyContent;

    private Integer replyGood;

    private Integer replyBad;

    private Integer replyParentId;

    private Integer boardId;

    private String Id;

    private Integer totalCountReply;

    private LocalDateTime regTime;
}
