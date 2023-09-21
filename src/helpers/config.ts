class Config {
    private try_catch_the_ball_all = false;
    private move_in_ball_direction_all = false;
    private move_to_expected_position_all = false;
    private try_catch_the_ball = [];
    private move_in_ball_direction = [];
    private move_to_expected_position = [];

    constructor() {
        if (process.env.TRY_CATCH_BALL === "all") this.try_catch_the_ball_all = true;
        if (process.env.MOVE_IN_BALL_DIRECTION === "all") this.move_in_ball_direction_all = true;
        if (process.env.MOVE_TO_EXPECTED_POSITION === "all") this.move_to_expected_position_all = true;

        if (process.env.TRY_CATCH_BALL != "none" && process.env.TRY_CATCH_BALL != "all") this.try_catch_the_ball = process.env.TRY_CATCH_BALL.split(",").map((n) => parseInt(n));
        if (process.env.MOVE_IN_BALL_DIRECTION != "none" && process.env.MOVE_IN_BALL_DIRECTION != "all") this.move_in_ball_direction = process.env.MOVE_IN_BALL_DIRECTION.split(",").map((n) => parseInt(n));
        if (process.env.MOVE_TO_EXPECTED_POSITION != "none" && process.env.MOVE_TO_EXPECTED_POSITION != "all") this.move_to_expected_position = process.env.MOVE_TO_EXPECTED_POSITION.split(",").map((n) => parseInt(n));

        console.log(`
            ##########################################
            try_catch_the_ball_all = ${this.try_catch_the_ball_all},
            move_in_ball_direction_all = ${this.move_in_ball_direction_all},
            move_to_expected_position_all = ${this.move_to_expected_position_all},
            try_catch_the_ball = ${this.try_catch_the_ball},
            move_in_ball_direction = ${this.move_in_ball_direction},
            move_to_expected_position = ${this.move_to_expected_position},
            ##########################################
            TRY_CATCH_BALL = ${process.env.TRY_CATCH_BALL},
            MOVE_IN_BALL_DIRECTION = ${process.env.MOVE_IN_BALL_DIRECTION},
            MOVE_TO_EXPECTED_POSITION = ${process.env.MOVE_TO_EXPECTED_POSITION},
            ##########################################
        `);
    }

    shouldCatchTheBall(playerNumber: number): boolean {
        return this.try_catch_the_ball_all || this.try_catch_the_ball.includes(playerNumber);
    }

    shouldRunInBallDirection(playerNumber: number): boolean {
        return this.move_in_ball_direction_all || this.move_in_ball_direction.includes(playerNumber);
    }

    shouldRunToMyExpectedPosition(playerNumber: number): boolean {
        return this.move_to_expected_position_all || this.move_to_expected_position.includes(playerNumber);
    }
}

const config = new Config();
export default config;
