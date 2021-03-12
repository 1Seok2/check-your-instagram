/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 페이지 푸터
**/

import '@src/assets/style/Footer.scss'

const Footer = () : string => {

    return `
        <div class="footer">
            <div>
                <a href="mailto:goesnow831@gmail.com">WON SEOG</a> 
                &nbsp; | &nbsp; 
                <a href="https://github.com/1seok2">GITHUB</a>
                &nbsp; | &nbsp; 
                <a href="https://goeslog.github.io">BLOG</a>
            </div>
            <div>
                © 2021 goesnow, All rights reserved 
            </div>
        </div>
    `;
}

export default Footer;