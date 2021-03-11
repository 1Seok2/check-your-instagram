/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 메인 app
 *                index.ts에서 pathname 받아
 *                컴포넌트 제작 후 반환
**/

import Header from "./views/header";
import Body from "./views/body";
import Footer from "./views/footer";
import './assets/style/App.scss';
import {getState} from "@src/store/state";

const App = (pathname : string) : string => {
    /* id 없을 시 id 입력으로 redirect */
    if(!getState().insta_id) pathname = '';

    history.pushState('','', pathname);

    return `
        <div class="container">
            ${pathname && Header()}
            ${Body(pathname)}
        </div>
        ${Footer()}
    `;
}

export default App;