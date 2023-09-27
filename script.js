const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const red = document.createElement('p');
red.classList.add('red');
red.textContent = "Hey I'm red!";
red.style.color = "red";
//(alternative) red.style.cssTest = "font: red;"
container.appendChild(red);

const blue = document.createElement('h3');
blue.classList.add('blue');
blue.textContent = "I'm blue h3!";
blue.style.color = "blue";
container.appendChild(blue);

const pink = document.createElement('div');
pink.classList.add('pink');
pink.style.backgroundColor = "pink";
pink.style.border = 'black';
pink.style.height = "100px";
pink.style.width = "400px";
container.appendChild(pink);

const DivInsidePink = document.createElement('h1');
DivInsidePink.classList.add('DivInsidePink');
DivInsidePink.textContent = "I'm a div";
pink.appendChild(DivInsidePink);

const pInsidePink = document.createElement('p');
pInsidePink.classList.add('pInsidePink');
pInsidePink.textContent = "ME TOO!";
pink.appendChild(pInsidePink);

// button with callback function
const btn = document.createElement("button");
btn.classList.add('btn');
btn.style.height = "30px";
btn.style.width = "202px";
btn.style.margin = "20px"
btn.addEventListener('click', function (e) {
    console.log(e);
  });

container.appendChild(btn);
  