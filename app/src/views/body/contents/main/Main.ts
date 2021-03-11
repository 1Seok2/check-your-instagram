/**
 * @author : wonseog
 * @date : 2021/03/10
 * @description : 로그인 이후 첫 화면
 *                업데이트하기
 *                다른 메뉴 보기
**/
import {getState} from "@src/store/state";

const Main = () => {
    const state = getState();
    let followers : string = '';
    let following : string = '';
    state.followers?.forEach(id => {
        followers += `<div>${id}</div>`
    });
    state.following?.forEach(id => {
        following += `<div>${id}</div>`
    });

    return `
        <div class="main">
            <div id="profile">
                <img src="${state.src}" alt="${state.insta_id}-image"/>
                <span class="profile-id">${state.insta_id}</span>
            </div>
            <div id="list">
                <div id="followers">
                    ${followers}
                </div>
                <div id="following">
                    ${following}
                </div>
            </div>
        </div>
    `
}

export default Main