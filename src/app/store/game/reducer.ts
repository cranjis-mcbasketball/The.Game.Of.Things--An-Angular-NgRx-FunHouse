import { Action, createReducer, on } from "@ngrx/store";
import { HttpClient } from "@angular/common/http";
import * as GameActions from "./actions";
import { PromptItem } from "./models";

// import * as Services from './fragments.actions'

import GameState, { initializeState } from "./state";

const initialState = initializeState();

const reducer = createReducer(
  initialState,
  on(GameActions.newRoundAction, (state) => state),

  on(GameActions.SuccessnewPromptAction, (state: GameState, { payload }) => {
    return { ...state, prompt: payload, gameError: null };
  }),

  on(GameActions.NewGameAction, (state: GameState) => {
    return { ...state, roundNum: 1 };
  }),

  on(GameActions.NewRoundAction, (state) => {
    console.log("NewRoundAction state", state);
    return { ...state };
  }),

  on(GameActions.ErrorGameAction, (state: GameState, error: Error) => {
    // remove below line and use different telemetry logging
    console.error(error);
    return { ...state, gameError: error };
  }),
);

export function GameReducer(
  state: GameState | undefined,
  action: Action,
): GameState {
  return reducer(state, action);
}
