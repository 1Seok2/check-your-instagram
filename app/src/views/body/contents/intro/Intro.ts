/**
 * @author wonseog
 * @date 2021-03-09
 * @description id 입력하는 메인 화면
 *              조회 / 업데이트
 **/

import Title from "@src/components/title";

const Intro = (): string =>{
    return `<div class="home">
        <lable>   
            ${Title('인스타 조회하기').Large}
            <input id="id-input" type="text" name="insta_id" />
            <button id="search-button">조회</button>
        </lable>
    </div>`
}

export default Intro;