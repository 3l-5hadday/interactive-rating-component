let selectedRate ;

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector("#button4");
const button5 = document.querySelector("#button5");

const submit_button = document.querySelector("#submit_button");

const rate = document.querySelector("#rate");

const thankyou_state = document.querySelector('#thankyou_state')
const rating_state = document.querySelector('#rating_state')

const buttons = [
    {
        name:'button1',
        number:1
    },
    {
        name:'button2',
        number:2
    },
    {
        name:'button3',
        number:3
    },
    {
        name:'button4',
        number:4
    },
    {
        name:'button5',
        number:5
    }
]

const colors_back = ['hsl(217, 12%, 63%)','hsl(208, 22%, 15%)'];
const colors_front = ['white','hsl(216, 12%, 54%)']

let index = 0

button1.addEventListener('click', function onClick() {
    button1.style.backgroundColor = colors_back[index];
    button1.style.color = colors_front[index]
    selectedRate = '1'
    console.log(selectedRate)
    index = index >= colors_front.length - 1 ? 0 : index + 1;
  });

button2.addEventListener('click', function onClick() {
    button2.style.backgroundColor = colors_back[index];
    button2.style.color = colors_front[index]
    selectedRate = '2'
    index = index >= colors_front.length - 1 ? 0 : index + 1;
  });
button3.addEventListener('click', function onClick() {
    button3.style.backgroundColor = colors_back[index];
    button3.style.color = colors_front[index]
    selectedRate = '3'
    index = index >= colors_front.length - 1 ? 0 : index + 1;
  });
button4.addEventListener('click', function onClick() {
    button4.style.backgroundColor = colors_back[index];
    button4.style.color = colors_front[index]
    selectedRate = '4'
    index = index >= colors_front.length - 1 ? 0 : index + 1;
  });
button5.addEventListener('click', function onClick() {
    button5.style.backgroundColor = colors_back[index];
    button5.style.color = colors_front[index]
    selectedRate = '5'
    index = index >= colors_front.length - 1 ? 0 : index + 1;
  });

console.log(selectedRate)

submit_button.onclick = switchState

function switchState() {
    rating_state.style.display = 'none'
    thankyou_state.style.display = 'block'
    rate.innerText = selectedRate;
}