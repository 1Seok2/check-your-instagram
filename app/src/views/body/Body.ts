/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 페이지 내용
**/
import Home from "./contents/Home";

const Body = (pathname: string) : string => {
    let contentsContainer = '';

    switch (pathname){
        case 'compare':
            break;
        case 'main':
            break;
        default:
            contentsContainer = Home();
    }

    return `
        <div class="Body">
            ${contentsContainer}
        </div>
    `;
}

export default Body;