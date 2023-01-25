
var COLORS = ["red","#A020F0", "yellow", "blue","green"]
$("span").ready(function(){
  var letters = $("span").length;
  
  for (let i = 0; i <= letters; i++){
    setTimeout(()=>{$("span").eq(i).css("color", "#fcf4df")},i*500);
   }
  }
  )



const quizData = [
    {
      question: "What is === operator called?",
      a: "=== is called a strict equality operator",
      b: "=== is called equality operator,",
      c: "=== is called a operator,",
      d: "=== is called a 3 equals to operator,",
      correct: "a",
    },
    {
      question: "Which of these is a Programming Language?",
      a: "HyperText Markup Language",
      b: "Cascading StyleSheet",
      c: "Twitter Bootstrap",
      d: "JavaScript",
      correct: "d",
    },
    {
      question: "What is Computer Coding?",
      a: "A Radio Show",
      b: "List of Functions",
      c: "Giving Instructions to Computer",
      d: "StyleSheets",
      correct: "c",
    },
    {
      question: "true is a __ value",
      a: "Boolean",
      b: "String",
      c: "Number",
      d: "BigInt",
      correct: "a",
    },
    {
      question: "Computer only Understand",
      a: "Assembly Language",
      b: "High Level Language",
      c: "Machine Language",
      d: "Application",
      correct: "c",
    },
  ];


  const quizDataTwo = [
    {
      question: "How can the style/class of an element be changed?",
      a: `document. getElementById ("myText"). className = "anyclass";`,
      b: `document.getElementById("myText"). style. fontSize = "20";`,
      c: `document.getElementById("myText"). style. fontsize = "20";`,
      d: "a and c",
      correct: "d",
    },
    {
      question: ` What are all the types of Pop up boxes available in JavaScript?`,
      a: `Alert`,
      b: `Confirm`,
      c: `Prompt`,
      d: "All of the Above",
      correct: "d",
    },
    {
      question: "How can generic objects be created?",
      a: "var I = new object();",
      b: "var I = object();",
      c: "var I = new object()",
      d: "var I = new object",
      correct: "a",
    },
    {
      question: `How can a value be appended to an array?`,
      a: "arr[arr.length] = value(); ",
      b: "arr[arr.length()] = value; ",
      c: "arr[arr.length] = value; ",
      d: "arr[arr.push] = value; ",
      correct: "c",
    },
    {
      question: " How can a particular frame be targeted, from a hyperlink, in JavaScript?",
      a: `<a href="/newpage.htm" get="newframe">>New Page</a>`,
      b: `<a href="/newpage.html" target="newframe">New Page</a>`,
      c: `<a href="/newpage.htm" target="newframe">>New Page</a>`,
      d: `<a href="/newpage.htm" target="newframe">>New Page</a>`,
      correct: "b",
    },
  ];

  const quizDataThree = [
    {
      question: ". What is ‘this’ keyword in JavaScript?",
      a: "‘This’ keyword refers to the function from where it was called.",
      b: `‘This’ keyword refers to the object from where it was called.`,
      c: `‘This’ keyword refers to the value from where it was called.`,
      d: `‘This’ keyword refers to the name from where it was called.`,
      correct: "b",
    },
    {
      question: " What are all the looping structures in JavaScript?",
      a: "Do-while",
      b: "For",
      c: "while",
      d: "all of the above",
      correct: "d",
    },
    {
      question: "What would be the result of 3+2+”7″?",
      a: "14",
      b: "327",
      c: "57",
      d: "all of the above",
      correct: "c",
    },
    {
      question: " What is not JavaScript Data Type?",
      a: "NaN",
      b: "String",
      c: "Number",
      d: "Undefined",
      correct: "a",
    },
    {
      question: "Do you love me?",
      a: "Maybe",
      b: "No",
      c: "Yes",
      d: "Application",
      correct: "c",
    },
  ];
  const submitBtn = document.getElementById("submit");
  const startbtn = document.getElementById("start");
  const answerEls = document.querySelectorAll(".answer");
  const aText = document.getElementById("aText");
  const bText = document.getElementById("bText");
  const cText = document.getElementById("cText");
  const dText = document.getElementById("dText");
  const questionEl = document.getElementById("question");
  const exit = document.getElementById("exit");
  const news = document.getElementById("exit2");
 


  function show() {
    $("#card").show();
    $("#exit").show();
    $("#homepage").hide();
}

 
  
  let currentQuiz = 0;
  let score = 0;
  let scoreOne = 0;
  let level =1;

var questionsCount = 0;
var quiz = 0;
var quizStore = [quizData, quizDataTwo, quizDataThree];

  quizLoad();
  
  function quizLoad() {
    questionsCount += 1;
    deSelectInput();

    const currentQuizData = quizStore[quiz][currentQuiz];
  
    questionEl.innerText = currentQuizData.question;
    aText.innerText = currentQuizData.a;
    bText.innerText = currentQuizData.b;
    cText.innerText = currentQuizData.c;
    dText.innerText = currentQuizData.d;
  }
  
  function getSelection() {
    let answer = undefined;
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  function deSelectInput() {
    answerEls.forEach((answer) => {
      answer.checked = false;
    });
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelection();
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++;
      }
  
      currentQuiz++;
      
  
      if (currentQuiz < quizData.length) {
        quizLoad();
      } else {
        alert(`You've scored ${score} / ${questionsCount}`);
        level++;
        if(score >= 3){
            alert(` Level ${level} Unlocked🥳🥳🥳🥳`)
            quiz += 1;
            currentQuiz = 0;
            if (quiz < quizStore.length)
                quizLoad();
            else
                alert("We have a winner!");
        }else{
            alert("Game Over")
            var value =prompt(`Do you want to play Again?
            Yes / No`);
            if(value.toLocaleUpperCase() === "yes"){
              $("#homepage").show();
              setTimeout(()=> {
               window.location.reload();
               },1500);
            }else if(value.toLocaleUpperCase() === "no"){ {
              console.log("wrong")
              $("#homepage").show();
              setTimeout(()=> {
               window.location.reload();
               },1500);
              
            }
          }else {
            console.log("wrong")
            $("#homepage").show();
            setTimeout(()=> {
             window.location.reload();
             },1500);
            
          }
        }
      }
    }
  });
  

  exit.addEventListener("click", () =>{
    $("#card-body").hide();
    document.querySelector("#news").innerHTML = `You've scored ${score}😥`;
    $("#submit").hide();
    setTimeout(()=> {
      window.close()
     },1500);
  });

  exit2.addEventListener("click", () =>{
    $("#card-body").hide();
    $("#submit").hide();
    setTimeout(()=> {
     window.close()
    },1500);
  });

  