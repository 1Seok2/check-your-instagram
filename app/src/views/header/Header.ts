/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 페이지 헤더
**/

import Title from "@src/components/title";
import '@src/assets/style/Header.scss'
import {getState} from "@src/store/state";

const Header = () : string => `
    <div class="header">
        ${Title(getState().insta_id || 'INSTAGRAM').Large}
    </div>
`;

export default Header;