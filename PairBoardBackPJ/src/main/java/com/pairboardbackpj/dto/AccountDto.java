package com.pairboardbackpj.dto;

import lombok.*;

@Getter@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountDto {
    private String id;

    private String name;

    private String password;

    private String nickName;

    private Integer residentNumber;

    private Integer phoneNumber;

    private Integer level;
}
