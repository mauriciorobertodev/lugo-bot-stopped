import { Lugo, Mapper, Region } from "@lugobots/lugo4node";
import { Ball } from "@lugobots/lugo4node/dist/proto_exported";
import { FIELD_COLS, FIELD_ROWS, TACTIC_POSITIONS, ZONES } from "../tatic-positions";
import { FieldZone, PlayerNumberWithoutGoalkeeper } from "./types";

// Retorna a posição esperada do jogador na zona de campo atual onde a bola está
export function getMyExpectedPositionInTheField(ball: Ball, myNumber: number, mapper: Mapper): Lugo.Point {
    const fieldZone = getFieldZoneFromPoint(ball.getPosition(), mapper);
    const playerPositionInZone = TACTIC_POSITIONS[fieldZone.id][myNumber as PlayerNumberWithoutGoalkeeper];
    const expectedRegion = mapper.getRegion(playerPositionInZone.col, playerPositionInZone.row);

    return expectedRegion.getCenter();
}

// Retorna a zona de campo a qual esse ponto espeficico faz parte
export function getFieldZoneFromPoint(point: Lugo.Point, mapper: Mapper): FieldZone {
    return getFieldZoneByRegion(mapper.getRegionFromPoint(point));
}

// Retorna a zona do campo que essa região faz parte
export function getFieldZoneByRegion(region: Region): FieldZone {
    return getFieldZoneByColAndRow(region.getCol(), region.getRow());
}

// Retorna a zone de campo que contém a coluna e linha passada na função
export function getFieldZoneByColAndRow(col: number, row: number): FieldZone {
    col = col < 0 ? 0 : col > FIELD_COLS ? FIELD_COLS : col;
    row = row < 0 ? 0 : row > FIELD_ROWS ? FIELD_ROWS : row;
    const zone = ZONES.find((zone) => col >= zone.start_col && col <= zone.end_col && row >= zone.start_row && row <= zone.end_row);

    // No meu caso eu uso as zonas de campo para cobrir todo o campo de futebol, ou seja sempre que tiver um ponto onde não há uma zona de campo eu quero saber.
    // Você pode retornar undefined ou null nessa função porem terá que alterar todas as outras e fazer uma checagem ao buscar a posição esperada
    if (!zone) throw new Error("Não existe nenhuma zona para esse ponto.");

    return zone;
}
