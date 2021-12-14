let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let img = document.querySelector('img')


let i = 1
next.onclick = function(){
    if(i > 2){
        i = 0
    }
    img.src = ''
    img.src = 'img' + (i + 1) + '.jpg'
    i++
}

prev.onclick = function(){
    if(i < 2){
        i = 4
    }
    img.src = ''
    img.src = 'img' + (i - 1) + '.jpg'
    i--
}
    
