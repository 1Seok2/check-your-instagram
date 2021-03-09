/**
 * @author wonseog
 * @date 2021-03-09
 * @description id 입력하는 메인 화면
 *              조회 / 업데이트
 **/
import {state} from "../../../state/state";
import Title from "../../../components/title";

const Home = (): string =>{
    const onSubmit = (e : Event) => {
        e.preventDefault();
        alert('hi');
    }

    const literalTag = `<div class="home">
        <lable>   
            ${Title('인스타 조회하기').Large}
            <input id="id-input" type="text" name="insta_id" />
            <button id="update-button">조회</button>
        </lable>
    </div>`

    return literalTag;
}

export default Home;