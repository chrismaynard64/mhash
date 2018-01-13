import { ActionReducer, Action } from '@ngrx/store';

import { TestAction } from "./test.action";
import { User, UserDefault } from "../../model/user";
import { UserAction, UserSetAction, UsersSetAction } from "./user.action";




export function userReducer(state: User = UserDefault, action: Action)  {
    switch (action.type) {
        case UserAction.SET:
        return Object.assign({}, (<UserSetAction>action).payload);

        case UserAction.USERS_SET:
        return Object.assign({}, (<UsersSetAction>action).payload);
  
        case TestAction.RESET:
            return Object.assign({}, UserDefault);

        default:
            return  state;              
    }

}



export function usersReducer(state: User[], action: Action)  {
    switch (action.type) {
  
        case UserAction.USERS_SET:
            return (<UsersSetAction>action).payload;
  
        default:
            return  state;              
    }

}