export type IBlock_Coords = [INDEX, INDEX];

export type INDEX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export type IGrid = [IRow, IRow, IRow, IRow, IRow, IRow, IRow, IRow, IRow];

export type N = 0 | NUMBERS;

export type NUMBERS = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type IRow = [N, N, N, N, N, N, N, N, N];

export type ISquare = [ISquare_Row, ISquare_Row, ISquare_Row];

export type ISquare_Row = [N, N, N];
