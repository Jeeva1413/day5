 //1 create your own resume data in json format
var  resume={
   
    "name":"Jeeva",
    "lastname":"rajendran",
    "email":"jeevacs1413@gmail.com",
    "phonenumber":"8124851413",
    "miniproject":  "womens complaint cell",
  "education": ["onnupuram government high school", "onnupuram","10th","62%"],
  "education1": ["onnupuram government high school", "onnupuram","12th","78%"], 
  "education2": ["sri bharathi womens arts and science college","arani","BCA","80%"],
  "education3": ["muthurangam arts and science college","vellore","82%"],
  "INTEREST AND HOBBIES" :["Reading Books","Hearing Music"],
  "PERSONAL STRENGTH":[" Confidence", "can handle multiple task","self motivated"],
  "Languages":["tamil"," english","Telugu"],
  "skills":["teamponding","leadership","communication"],

}

// 2 For The Above JSOn,iterate over all for loops(for,for in,for of,forEach)
console.log(resume);
console.log(resume.name);
console.log(resume.email);

// using for loop
for (var i=0;i<resume.skills.length;i++)
{
  console.log(resume.skills[i]);
}

//using for in loop

for (var key in resume)
{
  console.log(resume[key]);
}

//using for of loop

const data=Object.entries(resume)
for (var [key,value] of data)
{
  console.log(key,value);
}

//using for each loop

data.forEach(ele => {
  const [key, value] = ele;
  console.log(key, value);
});
