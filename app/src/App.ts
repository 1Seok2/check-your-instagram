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
    let contents : string = `
        <div>
            ${Header()}
            hello ${pathname}
            ${Body()}
            ${Footer()}
        </div>
    `;

    return contents;
}

export default App;