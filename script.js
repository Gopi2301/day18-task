// var body_data = document.querySelector('body');
// function extfun1 (){
//   var child_ele = document.createElement('p')
//   child_ele.innerText= 'Welcome'
//   body_data.insertAdjacentElement("afterbegin",child_ele)
// }
// function err (){
//     body_data.innerText="Error"
// }

// let myName = 'gopin'
// if( myName =='gopi'){
//     var welc = setTimeout(extfun1,5000)
 
// }
//  else{
//     console.log("Dont show welcome")
//     clearTimeout(welc)
//     setTimeout(err,5000)

//  }
//  var  body = document.querySelector('body')
var body_data = document.querySelector('body')
var count = document.createElement('p')
body_data.insertAdjacentElement("afterbegin",count)
function one(){
    setTimeout(two,1000)
    count.innerText=9
}
function two(){
    setTimeout(three,1000)
    count.innerText=8
}
function three (){
    setTimeout(four,1000)
    count.innerText=7
}
function four (){
    setTimeout(five,1000)
    count.innerText=6
}
function five (){
    setTimeout(six,1000)
    count.innerText=5
}
function six (){
    setTimeout(seven,1000)
    count.innerText=4
}function seven (){
    setTimeout(eigth,1000)
    count.innerText=3
}function eigth (){
    setTimeout(nine,1000)
    count.innerText=2
  
}function nine (){
    
    count.innerText="Happy Independence Day";
}

one();