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
import './assets/style/PageTransition.scss';

const App = (pathname : string) : string => {
    history.pushState('','', pathname);

    return `
        <div class="container">
            ${Header()}
            ${Body(pathname)}
            ${Footer()}
        </div>
    `;
}

export default App;