package com.pairboardbackpj.domain;

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
    private Integer BoardId;

    private String BoardTitle;

    private String BoardContent;

    private Integer Good;

    private Integer Bad;

    private String PictureUrl;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Account_Id", unique = true)
    private Account account;

}
