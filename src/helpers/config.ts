class Config {
    private try_catch_the_ball_all = false;
    private move_in_ball_direction_all = false;
    private move_to_expected_position_all = false;
    private try_catch_the_ball = [];
    private move_in_ball_direction = [];
    private move_to_expected_position = [];

    constructor() {
        const tryCatchBall = process.env.TRY_CATCH_BALL;
        const moveInBallDirection = process.env.MOVE_IN_BALL_DIRECTION;
        const moveToExpectedPosition = process.env.MOVE_TO_EXPECTED_POSITION;

        if (tryCatchBall) {
            if (tryCatchBall === "all") this.try_catch_the_ball_all = true;
            if (tryCatchBall != "none" && tryCatchBall != "all") this.try_catch_the_ball = tryCatchBall.split(",").map((n) => parseInt(n));
        }

        if (moveInBallDirection) {
            if (moveInBallDirection === "all") this.move_in_ball_direction_all = true;
            if (moveInBallDirection != "none" && moveInBallDirection != "all") this.move_in_ball_direction = moveInBallDirection.split(",").map((n) => parseInt(n));
        }

        if (moveToExpectedPosition) {
            if (moveToExpectedPosition === "all") this.move_to_expected_position_all = true;
            if (moveToExpectedPosition != "none" && moveToExpectedPosition != "all") this.move_to_expected_position = moveToExpectedPosition.split(",").map((n) => parseInt(n));
        }
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
