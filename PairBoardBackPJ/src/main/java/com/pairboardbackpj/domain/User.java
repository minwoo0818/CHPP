package com.pairboardbackpj.domain;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="account")
@Getter @Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @Column(name = "Account_Id")
    private String id;

    private String username;
    private String password;

    private String nickname;

    @Column(unique = true)
    private Integer residentNumber;
    private Integer phoneNumber;
    private Integer level;

    private String role;
}
