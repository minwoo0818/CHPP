package com.pairboardbackpj.dto;

import lombok.*;

@Getter@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDto {
    private String id;

    private String username;

    private String password;

    private String nickName;

    private Integer residentNumber;

    private Integer phoneNumber;

    private Integer level;

    private String role;
}
