/**
 * @author wonseog
 * @date 2021-03-09
 * @description state 관리
 *              주로 instaId, followers, following 관리
 **/

export interface StateType{
    insta_id? : string,
    followers? : Array<string>,
    following? : Array<string>
}

export const state: StateType ={
    insta_id : '',
    followers : [''],
    following : [''],
};

export const setState = (newState: StateType): StateType =>({
    ...state,
    ...newState
});