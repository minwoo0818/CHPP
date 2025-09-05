package com.pairboardbackpj.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReplyDto {

    private Integer replyId;

    private String replyContent;

    private Integer replyGood;

    private Integer replyBad;

    private Integer replyParentId;

    private Integer totalCountReply;

//    private Date regTime;
}
