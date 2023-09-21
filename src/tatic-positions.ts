import { AllTaticPositions, FieldZone, InitialTaticPositions } from "./helpers/types";

export const FIELD_COLS = 16;
export const FIELD_ROWS = 12;

export const INITIAL_POSITIONS: InitialTaticPositions = {
    "1": { col: 0, row: 0 },
    "2": { col: 5, row: 10 },
    "3": { col: 3, row: 7 },
    "4": { col: 3, row: 4 },
    "5": { col: 5, row: 1 },
    "6": { col: 5, row: 8 },
    "7": { col: 5, row: 3 },
    "8": { col: 7, row: 10 },
    "9": { col: 6, row: 6 },
    "10": { col: 6, row: 5 },
    "11": { col: 7, row: 1 },
};

export const TACTIC_POSITIONS: AllTaticPositions = {
    LEFT_DEFENSIVE: { "2": { col: 0, row: 11 }, "3": { col: 0, row: 8 }, "4": { col: 1, row: 8 }, "5": { col: 3, row: 8 }, "6": { col: 2, row: 11 }, "7": { col: 2, row: 8 }, "8": { col: 1, row: 11 }, "9": { col: 3, row: 11 }, "10": { col: 3, row: 9 }, "11": { col: 0, row: 10 } },
    CENTER_DEFENSIVE: { "2": { col: 1, row: 7 }, "3": { col: 0, row: 7 }, "4": { col: 1, row: 4 }, "5": { col: 0, row: 4 }, "6": { col: 3, row: 7 }, "7": { col: 3, row: 4 }, "8": { col: 2, row: 7 }, "9": { col: 3, row: 5 }, "10": { col: 0, row: 6 }, "11": { col: 2, row: 4 } },
    RIGHT_DEFENSIVE: { "2": { col: 1, row: 3 }, "3": { col: 2, row: 3 }, "4": { col: 0, row: 0 }, "5": { col: 0, row: 2 }, "6": { col: 3, row: 3 }, "7": { col: 1, row: 0 }, "8": { col: 0, row: 3 }, "9": { col: 3, row: 0 }, "10": { col: 2, row: 0 }, "11": { col: 3, row: 1 } },
    LEFT_DEFENSIVE_MIDFIELD: { "2": { col: 4, row: 11 }, "3": { col: 4, row: 9 }, "4": { col: 4, row: 8 }, "5": { col: 6, row: 8 }, "6": { col: 5, row: 11 }, "7": { col: 5, row: 8 }, "8": { col: 7, row: 11 }, "9": { col: 6, row: 11 }, "10": { col: 7, row: 10 }, "11": { col: 7, row: 8 } },
    CENTER_DEFENSIVE_MIDFIELD: { "2": { col: 7, row: 5 }, "3": { col: 4, row: 7 }, "4": { col: 4, row: 6 }, "5": { col: 4, row: 4 }, "6": { col: 5, row: 7 }, "7": { col: 6, row: 4 }, "8": { col: 6, row: 7 }, "9": { col: 7, row: 7 }, "10": { col: 7, row: 4 }, "11": { col: 5, row: 4 } },
    RIGHT_DEFENSIVE_MIDFIELD: { "2": { col: 7, row: 3 }, "3": { col: 7, row: 2 }, "4": { col: 4, row: 1 }, "5": { col: 4, row: 0 }, "6": { col: 4, row: 3 }, "7": { col: 5, row: 0 }, "8": { col: 5, row: 3 }, "9": { col: 6, row: 3 }, "10": { col: 6, row: 0 }, "11": { col: 7, row: 0 } },
    LEFT_OFENSIVE_MIDFIELD: { "2": { col: 9, row: 11 }, "3": { col: 8, row: 11 }, "4": { col: 8, row: 9 }, "5": { col: 8, row: 8 }, "6": { col: 10, row: 11 }, "7": { col: 9, row: 8 }, "8": { col: 11, row: 11 }, "9": { col: 11, row: 10 }, "10": { col: 10, row: 8 }, "11": { col: 11, row: 8 } },
    CENTER_OFENSIVE_MIDFIELD: { "2": { col: 8, row: 7 }, "3": { col: 8, row: 5 }, "4": { col: 8, row: 4 }, "5": { col: 9, row: 4 }, "6": { col: 9, row: 7 }, "7": { col: 10, row: 4 }, "8": { col: 10, row: 7 }, "9": { col: 11, row: 7 }, "10": { col: 11, row: 6 }, "11": { col: 11, row: 4 } },
    RIGHT_OFENSIVE_MIDFIELD: { "2": { col: 9, row: 0 }, "3": { col: 8, row: 1 }, "4": { col: 11, row: 2 }, "5": { col: 8, row: 0 }, "6": { col: 9, row: 3 }, "7": { col: 8, row: 3 }, "8": { col: 11, row: 3 }, "9": { col: 10, row: 3 }, "10": { col: 10, row: 0 }, "11": { col: 11, row: 0 } },
    LEFT_OFENSIVE: { "2": { col: 13, row: 11 }, "3": { col: 12, row: 11 }, "4": { col: 12, row: 8 }, "5": { col: 15, row: 8 }, "6": { col: 14, row: 11 }, "7": { col: 14, row: 8 }, "8": { col: 15, row: 11 }, "9": { col: 12, row: 10 }, "10": { col: 13, row: 8 }, "11": { col: 15, row: 9 } },
    CENTER_OFENSIVE: { "2": { col: 12, row: 7 }, "3": { col: 12, row: 6 }, "4": { col: 12, row: 4 }, "5": { col: 13, row: 4 }, "6": { col: 13, row: 7 }, "7": { col: 14, row: 4 }, "8": { col: 14, row: 7 }, "9": { col: 15, row: 7 }, "10": { col: 15, row: 5 }, "11": { col: 15, row: 4 } },
    RIGHT_OFENSIVE: { "2": { col: 12, row: 3 }, "3": { col: 12, row: 1 }, "4": { col: 12, row: 0 }, "5": { col: 13, row: 0 }, "6": { col: 13, row: 3 }, "7": { col: 14, row: 0 }, "8": { col: 15, row: 0 }, "9": { col: 14, row: 3 }, "10": { col: 15, row: 2 }, "11": { col: 15, row: 3 } },
};

export const ZONES: FieldZone[] = [
    { start_col: 0, end_col: 3, start_row: 8, end_row: 11, id: "LEFT_DEFENSIVE" },
    { start_col: 0, end_col: 3, start_row: 4, end_row: 7, id: "CENTER_DEFENSIVE" },
    { start_col: 0, end_col: 3, start_row: 0, end_row: 3, id: "RIGHT_DEFENSIVE" },
    { start_col: 4, end_col: 7, start_row: 8, end_row: 11, id: "LEFT_DEFENSIVE_MIDFIELD" },
    { start_col: 4, end_col: 7, start_row: 4, end_row: 7, id: "CENTER_DEFENSIVE_MIDFIELD" },
    { start_col: 4, end_col: 7, start_row: 0, end_row: 3, id: "RIGHT_DEFENSIVE_MIDFIELD" },
    { start_col: 8, end_col: 11, start_row: 8, end_row: 11, id: "LEFT_OFENSIVE_MIDFIELD" },
    { start_col: 8, end_col: 11, start_row: 4, end_row: 7, id: "CENTER_OFENSIVE_MIDFIELD" },
    { start_col: 8, end_col: 11, start_row: 0, end_row: 3, id: "RIGHT_OFENSIVE_MIDFIELD" },
    { start_col: 12, end_col: 15, start_row: 8, end_row: 11, id: "LEFT_OFENSIVE" },
    { start_col: 12, end_col: 15, start_row: 4, end_row: 7, id: "CENTER_OFENSIVE" },
    { start_col: 12, end_col: 15, start_row: 0, end_row: 3, id: "RIGHT_OFENSIVE" },
];
