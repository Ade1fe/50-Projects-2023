const mainContainer = document.querySelector('.main-container');
const secContainer = document.querySelector('.secContainer');
const errors = document.getElementById('errors');
const seconds = document.getElementById('seconds');
const accuracy = document.getElementById('accuracy');
const question = document.getElementById('question');
const text = document.querySelector('.textContainer');
const area = document.querySelector('#area');
const run = document.getElementById('run');
const timeUp = document.getElementById('timeUp');
const averageSum = document.getElementById('averageSum');

$(".display").hide()
$(".main-container").hide();

let arr = [];
 let arr2 = [];
 let arr3 = [];

    const words = [
        {id : "Best Food combo {Rice, yam, beans and okra }"},
       {id : "programmIng is fuN"},
       {id : "Denial is A river in Egypt"},
       {id : "food gave's Strength right?"},
       {id : "Javascript is too easy :("},
       {id : "you are Doing well by Mr marconi"},
       {id : "git init vawulence"},
       {id : "Apple products are gOOd"}

]



var wordsCount = 0;
var word = 0;
let currentWord = 0;
var wordsStore = [words];
var quest = 1;

// startGame();

// StartGame
function startGame (){
    
 wordsCount += 1;
 const currentWordData = wordsStore[word][currentWord];
    var measure = text.innerHTML = currentWordData.id
  if(area.value !==""){
    compareString(measure)
   loadNextQuestion();
    area.value=""
  }else{
    console.log("Empty Field")
  }

    }



    // LoadNextQuestion
    function loadNextQuestion (){
    quest++
    if(currentWord < words.length || quest < words.length){
        // startGame()
        question.innerHTML = quest
    }else{
        console.log("game end")
    }
currentWord++
 
    }



    // StartCountDown
 document.getElementById("area").onfocus = 
         function() {
            setFocus()
            startGame();
        };

         function setFocus() {
   
       setTimeout(() => {
        countDown()}, 1000)
        document.getElementById(
            "area").style.backgroundColor =
            "#f1f1f1";

}


// CountDown
var counter = 30;
function countDown (){
setInterval(function(){
  if(counter <= 0){
    document.getElementById('seconds').innerHTML = "Finished";
    $(".display").show();
    hideContainer();
    // startGame()
    timeUp.innerHTML = arr2;
    averageSum.innerHTML = ` Average Sum ${finalsum}%`;
    clearInterval(countDown)
    
  } else {
    document.getElementById('seconds').innerHTML = counter;
    // clearInterval(countDown)
    
  }
  counter -= 1;
}, 1000);

}



// countMistake
  var total = 0;
  var finalsum = 0;
const countMistakes = (mistaken, correct) => {
   let count = 0;
   for(let i = 0; i < mistaken.length; i++){
      if(mistaken[i] !== correct[i]){
        // const holder = mistaken[i];
        arr.push(mistaken[i]);
        let text = arr.toString().split('').join(' ');
        document.getElementById('result').innerHTML = `Wrong Characters ( ${text} ) in ${correct} and length is ${arr.length}` ;
        var num1 = arr.length;
        var num2 = correct.length;
       var cal1 =  Number(num2) 
        var cal2 = Number(num1) 
        var ans = cal1 - cal2;
        const d = (ans/num2)*100
        const math =Math.round(d)+ `%`;
       accuracy.innerHTML = math;
        var max = Math.round(d)
      arr3.push(max)
      console.log("max is: "+ max)
        // console.log(arr3, "arr3")
      for (var x = 0, sum = 0; x < arr3.length; sum += arr3[x++]);
        finalsum = Math.round(sum/arr3.length)
       
        arr2.push(`Wrong Characters ( ${text} ) in ${correct} at Question ${quest}\n`);
        // arr2.push("Wrong Characters ("+text+") in "+correct+" at Question "+quest+"\n");
         console.log( )
         continue;
          
      };
      count++;
   };
   return count;
};
const compareString = ( text ) =>{
    var thing = area.value;
   if(area.value.length > 0 ){
      arr = [];
      setTimeout(() => {
  // loadNextQuestion()
  document.getElementById('result').innerHTML = ""

 
}, 1000)
  countMistakes(thing, text);
  
   }else{
    console.log("empty area")
   }

}



  function hideContainer(){
    $(".main-container").hide();
  }

  function hideFirstContainer(){
    $(".mainContainer").hide();
     $(".display").hide();
     $(".main-container").show();

   }