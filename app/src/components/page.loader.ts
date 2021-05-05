export const togglePageLoader = (type: boolean): void => {
  const $loader = document.querySelector(".page-loader") as HTMLDivElement;

  if (type === true) {
    $loader.style.display = "block";
    $loader.style.zIndex = "1";
  } else {
    $loader.style.display = "none";
    $loader.style.zIndex = "-1";
  }
};

export default function createLoaderElement() {
  const $div = document.createElement("div");
  $div.className = "page-loader";
  document.body.appendChild($div);
}
