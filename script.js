
const prefixes =
{
1:"meth",
2:"eth",
3:"prop",
4:"but",
5:"pent",
6:"hex"
};

function generateName()
{
const carbons = document.getElementById("carbons").value;
const type = document.getElementById("type").value;
const position = document.getElementById("position").value;

const prefix = prefixes[carbons];

let name = "";

if(type === "alkane")
{
name = prefix + "ane";
}

if(type === "alkene")
{
name = prefix + "-" + position + "-ene";
}

if(type === "alcohol")
{
name = prefix + "an-" + position + "-ol";
}

document.getElementById("result").innerText = name;
}

function checkAnswer()
{
const answer = document.getElementById("answer").value.toLowerCase();

if(answer === "propane")
{
document.getElementById("quizResult").innerText = "Correct!";
}
else
{
document.getElementById("quizResult").innerText = "Try again.";
}
}