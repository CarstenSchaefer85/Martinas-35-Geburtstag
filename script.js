const solution = "BURGEN";

let current = 0;
let score = 0;


// Speichert, ob eine Frage richtig beantwortet wurde
let questionResults = new Array(12).fill(false);
let answeredQuestions = new Array(12).fill(false);
// Freigeschaltete Buchstaben
let unlockedLetters = new Array(solution.length).fill(false);

const login = {
    title: "Liebe Martina ❤️<br>Alles Gute zum Geburtstag",
    txt: `
        <p>
            Ich habe ein kleines Rätsel für dich vorbereitet.<br>
        </p>
        <p>
            Gib zuerst dein dein Geburtsdatum ein:
        </p>
    `
};

const intro = {
    title: "Eine Reise durch unsere gemeinsame Geschichte",
    txt: `
        <p>
Willkommen zu einer ganz besonderen Reise durch unsere gemeinsame Geschichte.
<br><br>
Heute führt uns diese Reise zu zwei Burgen: <br>Burg Eisenberg und Burg Hohenfreyberg.
<br><br>
Auf einer mittelalterlichen Burg spielte sich ein großer Teil des Lebens innerhalb der Burgmauern ab. 
Hier wurde gewohnt, gearbeitet, gefeiert, getanzt und gelacht. 
Von hier aus brachen die Menschen zu Reisen auf, empfingen Gäste, schlossen Freundschaften und erlebten Geschichten, die noch lange weitererzählt wurden.
<br><br>
Und auch unsere gemeinsame Geschichte besteht aus vielen solchen Geschichten.
Von unserem ersten gemeinsamen Zuhause über Reisen, Konzerte und Tänze bis hin zu all den kleinen und großen Momenten, die unser gemeinsames Leben ausmachen.
Heute wollen dir uns auf eine kleine Zeitreise durch diese Erinnerungen begeben.
<br><br>
Dieses Krypto Box gehört dir.
Sie enthält den nächsten Teil deines Geschenkes.
<br><br>
Allerdings ist sie verschlossen und den Schlüssel musst du dir erst erspielen.
In zwölf Fragen geht es nicht nur um das Leben auf mittelalterlichen Burgen, sondern vor allem um unsere gemeinsame Geschichte.
Bei jeder Frage gibt es eine richtige Antwort.
Wenn du ausreichend Fragen richtig beantwortet hast, wirst du am Ende ein Lösungswort erhalten.
Dieses Lösungswort ist dein Schlüssel.
Erst wenn du das Lösungswort gefunden hast, darf die Krypto Box geöffnet werden.
Was dich darin erwartet, bleibt bis dahin ein Geheimnis.
<br><br>
Bist du bereit, dich auf die Reise durch unsere gemeinsame Geschichte zu begeben?
Dann betritt die Burg Eisenberg und starte mit unserem Burg-Quiz.
        </p>
    `
};

const middle = {
    title: "🏰 Burg Hohenfreyberg<br>Die Welt außerhalb der Burgmauern",
    txt: `
        <p>
Von Burg Eisenberg führt unsere Reise nun weiter zur Burg Hohenfreyberg.
<br><br>
Hinter uns liegen die Gemächer, das gemeinsame Zuhause und das Leben innerhalb der Burgmauern. Dort haben wir uns mit unserem Alltag, unseren Mitbewohnern, unseren kleinen Gewohnheiten und den Dingen beschäftigt, die unser gemeinsames Zuhause ausmachen.
<br><br>
Doch selbst die dicksten Burgmauern konnten die Menschen nicht davon abhalten, neugierig auf die Welt dahinter zu sein. Es wurde gehandelt, gereist, gefeiert und neue Orte wurden entdeckt. Bei Festen traf man auf andere Menschen, bei Turnieren wurde sich gemessen und auf Reisen entstanden Geschichten, die man später am heimischen Herd erzählen konnte.
<br><br>
Auch unsere gemeinsame Geschichte ist längst über die eigenen vier Wände hinausgewachsen. Wir haben neue Orte entdeckt, besondere Veranstaltungen erlebt, gemeinsam gefeiert, uns gegenseitig angefeuert und immer wieder neue Erinnerungen gesammelt.
<br><br>
Auf Burg Hohenfreyberg geht es deshalb um all die Abenteuer, Erlebnisse und besonderen Momente, die wir außerhalb unserer eigenen vier Wände miteinander geteilt haben.
<br><br>
Die Reise geht weiter …
        </p>
    `
};

const resultText = (score, total, solutionText) => ({ 
title: "Dein Schlüssel", 
txt: `Zwölf Fragen, zwei Burgen und unzählige Erinnerungen liegen nun hinter uns. 
Wir sind durch unsere gemeinsamen Gemächer gereist, haben ferne Länder besucht, getanzt, gelacht, gefeiert und uns gegenseitig bei unseren kleinen und großen Abenteuern unterstützt. 
Und nun ist der Moment gekommen, an dem sich die nächste Tür unserer gemeinsamen Reise öffnet. 
<br><br> 
Du hast <strong>${score} von ${total} Fragen</strong> richtig beantwortet. 
Jede richtige Antwort hat dir einen Teil des Schlüssels geliefert. 
Aus deinen Antworten ergibt sich folgendes Lösungswort: 
<div style="text-align: center;">
	<h1>${solutionText}</h1>
</div>
Das ist dein Schlüssel.
Die Krypto Box hast du seit Beginn unserer Reise bei dir. 
<br><br> 
<strong>🎁 Du darfst die Box jetzt öffnen.</strong>` 
});

let questions = [
{
	title: "⚔️ Frage 1 – Der Einzug",
	context:"Eine Burg war nicht nur ein Ort der Verteidigung, sondern vor allem das Zuhause ihrer Bewohner. Wer seine eigenen Gemächer bezog, begann damit einen neuen Abschnitt seines Lebens.\n\nEin solcher neuer Abschnitt begann auch für uns, als aus zwei Wohnungen ein gemeinsames Zuhause wurde.",
	question:"In welchem Monat sind wir im Jahr 2023 zusammengezogen?",
	anser:["April","Juni","August","Oktober"],
	correct: 2
},
{
	title: "🏠 Frage 2 – Die Gemächer des Burgherrn",
	context:"Auf einer Burg hatte jeder Raum seine eigene Funktion. Während der große Saal für Feste und Zusammenkünfte genutzt wurde, waren die privaten Gemächer der Ort, an dem man sich zurückziehen konnte.\n\nUnd wie bei jeder Burg verrät auch die Einrichtung unserer früheren Wohnungen einiges über die Zeit, in der wir dort gelebt haben.",
	question:"Welche Farbe hatte die Küche in Carstens Wohnung in der Grüner-Turm-Straße 2?",
	anser:["Blau","Rot","Grün","Gelb"],
	correct: 1
},
{
	title: "👥 Frage 3 – Das Leben mit den Burgbewohnern",
	context:"Auf einer Burg lebten viele Menschen zusammen: die Burgherren mit ihren Familien, Bedienstete, Handwerker, Soldaten und Gäste. Da konnte es schon einmal vorkommen, dass man sich auf engem Raum arrangieren musste.\n\nGanz ähnlich ging es zeitweise in der Zeughausstraße 14 zu. Dort wechselten die Bewohner, Gäste kamen und gingen – und die Liste der Menschen, mit denen wir unter einem Dach gelebt haben, wurde immer länger.",
	question:"Mit wie vielen Personen haben wir bereits zusammen in der Zeughausstraße 14 gewohnt?",
	anser:["8","10","12","14"],
	correct: 2
},
{
	title: "🛋️ Frage 4 – Der Thron der Burg",
	context:"Nach einem langen Tag auf der Burg gab es wohl kaum etwas Schöneres, als sich in den eigenen Gemächern niederzulassen. Ein besonders bequemer Platz war dabei dem Burgherren und seiner Gemahlin vorbehalten.\n\nUnser heutiger „Thron“ steht allerdings nicht in einem Rittersaal, sondern dort, wo viele unserer gemeinsamen Abende enden.",
	question:"Welche Farbe hat unser Sofa?",
	anser:["Anthrazit","Asphaltgrau","Granitgrau","Dunkelgrau"],
	correct: 0
},
{
	title: "💃 Frage 5 – Tanz auf dem Burghof",
	context:"Bei einem großen Fest auf der Burg durfte natürlich getanzt werden. Musik spielte auf, die Gäste versammelten sich und auf dem Tanzboden konnte man zeigen, was man gelernt hatte.\n\nVom ersten Tanzschritt bis zu anspruchsvolleren Figuren haben wir uns gemeinsam über das Parkett bewegt. Einige Tänze begleiten uns dabei schon länger als andere.",
	question:"Welchen der folgenden Tänze haben wir als letztes gelernt?",
	anser:["Wiener Walzer","Slow Fox","Paso Doble","Jive"],
	correct: 1
},
{
	title: "🤡 Frage 6 – Der Hofnarr",
	context:"Keine richtige Burg durfte einen Hofnarren vermissen. Seine Aufgabe war es, die Bewohner und Gäste zu unterhalten und sie mit Geschichten und Witzen zum Lachen zu bringen.\n\nÜber die Jahre haben sich auch bei uns einige ganz besondere Exemplare angesammelt. Manche sind lustig, manche eher fragwürdig – aber einer kann natürlich nur der beste sein.",
	question:"Welcher ist der beste Witz?",
	anser:["Blondine hinter der Glasscheibe","Zwei Mathematiker im Zug","Billardtisch auf dem Baum","Zwei Gurken im Gurkenglas"],
	correct: 3
},
{
	title: "🗺️ Frage 7 – Reisen in ferne Länder",
	context:"Eine Burg lag häufig an wichtigen Handelswegen. Händler aus nah und fern kamen in die Gegend und brachten Waren, Geschichten und Neuigkeiten aus fremden Ländern mit.\n\nFür die Burgherren selbst waren Reisen eine Möglichkeit, andere Adelshäuser kennenzulernen, Bündnisse zu schließen und fremde Länder zu entdecken.\n\nUnsere Reiseliste ist inzwischen ebenfalls ein kleines Stück gewachsen – und einige europäische Hauptstädte haben wir bereits gemeinsam erkundet.",
	question:"In welchem Land waren wir noch nicht zusammen in der Landeshauptstadt?",
	anser:["Spanien","Slowenien","Slowakei","Schottland"],
	correct: 0
},
{
	title: "🎭 Frage 8 – Unterhaltung am Hof",
	context:"Wenn auf einer Burg ein Fest gefeiert wurde, durfte die Unterhaltung natürlich nicht fehlen. Musiker, Schauspieler und Gaukler sorgten dafür, dass die Gäste einen besonderen Abend erlebten.\n\nKonzerte, Shows und Comedy haben auch unsere gemeinsame Geschichte um einige besondere Abende bereichert. Manche davon waren erste gemeinsame Erlebnisse, andere haben wir bereits vor unserer Beziehung schon einmal erlebt.",
	question:"Wo war Carsten nicht zum ersten Mal zusammen mit Martina?",
	anser:["Pink Konzert","Let's Dance Tour","Die Ärzte Konzert","The Nogoodniks"],
	correct: 2
},
{
	title: "🎂 Frage 9 – Die Festtafel",
	context:"Zu einem großen Burgfest gehörte natürlich auch eine prächtige Festtafel. Je größer und wichtiger das Fest, desto beeindruckender durfte auch das Essen sein.\n\nFür den krönenden Abschluss sorgte der Hofkonditor. Mit viel Geschick entstanden kunstvolle Torten und Figuren, die fast zu schade zum Anschneiden waren.\n\nEin moderner Hofkonditor hat inzwischen ebenfalls so manche Figur aus Tortenmasse entstehen lassen.",
	question:"Welche Tortendeko hat Carsten noch nicht erstellt?",
	anser:["Pinguin","Hase","Igel","Panda"],
	correct: 2
},
{
	title: "🏃 Frage 10 – Der Wettlauf des Burgherrn",
	context:"Auch ein Burgherr musste sich gelegentlich körperlich ertüchtigen. Bei Jagden, Wettkämpfen oder Turnieren konnte er seine Ausdauer und Geschicklichkeit unter Beweis stellen.\n\nHeute heißt die Herausforderung nicht mehr Ritterturnier, sondern Halbmarathon. Und statt Fanfaren und Trompeten wartet am Streckenrand jemand ganz Besonderes, um den Läufer anzufeuern.",
	question:"In welcher Stadt hat Martina Carsten noch nicht beim Halbmarathon laufen zugejubelt",
	anser:["Unteruhldingen","Bad Waldsee","Stuttgart","Bregenz"],
	correct: 3
},
{
	title: "💃 Frage 11 – Das große Tanzturnier",
	context:"Tanz war auf Festen und an den Höfen des Adels ein wichtiger Bestandteil der Unterhaltung. Wer besonders gut tanzen konnte, genoss Anerkennung und Bewunderung.\n\nJahrhunderte später ist das Prinzip erstaunlich ähnlich geblieben: Bei „Let's Dance“ kämpfen prominente Teilnehmer gemeinsam mit ihren Tanzpartnern um den Sieg und die Gunst des Publikums.",
	question:"Wer hat Let's Dance nie gewonnen?",
	anser:["Philipp Boy","Gabriel Kelly","Diego Poth","Anna-Carina Woitschack"],
	correct: 0
},
{
	title: "💌 Frage 12 – Die drei wichtigsten Worte",
	context:"Auf einer Burg konnten viele Dinge von großer Bedeutung sein: ein gewonnenes Turnier, eine geschlossene Ehe, ein Bündnis zwischen zwei Adelshäusern oder ein Versprechen für die Zukunft.\n\nDoch für eine ganz persönliche Geschichte braucht es manchmal keine große Zeremonie und kein prunkvolles Fest.\n\nManchmal reichen drei Worte. Es gibt einen ganz besonderen Moment unserer Geschichte, den wir mit einem beeindruckenden Sternenhimmel verbinden. Das erste Mal „Ich liebe dich“.",
	question:"Welchen Comedian haben wir uns davor angesehen?",
	anser:["Martina Schwarzmann","Uli Böttcher","Lisa Eckhart","Eva Eiselt"],
	correct: 1
}
];

// Login Texte laden
document.getElementById("login").style.display="block";
document.getElementById("loginTitle").innerHTML = login.title;
document.getElementById("loginText").innerHTML = login.txt;

function showLogin(){
	let code=document.getElementById("code").value;
	if(code==="01.10.1991"){
		document.getElementById("login").style.display="none";
		document.getElementById("intro").style.display="block";
		document.getElementById("introTitle").innerHTML = intro.title;
        document.getElementById("introText").innerHTML = intro.txt;
	}
	else{
		alert("Falscher Code ❤️");
	}
}

function startQuiz(){
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    updateLetters();
    showQuestion();
}

function showQuestion(){
	let q=questions[current];
	// Überschrift aus der aktuellen Frage laden
    document.getElementById("questionTitle").innerHTML = q.title;
	document.getElementById("questionContext").innerHTML = q.context.replace(/\n/g, "<br>");
	document.getElementById("questionText").innerHTML = q.question.replace(/\n/g, "<br>");
	let box=document.getElementById("questionAnswers");
	box.innerHTML="";
    q.anser.forEach((answer, index) => {
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
	// Nach Frage 6 kommt die Zusatzseite
    if(current === 6){
        showMiddle();
    }
    // Nach Frage 12 ist Schluss
     else if(current >= questions.length){
        finish();
    }
	else{
		showQuestion();
	}
}

function showMiddle(){
	document.getElementById("quiz").style.display = "none";
    document.getElementById("middle").style.display = "block";
    document.getElementById("middleTitle").innerHTML = middle.title;
    document.getElementById("middleText").innerHTML = middle.txt;
}

function continueQuiz(){
    document.getElementById("middle").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
}

function finish(){
	document.getElementById("quiz").style.display="none";
	document.getElementById("result").style.display="block";
	const solutionText = unlockedLetters
        .map((u, i) => u ? solution[i] : "-")
        .join(" ");
	document.getElementById("resultTitle").innerHTML = resultText(score, questions.length, solutionText).title;
    document.getElementById("resultText").innerHTML = resultText(score, questions.length, solutionText).txt;
}