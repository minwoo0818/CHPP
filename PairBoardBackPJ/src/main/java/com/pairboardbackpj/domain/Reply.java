package com.pairboardbackpj.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Date;
@Entity
@Table(name="reply")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reply {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer ReplyId;

    private String ReplyContent;

    private Integer ReplyGood;

    private Integer ReplyBad;

    private Integer ReplyParentId;

    private Integer TotalCountReply;

    private Date regTime;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Account_Id", unique = true)
    private Account account;
}
