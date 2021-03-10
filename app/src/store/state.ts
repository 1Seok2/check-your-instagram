/**
 * @author wonseog
 * @date 2021-03-09
 * @description store 관리
 *              주로 instaId, followers, following 관리
 **/

export interface StateType{
    insta_id? : string,
    followers? : Array<string>,
    following? : Array<string>
}

const initialState = {
    insta_id : '',
    followers : [''],
    following : [''],
};

const state: StateType = initialState;

export const setState = (newState: StateType): StateType =>({
    ...state,
    ...newState
});

export default state;
