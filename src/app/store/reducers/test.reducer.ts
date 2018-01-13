import { ActionReducer, Action } from '@ngrx/store';

import { TestAction } from "./test.action";

export function testReducer(state: number = 0, action: Action)  {
    switch (action.type) {
        case TestAction.INCREMENT:
            return state + 1;

        case TestAction.DECREMENT:
            return state - 1;

        case TestAction.RESET:
            return 0;

        default:
            return state;              
    }

}