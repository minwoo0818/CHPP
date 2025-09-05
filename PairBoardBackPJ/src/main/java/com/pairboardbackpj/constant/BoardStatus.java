package com.pairboardbackpj.constant;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum BoardStatus {
    GAME, SPORTS, MOVIE, CAR, COMIC, NOTICE;

    @JsonCreator
    public static BoardStatus from(String value) {
        return BoardStatus.valueOf(value.toUpperCase());
    }
}
