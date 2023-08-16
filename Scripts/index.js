// alert('connected');

const redBtn = document.getElementById('red-btn').addEventListener('click', function(){
    // console.log("BTN Connected");
    // alert("connected");
    const redBg = document.getElementById('redBg');
    redBg.style.backgroundColor = 'red';
});
const orangeBtn = document.getElementById('orange-btn').addEventListener('click', function(){
    // console.log("BTN Connected");
    // alert("connected");
    const orangeBg = document.getElementById('orangeBg');
    orangeBg.style.backgroundColor = 'orange';
});
const yellowBtn = document.getElementById('yellow-btn').addEventListener('click', function(){
    // console.log("BTN Connected");
    // alert("connected");
    const yellowBg = document.getElementById('yellowBg');
    yellowBg.style.backgroundColor = 'yellow';
});
const greenBtn = document.getElementById('green-btn').addEventListener('click', function(){
    // console.log("BTN Connected");
    // alert("connected");
    const greenBg = document.getElementById('greenBg');
    greenBg.style.backgroundColor = 'green';
});

const blueBtn = document.getElementById('blue-btn').addEventListener('click', function(){
    // console.log("BTN Connected");
    // alert("connected");
    const blueBg = document.getElementById('blueBg');
    blueBg.style.backgroundColor = 'blue';
});
const indigoBtn = document.getElementById('indigo-btn').addEventListener('click', function(){
    // console.log("BTN Connected");
    // alert("connected");
    const indigoBg = document.getElementById('indigoBg');
    indigoBg.style.backgroundColor = 'indigo';
});


const violetBtn = document.getElementById('violet-btn').addEventListener('click', function(){
    // console.log("BTN Connected");
    // alert("connected");
    const violetBg = document.getElementById('violetBg');
    violetBg.style.backgroundColor = 'violet';
});


const commentBtn = document.getElementById('commentBtn').addEventListener('click', function(){
    const commentBox = document.getElementById('commentBox');
    const newComment = commentBox.value;

    // console.log(newComment);
    const commentContainer = document.getElementById('commentContainer');
    const p = document.createElement('p');
    p.innerText = newComment;
    commentContainer.appendChild(p);
    commentBox.value =''

})