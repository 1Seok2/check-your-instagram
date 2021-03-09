/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 메인 app
 *                index.ts에서 pathname 받아
 *                컴포넌트 제작 후 반환
**/

import Header from "./views/header/Header";
import Body from "./views/body/Body";
import Footer from "./views/footer/Footer";

const App = (pathname : string) : string => {
    history.pushState('','', pathname);

    let contents : string = `
        <div>
            ${Header()}
            hello ${pathname}
            ${Body()}
            ${Footer()}
            <a href="/wonseog" id="nav-button" data-link>wonseok!!</a>
        </div>
    `;

    return contents;
}

export default App;