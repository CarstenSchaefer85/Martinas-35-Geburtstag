const solution = "STEINE";

let current = 0;
let score = 0;


// Speichert, ob eine Frage richtig beantwortet wurde
let questionResults = new Array(12).fill(false);
let answeredQuestions = new Array(12).fill(false);
// Freigeschaltete Buchstaben
let unlockedLetters = new Array(solution.length).fill(false);

let questions = [
{
	title: "❤️ Der Anfang unseres Rätsels",
	q:"Wo haben wir uns kennengelernt?",
	a:["Ort A","Ort B","Ort C","Ort C"],
	correct: 1
},
{
	title: "❤️ Der erste Hinweis wartet",
	q:"Was ist mein Lieblingsessen?",
	a:["Pizza","Pasta","Sushi","Sushi"],
	correct: 1
},
{
	title: "✨ Die nächste Spur",
	q:"Welcher Moment mit dir war besonders?",
	a:["Unser erster Urlaub","Unser erstes Date","Ein anderer","Ein anderer"],
	correct: 1
},
{
	title: "✨ Ein weiterer Teil unserer Geschichte",
	q:"Was bringt mich immer zum Lachen?",
	a:["Deine Witze","Filme","Musik","Musik"],
	correct: 1
},
{
	title: "🌸 Erinnerungen, die bleiben",
	q:"Was machen wir am liebsten zusammen?",
	a:["Kochen","Reisen","Spazieren","Spazieren"],
	correct: 1
},
{
	title: "🌸 Bald ist die Hälfte geschafft",
	q:"Welche Eigenschaft liebe ich an dir?",
	a:["Dein Humor","Deine Art","Dein Lächeln","Dein Lächeln"],
	correct: 1
},
{
	title: "⭐ Ein neuer Buchstabe kommt näher",
	q:"Unser perfekter Tag wäre...",
	a:["Am Meer","Zuhause","Abenteuer","Abenteuer"],
	correct: 1
},
{
	title: "⭐ Du bist auf der richtigen Spur",
	q:"Was wünsche ich mir mit dir?",
	a:["Viele Reisen","Viele Erinnerungen","Alles zusammen","Alles zusammen"],
	correct: 1
},
{
	title: "🔎 Fast ist das Geheimnis gelüftet",
	q:"Welche Farbe passt zu uns?",
	a:["Rot","Blau","Rosa","Rosa"],
	correct: 1
},
{
	title: "🔎 Nur noch ein kleines Stück",
	q:"Was war unser schönster Moment?",
	a:["Moment 1","Moment 2","Moment 3","Moment 3"],
	correct: 1
},
{
	title: "🎁 Die letzte Herausforderung",
	q:"Wie gut kennst du mich?",
	a:["Sehr gut","Perfekt","Unschlagbar","Unschlagbar"],
	correct: 1
},
{
	title: "🎉 Die Lösung ist zum Greifen nah",
	q:"Bereit für die Überraschung?",
	a:["Ja ❤️","Natürlich","Los geht's","Los geht's"],
	correct: 1
}
];


function login(){
	let code=document.getElementById("code").value;
	if(code==="01.10.1991"){
		document.getElementById("login").style.display="none";
		document.getElementById("quiz").style.display="block";
		updateLetters();
		showQuestion();
	}
	else{
		alert("Falscher Code ❤️");
	}
}



function showQuestion(){

	let q=questions[current];
	// Überschrift aus der aktuellen Frage laden
    document.getElementById("title").innerHTML = q.title;
	document.getElementById("question").innerHTML = (current+1)+"/12<br><br>"+q.q;
	let box=document.getElementById("answers");
	box.innerHTML="";
    q.a.forEach((answer, index) => {
        let btn = document.createElement("button");
        btn.className = "answer";
        btn.innerHTML = answer;
        btn.onclick = function () {
            // Alle Buttons deaktivieren
            document.querySelectorAll(".answer").forEach(b => b.disabled = true);
			answeredQuestions[current] = true;
			if(index===q.correct){
				btn.style.background="green";
				score++;
				questionResults[current]=true;
			}else{
				btn.style.background="red";
				questionResults[current]=false;
			}
            // Nach xx Sekunden zur nächsten Frage
            setTimeout(() => {
				updateSolution();
                next();
            }, 1000);
        };
        box.appendChild(btn);
    });
	document.getElementById("bar").style.width = (((current + 1) / questions.length) * 100) + "%";
}

function updateSolution(){
    for(let i=0;i<6;i++){
        let first=i*2;
        let second=first+1;
        if(questionResults[first] || questionResults[second]){
            unlockedLetters[i]=true;
		}
    }
    updateLetters();

}

function updateLetters() {
    const div = document.getElementById("letters");
    div.innerHTML = "";
    for (let i = 0; i < solution.length; i++) {
        let d = document.createElement("div");
        d.className = "letter";
        let first = i * 2;
        let second = first + 1;
        const firstAnswered = answeredQuestions[first];
        const secondAnswered = answeredQuestions[second];
        const firstCorrect = questionResults[first];
        const secondCorrect = questionResults[second];
        // Erst auswerten, wenn beide Fragen beantwortet wurden
        if (firstAnswered && secondAnswered) {
            if (firstCorrect || secondCorrect) {
                d.classList.add("unlocked");
                d.textContent = solution[i];
            } else {
                d.classList.add("locked");
                d.textContent = "-";
            }
        } else {
            // Mindestens eine Frage ist noch offen
            d.classList.add("locked");
            d.textContent = "?";
        }
        div.appendChild(d);
    }
}

function next(){
	current++;
	if(current>=questions.length){
		finish();
	}
	else{
		showQuestion();
	}
}

function finish(){
	document.getElementById("quiz").style.display="none";
	document.getElementById("result").style.display="block";
	document.getElementById("resultText").innerHTML =
		`
		Du hast ${score} von ${questions.length} Fragen richtig beantwortet.<br><br>
		Dein Lösungswort lautet:<br><br>
		<h1>${unlockedLetters.map((u,i)=>u?solution[i]:"-").join(" ")}</h1>
		`;
}