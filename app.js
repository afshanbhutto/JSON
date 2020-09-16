//---------------------- Basic Level ----------------------

// Question 1:How will you access the third position of the following array?
// let arr = [5, 10, 15]
// console.log(arr[2]);


// Question 2:How will you access the second element, degree from the following object?
// let obj = { name: "Maimoona", degree: "MBBS" }
// console.log(obj.degree);


// Question 3:How will you access all elements of the following array using loops?
// let arr = [1, 2, 3, 4, 5, 6, 7]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// Question 4:How will you access all elements of the following object using loops?
// let obj = { name: "Maimoona", degree: "MBBS", age: 25 }
// for(let i=0; i<3; i++){
//         console.log(obj.name);
//     }


//---------------------- Intermediate Level ----------------------
// 1. Students' Names and Hobbies Data

// let students = [
//     {
//         name: "Amna",
//         hobbies: ["eating", "cooking"]
//     },
//     {
//         name: "Daniyal",
//         hobbies: ["arts", "shopping"]
//     },
//     {
//         name: "Fahad",
//         hobbies: ["coding", "cooking"]
//     },
//     {
//         name: "Hajra",
//         hobbies: ["sleep", "reading"]
//     }
// ];
// for(let i=0; i<students.length; i++){
//     console.log("Hobbies of "+ students[i].name );
//     for(let j=0; j<students[i].hobbies.length; j++)
//     {
//         console.log((j+1) +". "+ students[i].hobbies[j] );  
//     }
// }


// 2.Extensive Student Data Task

let students = [
    {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
        ilaqa: "Gulistan-e-Johar",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 47114
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false
    },
    {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
        ilaqa: "Lyari",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 75660
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true
    },
    {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
        ilaqa: "University Road",
        city: "Quetta",
        country: "Pakistan",
        postalCode: 82215
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
    },
    {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
        ilaqa: "University Road",
        city: "Karachi",
        country: "Pakistan",
        postalCode: 82215
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
    },
    {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
        ilaqa: "Bazar Colony",
        city: "Lahore",
        country: "Pakistan",
        postalCode: 32212
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true
    }
];

// 1.
// for(let i=0; i<students.length; i++){
//     console.log("Name: "+students[i].name);
//     if(students[i].gender === "f"){
//         console.log("Gender: Female");}
//     else{
//         console.log("Gender: Male"); 
//     }
//     console.log("City: "+students[i].address.city);
//     console.log("Score: "+students[i].admissionTestScore);
// }


// 2.Print names of female students only.
// for(let i=0; i<students.length; i++){
// if(students[i].gender === "f")
// {
//     console.log(students[i].name);
// }
// }


//3.Print names of male students only.
// for(let i=0; i<students.length; i++){
// if(students[i].gender === "m")
// {
//     console.log(students[i].name);
// }
// }


//4.Print names of students who have passed the admission test. Passing marks are 50.
// for(let i=0; i<students.length; i++){
// if(students[i].admissionTestScore >= 50)
// {
//     console.log(students[i].name);
// }
// }


//5.Print names of eligible students only (students who have internet and live in Karachi are eligible)
// for(let i=0; i<students.length; i++){
// if(students[i].address.city =="Karachi" && students[i].hasInternet == true )
// {
//     console.log(students[i].name);
// }
// }


//6.Print address of each student in this format:
// Amna's address:
// Gulistan-e-Johar in Karachi, Pakistan
// for(let i=0; i<students.length; i++){
//     console.log(students[i].name + "'s address:");
//     console.log(students[i].address.ilaqa +" in "+students[i].address.city+", "+students[i].address.country);
// }


//7.Print names and phone number of students who have Ufone.
// for(let i=0; i<students.length; i++){
//     if(students[i].phoneNo.startsWith("0333"))
//     console.log(students[i].name +" "+students[i].phoneNo);
// }


//question 8.Students who have a job or a class are placed in Group B. Print the names of students in Group A, and in Group B, in the below format:
//Group A: name1, name2
//Group B: name3, name4, name5
// let groupA = "";
// let groupB = "";

// for (let i = 0; i < students.length; i++) {
//     if (students[i]["hasJob"] == true) {
//         groupA += students[i]["name"] + ", ";
//     } else {
//         groupB += students[i]["name"] + ", ";
//     }
// }
// console.log(groupA);
// console.log(groupB);


//question 9.Print age of each student in the below format:
//Amna 's age is 29 years
// for (let i = 0; i < students.length; i++) {
//     let currentDate = new Date();
//     let difference = Math.floor((currentDate - students[i]["dob"]) / (1000 * 60 * 60 * 24 * 365));
//     students[i]['age'] = difference;
//     console.log(students[i]["name"] + "'s" + " " + "age is" + " " + difference + " " +
//         "Years")
// }


//question 10.Print the name of the oldest student
// let oldStudent = students[0].dob.getFullYear();
// for (let i = 0; i < students.length; i++) {
//   if (oldStudent > students[i].dob.getFullYear()) {
//     oldStudent = students[i].dob.getFullYear();
//   }
// }
// students.forEach(function (values) {
//   if (oldStudent == values.dob.getFullYear()) {
//     console.log(`The oldest student is ${values.name}`);
//   }
// });




//---------------------- Videos Task ----------------------
let videos = [
    {
      title: "Photoshop tutorial",
      lengthInMinutes: 70,
      category: "Education",
      uploadDate: new Date("07-22-2019"),
      tags: "design, digital, photoshop, creativity",
      features: ["Live", "360°", "HDR"],
      viewCount: 4700,
      rating: 4.3,
    },
    {
      title: "Episode # 01 - The Best Comedy Show",
      lengthInMinutes: 19,
      category: "Entertainment",
      uploadDate: new Date("07-03-2019"),
      tags: "comedy, funny",
      features: ["Subtitles/CC", "3D", "HD"],
      viewCount: 145615,
      rating: 3.9,
    },
    {
      title: "How to use FOR EACH loop - tutorial by Tech Karo",
      lengthInMinutes: 6,
      category: "Education",
      uploadDate: new Date("11-10-2018"),
      tags: "javascript, loops, web development",
      features: ["Purchased", "HD"],
      viewCount: 9004,
      rating: 4.5,
    },
  ];



//---------------------- Advance Level ----------------------
//The Recipe Card
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), 
// servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it loois like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

//solution:

// let favoriteRecipe ={
//     title: 'Alu Biryani',
//     servings: 4,
//     ingredients: ['Rice','Potatoes','Onion','Tomatos','Masala']
// }
// console.log(favoriteRecipe.title);
// console.log("Serves: "+ favoriteRecipe.servings);
// console.log('Ingredients:');
// for(let i=0; i<favoriteRecipe.ingredients.length; i++)
// {
//     console.log(favoriteRecipe.ingredients[i]);
// }






//The Reading List
// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).

// let books=[
//     {
//         title: 'Secret of Success',
//         author: 'Jolly Ben',
//         alreadyRead: true
//     },
//     {
//         title: 'The Secret Mission',
//         author: 'Robbin',
//         alreadyRead: false  
//     },
//     {
//         title: 'Beyond the Scene',
//         author: 'Elif Roy',
//         alreadyRead: true  
//     },
//     {
//         title: 'At a Glance',
//         author: 'Sharik Khan',
//         alreadyRead: false  
//     },
//     {
//         title: 'Philosophy of Life',
//         author: 'Mariya Ayaz',
//         alreadyRead: true  
//     }
// ]

//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".

// for(let i=0; i<books.length; i++){
//     console.log('" '+books[i].title +' by '+books[i].author+'".');
// }

//Now use an if/else statement to change the output depending on whether you read it yet or not. 
// If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien',
//  and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

// for(let i=0; i<books.length; i++){
//     if(books[i].alreadyRead==true)
//     console.log('You already read "'+books[i].title +'" by '+books[i].author+'.');
//     else
//     console.log('You still need to read "'+books[i].title +'" by '+books[i].author+'.');
// }

