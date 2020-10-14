
    function getValuesQuestion(){
    const questionsQuantity = document.getElementById('questions-number').value
    const questionsCategory= document.getElementById('questions-category').value
    const questionsDifficulty= document.getElementById('difficulty').value
    const questionType= document.getElementById('type').value
    console.log(questionsQuantity+questionsCategory,questionsDifficulty,questionType)
    getQuestions(questionsQuantity,questionsCategory,questionsDifficulty,questionType);
    return questionsQuantity,questionsCategory,questionsDifficulty,questionType
}
   function getQuestions(questionsQuantity, questionsCategory,questionsDifficulty,questionType) {
    fetch(`https://opentdb.com/api.php?amount=${questionsQuantity}&category=${questionsCategory}&difficulty=${questionsDifficulty}&type=${questionType}`)    
    .then(response => response.json())
        .then(data => printCards(data.results))
     }
   
   
   function printCards(questions) {
       var indexcard=0;
    const container = document.getElementById('container-cards');
    container.innerHTML = '';
    questions.forEach(question => {
        const card = returnCardHTML(question,indexcard);
        container.innerHTML += card;
    });
    // poner las preguntas en mi pÃ¡gina web
}

function returnCardHTML(q, indexcard) {
    const card = `<div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${q.category}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${q.question}</h6>
                        ${returnAnswers(randomize(q.correct_answer, q.incorrect_answers),indexcard)}           
                    </div>
                </div>`
    return card;
}
function randomize(correct,incorrect)
{
    let arrpre=[];
    var inco=0;
    var ran = Math.floor(Math.random()*3)+0;
    console.log(ran);
    for (var i=0;i<4;i++)
        {
            console.log("entre al for");
            if(i==ran)
            {
                arrpre.push(correct);
                console.log("agrege la correcta");
            }
            else
            { 
                arrpre.push(incorrect[inco]);
                console.log("agregue la inco");
                inco=inco+1;

            }
        }
    return arrpre;    

}

function returnAnswer(arr,indexcard) 
{
    var correctHTML='';
    for (var i=0;i<arr.length;i++)
        {
            correctHTML += `<div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
            <label class="form-check-label" for="exampleRadios1">
            ${arr[i]};
            </label>
        </div>`;
        }
    
    
    return correctHTML;
}

getValuesQuestion()
import { getCategories} from './getCategorias.js'
getValuesQuestion()    
getCategories()

window.getValuesQuestion = getValuesQuestion