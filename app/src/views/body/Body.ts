/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 페이지 내용
**/
import Home from "./contents/Home";
import '../../assets/style/Body.scss';

const Body = (pathname: string) : string => {
    let contentsContainer = '';

    switch (pathname){
        case 'compare':
            /* 팔로워, 팔로잉 비교*/
            break;
        case 'main':
            /* 아이디 조회 후 */
            break;
        default:
            contentsContainer = Home();
    }

    return `
        <div class="body">
            ${contentsContainer}
        </div>
    `;
}

export default Body;