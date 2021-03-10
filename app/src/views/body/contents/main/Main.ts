/**
 * @author : wonseog
 * @date : 2021/03/10
 * @description : 로그인 이후 첫 화면
 *                업데이트하기
 *                다른 메뉴 보기
**/
import state from "@src/store";
import {getState} from "@src/store/state";

const Main = () => {
    let contents = `<div>${state.insta_id}</div>`

    contents += getState().followers?.map(id => `<div>followers ${id}</div>`)

    contents += getState().following?.map(id => `<div>following ${id}</div>`)

    return `
        <div class="main">
            its main
            ${contents}
        </div>
    `
}

export default Main