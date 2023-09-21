export type TaticPositionName =
    | "LEFT_DEFENSIVE"
    | "CENTER_DEFENSIVE"
    | "RIGHT_DEFENSIVE"
    | "LEFT_DEFENSIVE_MIDFIELD"
    | "CENTER_DEFENSIVE_MIDFIELD"
    | "RIGHT_DEFENSIVE_MIDFIELD"
    | "LEFT_OFENSIVE_MIDFIELD"
    | "CENTER_OFENSIVE_MIDFIELD"
    | "RIGHT_OFENSIVE_MIDFIELD"
    | "LEFT_OFENSIVE"
    | "CENTER_OFENSIVE"
    | "RIGHT_OFENSIVE";

export type FieldZone = { start_col: number; end_col: number; start_row: number; end_row: number; id: TaticPositionName };

export type PlayerNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 8 | 9 | 10 | 11;

export type PlayerNumberWithoutGoalkeeper = Exclude<PlayerNumber, 1>;

export type InitialTaticPositions = { [key in PlayerNumber]: { col: number; row: number } };

export type TaticPositions = { [key in PlayerNumberWithoutGoalkeeper]: { col: number; row: number } };

export type AllTaticPositions = { [key in TaticPositionName]: TaticPositions };
