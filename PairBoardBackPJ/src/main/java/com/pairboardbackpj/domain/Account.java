package com.pairboardbackpj.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name="account")
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Account {

    @Id
    private String id;
    private String name;
    private String password;

    @Column(unique = true)
    private String nickname;

    @Column(unique = true)
    private Integer residentNumber;
    private Integer phoneNumber;
    private Integer level;

    @OneToMany
    private Board BoardId;
}
