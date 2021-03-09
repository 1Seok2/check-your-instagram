/**
 * @author : wonseog
 * @date : 2021/03/08
 * @description : 타이틀 대 / 중 / 소 반환
**/

const titleTemplate = (type : string, title : string) => `
    <div class="${type}-title">
        ${title}
    </div>
`

const Title = (title : string) => ({
    Large : titleTemplate('large', title),
    Medium : titleTemplate('medium', title),
    Small : titleTemplate('small', title)
})

export default Title;