export type Board_Type = {
    boardId?: number;
    boardTitle: string;
    boardContent: string;
    good: number;
    bad: number;
    pictureUrl: string;
    boardStatus: BoardStatus;
}

export enum BoardStatus{
    GAME = "GAME", 
    SPORTS = "SPORTS", 
    MOVIE = "MOVIE", 
    CAR = "CAR",
    COMIC = "COMIC", 
    NOTICE = "NOTICE"
}