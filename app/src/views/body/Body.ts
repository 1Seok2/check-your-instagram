/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 페이지 내용
**/

import Intro from "./contents/intro";
import Main from "./contents/main";
import Compare from "./contents/compare";
import '@src/assets/style/Body.scss';

const Body = (pathname: string) : string => {
    let contentsContainer = '';

    switch (pathname){
        case 'compare':
            /* 팔로워, 팔로잉 비교*/
            contentsContainer = Compare();
            break;
        case 'main':
            /* 아이디 조회 후 */
            contentsContainer = Main();
            break;
        default:
            contentsContainer = Intro();
    }

    return `
        <div class="body">
            ${contentsContainer}
        </div>
    `;
}

export default Body;