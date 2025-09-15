export type Board_Type = {
    boardId?: number;
    boardTitle: string;
    boardContent: string;
    good: number;
    bad: number;
    pictureUrl: string;
    boardStatus: BoardStatus;
}


export const BoardStatus = {
  GAME: "GAME",
  SPORTS: "SPORTS",
  MOVIE: "MOVIE",
  CAR: "CAR",
  COMIC: "COMIC",
  NOTICE: "NOTICE"
} as const;

export type BoardStatus = typeof BoardStatus[keyof typeof BoardStatus];
