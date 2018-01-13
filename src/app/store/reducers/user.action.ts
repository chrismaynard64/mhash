import { Action } from '@ngrx/store';
import { User } from "../../model/user";

export class  UserAction  {
    
    static  SET = 'USER_SET'; 
    static  USERS_SET = 'USERS_SET'; 
    static  RESET = 'RESET'; 
    }



    export class UserSetAction implements Action {
        type = UserAction.SET

        constructor(public payload: User) {
            
        }
    }

    
    export class UsersSetAction implements Action {
        type = UserAction.USERS_SET

        constructor(public payload: User[]) {
            
        }
    }