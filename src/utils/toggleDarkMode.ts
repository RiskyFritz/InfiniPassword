//write export default function that toggles the dark mode class on the body tag
export default function toggleDarkMode(darkMode: boolean): void {
  const body = document.querySelector("body");
  if (darkMode) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }