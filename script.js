let count = 0;
function increase() {
  count++;
  document.getElementById('count').innerText = count;
}
function decrease() {
  count--;
  document.getElementById('count').innerText = count;
}
function change_bg() {
  document.body.style.backgroundColor =
    document.body.style.backgroundColor === 'lightblue' ? '#9cc6f1' : 'lightblue';
}

let subscribed = false;
let darkMode = false;

const subscribeBtn = document.createElement('button');
subscribeBtn.textContent = 'Subscribe';
subscribeBtn.style.backgroundColor = '#00224d';
subscribeBtn.style.color = 'white';
subscribeBtn.style.margin = '10px';
subscribeBtn.style.padding = '8px 12px';
subscribeBtn.style.border = 'none';
subscribeBtn.style.borderRadius = '6px';
subscribeBtn.style.cursor = 'pointer';
document.body.appendChild(subscribeBtn);

subscribeBtn.onclick = () => {
  subscribed = !subscribed;
  subscribeBtn.textContent = subscribed ? 'Unsubscribe' : 'Subscribe';
  subscribeBtn.style.backgroundColor = subscribed ? 'red' : '#00224d';
  alert(subscribed ? 'Thank you for subscribing!' : 'You have unsubscribed.');
};


const modeBtn = document.createElement('button');
modeBtn.textContent = 'Dark Mode';
modeBtn.style.backgroundColor = '#555';
modeBtn.style.color = 'white';
modeBtn.style.margin = '10px';
modeBtn.style.padding = '8px 12px';
modeBtn.style.border = 'none';
modeBtn.style.borderRadius = '6px';
modeBtn.style.cursor = 'pointer';
document.body.appendChild(modeBtn);

modeBtn.onclick = () => {
  darkMode = !darkMode;
  document.body.style.backgroundColor = darkMode ? '#222' : '#9cc6f1';
  document.body.style.color = darkMode ? '#fff' : '#000';
  modeBtn.textContent = darkMode ? 'Light Mode' : 'Dark Mode';
};
