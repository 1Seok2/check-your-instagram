/**
 * @author : wonseog
 * @date : 2021/03/10
 * @description : 로그인 이후 첫 화면
 *                업데이트하기
 *                다른 메뉴 보기
 **/
import { getState } from "@src/store/state";
import { formatNumber } from "@src/components/format.number";
import "@src/assets/style/Main.scss";

const Main = () => {
  const state = getState();
  let followers: string = "";
  let following: string = "";

  state.followers?.sort().forEach((id, idx) => {
    followers += `<div class="item item-${idx % 2}">${id}</div>`;
  });

  state.following?.sort().forEach((id, idx) => {
    following += `<div class="item item-${idx % 2}">${id}</div>`;
  });

  const followers_num = formatNumber(state.followers?.length || 0);
  const followings_num = formatNumber(state.following?.length || 0);

  return `
        <div class="main">
            <div class="profile">
                <img src="${state.src}" alt="${state.insta_id}-image"/>
            </div>
            <div class="list">
                <div class="followers">
                    <h2 class="title">FOLLOWERS (${followers_num})</h2>
                    <div>${followers}</div>
                </div>
                <div class="following">
                    <h2 class="title">FOLLOWINGS (${followings_num})</h2>
                    <div>${following}</div>
                </div> 
            </div>
        </div>
    `;
};

export default Main;
