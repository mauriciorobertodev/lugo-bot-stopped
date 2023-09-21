import { GameSnapshotReader, PLAYER_STATE, Lugo, Bot, Mapper } from "@lugobots/lugo4node";
import onDisputing from "./states/on-disputing";
import onDefending from "./states/on-defending";
import onHolding from "./states/on-holding";
import onSupporting from "./states/on-supporting";
import asGoalkeeper from "./states/as-goalkeeper";

export class MyBot implements Bot {
    side: Lugo.Team.Side;
    number: number;
    initPosition: Lugo.Point;
    mapper: Mapper;

    constructor(side: Lugo.Team.Side, number: number, initPosition: Lugo.Point, mapper: Mapper) {
        this.side = side;
        this.number = number;
        this.mapper = mapper;
        this.initPosition = initPosition;
    }

    /**
     * onDisputing é chamado quando ninguém tem a posse de bola
     */
    onDisputing(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return onDisputing(me, reader, this.mapper, orderSet);
        } catch (e) {
            console.log(`não jogou neste turno`, e);
        }
    }

    /**
     * onDefending é chamado quando um jogador adversário tem a posse de bola
     */
    onDefending(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return onDefending(me, reader, this.mapper, orderSet);
        } catch (e) {
            console.log(`não jogou neste turno`, e);
        }
    }

    /**
     * onHolding é chamado quando este bot tem a posse de bola
     */
    onHolding(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return onHolding(me, reader, this.mapper, orderSet);
        } catch (e) {
            console.log(`não jogou neste turno`, e);
        }
    }

    /**
     * onSupporting é chamado quando um jogador companheiro de equipe tem a posse de bola
     */
    onSupporting(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return onSupporting(me, reader, this.mapper, orderSet);
        } catch (e) {
            console.log(`não jogou neste turno`, e);
        }
    }

    /**
     * asGoalkeeper só é chamado quando esse bot é o goleiro (número 1). Este método é chamado a cada turno.
     */
    asGoalkeeper(orderSet: Lugo.OrderSet, snapshot: Lugo.GameSnapshot, state: PLAYER_STATE): Lugo.OrderSet {
        try {
            const { reader, me } = this.makeReader(snapshot);
            return asGoalkeeper(me, reader, this.mapper, orderSet, state);
        } catch (e) {
            console.log(`não jogou neste turno`, e);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    gettingReady(): void {
        /**
         * Este método é chamado quando a pontuação é alterada ou antes do início do jogo.
         * Podemos mudar a estratégia da equipe ou fazer qualquer outra coisa com base no resultado do jogo até agora.
         * por enquanto, não vamos fazer nada aqui.
         */
    }

    /**
     * Este método cria o reader e pega meu bot atual
     * Por exemplo. Jogadores, a bola, etc.
     */
    private makeReader(snapshot: Lugo.GameSnapshot): { reader: GameSnapshotReader; me: Lugo.Player } {
        const reader = new GameSnapshotReader(snapshot, this.side);
        const me = reader.getPlayer(this.side, this.number);
        if (!me) throw new Error("não me encontrei no jogo");
        return { reader, me };
    }
}
