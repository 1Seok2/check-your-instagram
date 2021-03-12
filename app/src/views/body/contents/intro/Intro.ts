/**
 * @author wonseog
 * @date 2021-03-09
 * @description id 입력하는 메인 화면
 *              조회 / 업데이트
 **/

import Title from "@src/components/title";
import '@src/assets/style/Intro.scss'

const Intro = (): string =>{
    return `<div class="intro">
        <label for="id-input">   
            ${Title('SEARCH INSTAGRAM').Large}
            <input 
                id="id-input" 
                type="text" 
                name="insta_id" 
                placeholder="INSTAGRAM ID"
            />
            <button id="search-button">SEARCH</button>
        </label>
    </div>`
}

export default Intro;