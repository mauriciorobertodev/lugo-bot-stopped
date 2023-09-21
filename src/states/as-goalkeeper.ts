import { GameSnapshotReader, Lugo, Mapper, PLAYER_STATE } from "@lugobots/lugo4node";
import config from "../helpers/config";
import { getMyExpectedPositionInTheField } from "../helpers/field";

/**
 * asGoleiro só é chamado quando esse bot é o goleiro (número 1). Este método é chamado a cada turno.
 */
export default function asGoalkeeper(me: Lugo.Player, game: GameSnapshotReader, mapper: Mapper, orderSet: Lugo.OrderSet, state: PLAYER_STATE): Lugo.OrderSet {
    const orders: Lugo.Order[] = [];

    if (config.shouldRunInBallDirection(me.getNumber())) {
        orders.push(game.makeOrderMoveMaxSpeed(me.getPosition(), game.getBall().getPosition()));
    }

    if (config.shouldRunToMyExpectedPosition(me.getNumber())) {
        orders.push(game.makeOrderMoveMaxSpeed(me.getPosition(), getMyExpectedPositionInTheField(game.getBall(), me.getNumber(), mapper)));
    }

    if (config.shouldCatchTheBall(me.getNumber())) {
        orders.push(game.makeOrderCatch());
    }

    return orderSet.setOrdersList(orders);
}
