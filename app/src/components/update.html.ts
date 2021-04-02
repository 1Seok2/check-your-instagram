export const updateHtml = (
    type : string = 'literal',
    tag : string | HTMLElement = '<div></div>',
    target : string = 'app'
) => {
    const $target : null | HTMLElement = document.querySelector(target);

    $target && ($target.innerHTML = `${tag}`)
}