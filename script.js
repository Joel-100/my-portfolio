// eslint-disable-next-line no-unused-vars
function clickToSwitch() {
  const switchD = document.getElementById('switch-display');
  if (switchD.style.display === 'block') {
    switchD.style.display = 'none';
  } else {
    switchD.style.display = 'block';
  }
}