function changeTheme(){
    let body = document.querySelector('body');
    if(body.classList.contains('white-theme')){
        body.classList.remove('white-theme');
        body.classList.add('green-theme');
    }
    else{
        body.classList.add('white-theme');
        body.classList.remove('green-theme');
    }
}

var count = 0;
function sub(){
    let span = document.querySelector("span");
    count--;
    span.innerText = count;

}
function add(){
    let span = document.querySelector("span");
    count++;
    span.innerText = count;

}