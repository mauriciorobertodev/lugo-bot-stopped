import { MyBot } from "./my_bot";
import { EnvVarLoader, Mapper, NewClientFromConfig } from "@lugobots/lugo4node";
import { FIELD_COLS, FIELD_ROWS, INITIAL_POSITIONS } from "./tatic-positions";
import { PlayerNumber } from "./helpers/types";

// we must load the env vars following the standard defined by the game specs because all bots will receive the
// arguments in the same format (env vars)
const config = new EnvVarLoader();

// the map will help us to see the field in quadrants (called regions) instead of working with coordinates
const mapper = new Mapper(FIELD_COLS, FIELD_ROWS, config.getBotTeamSide());

// our bot strategy defines our bot initial position based on its number
const initialRegion = mapper.getRegion(INITIAL_POSITIONS[config.getBotNumber() as PlayerNumber].col, INITIAL_POSITIONS[config.getBotNumber() as PlayerNumber].row);

// We will use a shortcut to create the client from the config, but we could use the
// client constructor as well
const lugoClient = NewClientFromConfig(config, initialRegion.getCenter());

// This instantiates our bot using the environment variables to define its team and position.
const myBot = new MyBot(config.getBotTeamSide(), config.getBotNumber(), initialRegion.getCenter(), mapper);

lugoClient
    .playAsBot(myBot)
    .then(() => console.log(`Fim de jogo!`))
    .catch((e) => console.error(e));
