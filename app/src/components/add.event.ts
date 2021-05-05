/**
 * @author : wonseog
 * @date : 2021/03/10
 * @description : 버튼 이벤트, Route 이벤트 등록 모음
 **/

export default function addEventWithElementByType(
  element: HTMLElement,
  eventType: string,
  handler: (e: Event) => void
) {
  element.addEventListener(eventType, handler);
}
