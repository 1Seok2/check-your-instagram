/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 페이지 헤더
**/

import Title from "../../components/title";
import '../../assets/style/Header.scss'

const Header = () : string => `
    <div class="header">
        ${Title('im title').Large}
    </div>
`;

export default Header;