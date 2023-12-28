const questions = [
    {
        'que': 'which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'javaScript',
        'd': 'PHP',
        'correct': 'a'
    },
    {
        'que': 'What programming language is often used for creating dynamic web pages?',
        'a': 'Python',
        'b': 'Ruby',
        'c': 'Java',
        'd': 'JavaScript',
        'correct': 'd'
    },
    {
        'que': 'Which of the following is a server-side scripting language?',
        'a': 'JavaScript',
        'b': 'CSS',
        'c': 'PHP',
        'd': 'HTML',
        'correct': 'c'
    },
    {
        'que': 'Which markup language is used for structuring content on the web?',
        'a': 'XML',
        'b': 'JSON',
        'c': 'YAML',
        'd': 'HTML',
        'correct': 'd'
    },
    {
        'que': 'What does CSS stand for in web development?',
        'a': 'Cascading Style Sheet',
        'b': 'Computer Style Sheet',
        'c': 'Creative Style Sheet',
        'd': 'Conditional Style Sheet',
        'correct': 'a'
    },
    {
        'que': 'In web development, what does the acronym API stand for?',
        'a': 'Application Programming Interface',
        'b': 'Advanced Programming Interface',
        'c': 'Automated Programming Interface',
        'd': 'Application Process Interface',
        'correct': 'a'
    }
]


let index = 0;
let total = questions.length;
let right = 0
let wrong = 0
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll('.options')

const loadQustion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    console.log(data);
    quesbox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans === data.correct){
        right++
    }else{
        wrong++
    }
    index++;
    loadQustion()
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = (input.value);
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <h3>thank you for playing</h3>
    <h2>${right} / ${total} are correct</h2>
    `
}
// initial call
loadQustion();