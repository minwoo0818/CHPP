package com.pairboardbackpj.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ReplyDto {

    private Integer ReplyId;

    private String ReplyContent;

    private Integer ReplyGood;

    private Integer ReplyBad;

    private Integer ReplyParentId;

    private Integer TotalCountReply;

    private Date regTime;
}
