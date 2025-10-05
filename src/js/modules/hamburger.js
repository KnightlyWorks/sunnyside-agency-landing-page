document.addEventListener(`DOMContentLoaded`, () => {
  const button = document.getElementById(`hambumberger-button`);
  const menu = document.getElementById(`hambumberger`);

  button.addEventListener(`click`, () => {
    menu.classList.toggle(`hidden!`);
  });
});
