package com.pairboardbackpj.dto;

import lombok.*;

@Getter@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AccountDto {
    private String Id;

    private String Name;

    private String Password;

    private String NickName;

    private Integer ResidentNumber;

    private Integer PhoneNumber;

    private Integer Level;
}
