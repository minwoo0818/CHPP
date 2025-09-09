package com.pairboardbackpj.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="reply")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reply {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer replyId;

    private String replyContent;

    private Integer replyGood;

    private Integer replyBad;

    private Integer replyParentId;

    private Integer totalCountReply;

//    private Date regTime;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Account_Id", unique = true)
    private User user;
}
