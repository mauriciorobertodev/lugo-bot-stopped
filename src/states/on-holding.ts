import { GameSnapshotReader, Lugo, Mapper } from "@lugobots/lugo4node";
import config from "../helpers/config";
import { getMyExpectedPositionInTheField } from "../helpers/field";

/**
 * onHolding é chamado quando este bot tem a posse de bola
 */
export default function onHolding(me: Lugo.Player, game: GameSnapshotReader, mapper: Mapper, orderSet: Lugo.OrderSet): Lugo.OrderSet {
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
