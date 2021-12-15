// let prev = document.querySelector('.prev')
// let next = document.querySelector('.next')
// let img = document.querySelector('img')


// let i = 1
// next.onclick = function(){
//     if(i > 2){
//         i = 0
//     }
//     img.src = ''
//     img.src = 'img' + (i + 1) + '.jpg'
//     i++
// }

// prev.onclick = function(){
//     if(i < 2){
//         i = 4
//     }
//     img.src = ''
//     img.src = 'img' + (i - 1) + '.jpg'
//     i--
// }


let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let img = document.querySelector('img')
let imagesArr = ['img1.jpg', 'img2.jpg', 'img3.jpg'] 
let i = 0

next.onclick = function(){
        if(i == imagesArr.length-1){
            i = 0
        }else{
            i++
        }
        img.src = ''
        img.src = imagesArr[i]
        console.log(img.src)
    
}

prev.onclick = function(){
    if(i == 0){
        i = imagesArr.length-1
    }else{
        i--
    }
    img.src = ''
    img.src = imagesArr[i]
    console.log(img.src)

}