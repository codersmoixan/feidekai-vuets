import type { Ref } from "vue";

function generateStyleElement(
  css: string,
  eleName: string,
  className?: string,
  element?: Ref
): string | null {
  const styleEle = document.getElementById(eleName);
  const cssText = document.createTextNode(css);

  if (styleEle) {
    // styleEle.appendChild(cssText);

    return null;
  }

  const styleElement = document.createElement("style");
  styleElement.setAttribute("type", "text/css");
  styleElement.setAttribute("id", eleName);
  styleElement.appendChild(cssText);

  document.getElementsByTagName("head")[0].appendChild(styleElement);

  if (element?.value && className) {
    element.value.$el?.classList.add(className);
  }

  return eleName;
}

export default generateStyleElement;
