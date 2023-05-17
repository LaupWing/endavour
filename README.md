# Endeavour Assessments
> This document outlines the decisions I made regarding technologies and code choices for the Endeavour assessments. First assessment Anagram, second assessment Rijksmuseum api. 

## Anagram
The first assessments involves taking an array of strings and determing which words in the list are exact anagrams of each other. Initially, I was not familiar with the concept of anagrams, so it took me a little while to grasp the concept.

The goal of the assessment is to transform the given array from:
```js
[
   'rope',
   'pore',
   'repo',
   'red rum',
   'murder',
   'listen',
   'silent',
   'endeavour',
]
```
To the following format:
```js
[
   ['rope', 'pore', 'repo'],
   ['red rum', 'murder'],
   ['listen', 'silent'],
   ['endeavour'],
]
```

### Installation
```
1. Clone this repository

2. cd into 📁 anagram

3. run npm install (assuming you have nodejs installed)

4. npm run start
```

### Solution
```ts
const input = ["rope", "pore", "repo", "red rum", "murder", "listen", "silent", "endeavour"]


const anagramz = input.reduce((previous: any, current, currentIndex, array) => {
   if(current){
      const alreadyExists = previous.find((x: string[]) => x.includes(current))
      if(alreadyExists){
         return [...previous]
      }
   }

   const letterList = (word: string) => (word.split("").filter(x => x !== "")) 
   const letters = letterList(current)
   const filteredOutCurrent = array.filter((_, index) => index !== currentIndex)
   const anagram = filteredOutCurrent.filter(x => letters.every(y => letterList(x).includes(y)) )
   
   return [...previous, [current, ...anagram]]
}, [])
```

The first thing I noticed was that I needed to transform the array, **reducing** its length. Therefore, I chose to utilize the reduce array method.

I checked within the `if` block whether the current iteration already exists in the array. If that is the case, nothing will be added, and the array will remain unmodified.

If that is not the case, the anagram algorithm will start. To check if a certain word can be an anagram of another word, I need to split the word, remove whitespaces and store the individual letters separately in an array. This algorithm is stored in the variable `letterList`.

To determine if a word is an anagram of another word, I need to check if every letter in the array is present in the target word. To solve this problem, I utilized the `every` method.


## Rijksmuseum
> [Click here to see the live website](https://endavour.vercel.app/)

For this assignment, I have decided to showcase the majority of my technical skills. I consider myself a versatile developer who has taught myself how to efficiently learn various technologies. In my opinion, a good developer is capable of seamlessly transitioning to different technologies at a moment's notice.

Therefore, I have made the decided to develop the same application using various technologies.

Technology | #finished 
--- | --- 
Inertia | ✔️ 
Vue3 | ✔️ 
Nextjs12 | ✔️ 
Nextjs13 | ✔️ 
Gatsby | ❌
Wordpress | ❌ 

I have developed the web application using the most popular and widely-used frameworks available at the current time. However, due to time constraints that I set for myself, I did not include Gatsby and Wordpress in this assessment.

💨All of the created projects are using tailwind for styling. Why tailwind?

*  Not switching files. Constantly switching files takes your focus away from coding the actual application if you are constantly switching from CSS file to HTML.
*  Easy to understand. Tailwind is easy to understand if you are familiar with CSS. One of the advantages is that you don't have to learn new class names since they closely resemble actual CSS syntaxes.

### Installation
For all of the installation it is required to insert your own api key in the `.env` file.

```
RIJKS_MUSEUM_APIKEY=YOUR_API_KEY
```
<details>
   <summary>Intertia</summary>
      1. Clone this repository

      2. cd into 📁 laravel-vue-inertia

      3. run npm install (assuming you have nodejs installed)

      4. run composer install

      5. run php artisan serve

      6. open another terminal and run npm run dev
</details>

<details>
   <summary>Vue3</summary>
      1. Clone this repository

      2. cd into 📁 vue3

      3. run npm install (assuming you have nodejs installed)

      4. run npm run dev
</details>

<details>
   <summary>Nextjs 13 & Nextjs 12</summary>
      1. Clone this repository

      2. cd into 📁 nextjs-13 or nextjs-12

      3. run npm install (assuming you have nodejs installed)

      4. run npm run dev
</details>