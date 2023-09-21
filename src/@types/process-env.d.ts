export {};

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            TRY_CATCH_BALL?: string;
            MOVE_IN_BALL_DIRECTION?: string;
            MOVE_TO_EXPECTED_POSITION?: string;
        }
    }
}
