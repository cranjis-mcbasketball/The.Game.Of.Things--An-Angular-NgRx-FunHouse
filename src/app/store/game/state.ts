import { FragmentItem, PromptItem, PromptAndOptions, AppState } from "./models";

export default class GameState {
  roundNum: number;
  prompt: Array<PromptItem>;
  gameError: Error;
}

// export const initializeState = (): GameState => {
//   return { roundNum: 0, prompt: '<>', gameError: null };
// };

export const initializeState = (): GameState => {
  return { roundNum: 0, prompt: Array<PromptItem>(), gameError: null };
};