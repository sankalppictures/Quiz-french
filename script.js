// प्रश्न और उत्तर (क्लास 9 UP Board NCERT इतिहास, पहला अध्याय)
const questions = [
    {
        question: "फ्रांसीसी क्रांति कब हुई थी?",
        options: ["1789", "1776", "1799", "1804"],
        answer: "1789"
    },
    {
        question: "फ्रांसीसी क्रांति का मुख्य कारण क्या था?",
        options: ["आर्थिक संकट", "धार्मिक संघर्ष", "सामाजिक असमानता", "राजनीतिक भ्रष्टाचार"],
        answer: "सामाजिक असमानता"
    },
    {
        question: "फ्रांस में 'एस्टेट्स जनरल' क्या था?",
        options: ["एक सैन्य संगठन", "एक धार्मिक संस्था", "एक राजनीतिक संस्था", "एक सामाजिक संगठन"],
        answer: "एक राजनीतिक संस्था"
    },
    {
        question: "फ्रांस में तीसरा एस्टेट किससे बना था?",
        options: ["किसान", "मजदूर", "व्यापारी", "सभी"],
        answer: "सभी"
    },
    {
        question: "फ्रांसीसी क्रांति का नारा क्या था?",
        options: ["स्वतंत्रता, समानता, बंधुत्व", "शांति, प्रगति, समृद्धि", "एकता, अखंडता, विश्वास", "क्रांति, परिवर्तन, स्वतंत्रता"],
        answer: "स्वतंत्रता, समानता, बंधुत्व"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान किसे गिलोटिन पर चढ़ाया गया था?",
        options: ["लुई XVI", "नेपोलियन", "रोबेस्पियर", "मैरी एंटोनेट"],
        answer: "लुई XVI"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'राष्ट्रीय सभा' का गठन कब हुआ?",
        options: ["1789", "1791", "1793", "1795"],
        answer: "1789"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'टेनिस कोर्ट की शपथ' किससे संबंधित है?",
        options: ["राजा की गिरफ्तारी", "राष्ट्रीय सभा का गठन", "गणतंत्र की स्थापना", "सामंतों का विरोध"],
        answer: "राष्ट्रीय सभा का गठन"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'बास्टील का पतन' कब हुआ?",
        options: ["14 जुलाई 1789", "15 अगस्त 1789", "21 सितंबर 1792", "26 अगस्त 1789"],
        answer: "14 जुलाई 1789"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'मानव और नागरिक अधिकारों की घोषणा' कब हुई?",
        options: ["1789", "1791", "1793", "1795"],
        answer: "1789"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'राजतंत्र का अंत' कब हुआ?",
        options: ["1789", "1792", "1793", "1795"],
        answer: "1792"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'आतंक का शासन' किसने चलाया?",
        options: ["लुई XVI", "नेपोलियन", "रोबेस्पियर", "मैरी एंटोनेट"],
        answer: "रोबेस्पियर"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'गणतंत्र की स्थापना' कब हुई?",
        options: ["1789", "1792", "1793", "1795"],
        answer: "1792"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'नेपोलियन बोनापार्ट' कब सत्ता में आया?",
        options: ["1799", "1804", "1815", "1821"],
        answer: "1799"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'कोड नेपोलियन' क्या था?",
        options: ["एक सैन्य संहिता", "एक कानूनी संहिता", "एक शैक्षिक संहिता", "एक धार्मिक संहिता"],
        answer: "एक कानूनी संहिता"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'वाटरलू का युद्ध' कब हुआ?",
        options: ["1815", "1804", "1799", "1821"],
        answer: "1815"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'लुई XVI' की मृत्यु कैसे हुई?",
        options: ["गिलोटिन", "फांसी", "युद्ध", "प्राकृतिक मृत्यु"],
        answer: "गिलोटिन"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'मैरी एंटोनेट' कौन थी?",
        options: ["रानी", "राजकुमारी", "सेनापति", "क्रांतिकारी"],
        answer: "रानी"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'रोबेस्पियर' कौन था?",
        options: ["एक क्रांतिकारी नेता", "एक राजा", "एक सैन्य अधिकारी", "एक धार्मिक नेता"],
        answer: "एक क्रांतिकारी नेता"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'नेशनल कन्वेंशन' क्या था?",
        options: ["एक सैन्य संगठन", "एक राजनीतिक संस्था", "एक धार्मिक संस्था", "एक सामाजिक संगठन"],
        answer: "एक राजनीतिक संस्था"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'डायरेक्टरी' क्या था?",
        options: ["एक सैन्य संगठन", "एक राजनीतिक संस्था", "एक धार्मिक संस्था", "एक सामाजिक संगठन"],
        answer: "एक राजनीतिक संस्था"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'नेपोलियन' कौन था?",
        options: ["एक क्रांतिकारी नेता", "एक राजा", "एक सैन्य अधिकारी", "एक धार्मिक नेता"],
        answer: "एक सैन्य अधिकारी"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'कोड नेपोलियन' किसने बनाया?",
        options: ["लुई XVI", "नेपोलियन", "रोबेस्पियर", "मैरी एंटोनेट"],
        answer: "नेपोलियन"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'वाटरलू का युद्ध' किसके बीच हुआ?",
        options: ["फ्रांस और ब्रिटेन", "फ्रांस और रूस", "फ्रांस और प्रशिया", "फ्रांस और ऑस्ट्रिया"],
        answer: "फ्रांस और ब्रिटेन"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'लुई XVI' किस देश का राजा था?",
        options: ["फ्रांस", "ब्रिटेन", "रूस", "प्रशिया"],
        answer: "फ्रांस"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'मैरी एंटोनेट' किस देश की राजकुमारी थी?",
        options: ["ऑस्ट्रिया", "ब्रिटेन", "रूस", "प्रशिया"],
        answer: "ऑस्ट्रिया"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'रोबेस्पियर' की मृत्यु कैसे हुई?",
        options: ["गिलोटिन", "फांसी", "युद्ध", "प्राकृतिक मृत्यु"],
        answer: "गिलोटिन"
    },
    {
        question: "फ्रांसीसी क्रांति के दौरान 'नेपोलियन' की मृत्यु कैसे हुई?",
        options: ["गिलोटिन", "फांसी", "युद्ध", "प्राकृतिक मृत्यु"],
        answer: "प्राकृतिक मृत्यु"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 20;
let timer;

// Start Button Event Listener
document.getElementById("startButton").addEventListener("click", () => {
    document.getElementById("startButton").style.display = "none";
    loadQuestion();
});

// प्रश्न लोड करें
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    startTimer();
}

// उत्तर जांचें
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const lightElement = document.getElementById("light");

    if (selectedOption === currentQuestion.answer) {
        lightElement.style.backgroundColor = "green";
        alert("सही उत्तर!");
        score++;
    } else {
        lightElement.style.backgroundColor = "red";
        alert(`गलत उत्तर! सही उत्तर है: ${currentQuestion.answer}`);
    }
    clearInterval(timer);
    nextQuestion();
}

// अगला प्रश्न
function nextQuestion() {
    const lightElement = document.getElementById("light");
    lightElement.style.backgroundColor = "#ccc"; // Reset light color

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        timeLeft = 20;
        loadQuestion();
    } else {
        endGame();
    }
}

// टाइमर शुरू करें
function startTimer() {
    const timerElement = document.getElementById("timer");
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `समय: ${timeLeft} सेकंड`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("समय समाप्त!");
            nextQuestion();
        }
    }, 1000);
}

// गेम समाप्त
function endGame() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `अंतिम स्कोर: ${score} / ${questions.length}`;
    document.getElementById("question").textContent = "गेम समाप्त!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("timer").textContent = "";
}