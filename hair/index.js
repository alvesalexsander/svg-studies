console.log('init')
const hair = document.getElementById('hair');

const colors = [
  'HotPink',
  'green',
  'LightSeaGreen',
  'purple',
  'black'
];

let position = 0;
setInterval(() => {
  if(position > colors.length-1) {
    position = 0;
  }
  
  setHairColor(colors[position])
  position++;
}, 2000)

function setHairColor(color) {
  hair.style.fill=color;
  hair.style.stroke=color;
}