package com.pairboardbackpj.dto;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class BoardDto {

    private Integer BoardId;

    private String BoardTitle;

    private String BoardContent;

    private Integer Good;

    private Integer Bad;

    private String PictureUrl;

//    private Date regTime;
}
