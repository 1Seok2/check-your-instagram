export const togglePageLoader = (type: boolean): void => {
  const $loader: HTMLDivElement | null = document.querySelector(".page-loader");
  if ($loader) {
    if (type) {
      $loader.style.display = "block";
      $loader.style.zIndex = "1";
    } else {
      $loader.style.display = "none";
      $loader.style.zIndex = "-1";
    }
  }
};

export default function createLoaderElement() {
  const $div = document.createElement("div");
  $div.className = "page-loader";
  document.body.appendChild($div);
}
