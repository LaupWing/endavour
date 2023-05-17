# Endeavour Assessments
> This document outlines the decisions I made regarding technologies and code choices for the Endeavour assessments. First assessment Anagram, second assessment Rijksmuseum api. 

## Table of Contents
1. [Anagram](#anagram)
   - [Installation](#installation)
   - [Solution](#solution)
2. [Rijksmuseum](#rijksmuseum)
   - [Installations](#installations)
   - [Which framework I would choose to develop it, if I could only choose one.](#which-framework-i-would-choose-to-develop-it-if-i-could-only-choose-one)
   - [Main points for choosing technology](#main-points-for-choosing-technology)
   - [Pros and cons](#pros-and-cons)
   - [API](#api)
   - [Tables](#tables)

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

### Installations
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

### Which framework I would choose to develop it, if I could only choose one.
If I were to choose only one framework for developing the web application, I would choose Next.js 12. The main reason for this choice is the server-side rendering (SSR) capability of Next.js, which fetches code on the server and populates the page the user is currently on. This elminates the need to manually create loading states and loading components, enhancing the usesr experience.

In addtion to SSR feature, Nextjs offers several advantages. It provides a seamless and efficient development experience, making it easy and fast to build web applications. Next.js also includes a well-designed boilerplate that includes Typescript support, saving time and effort when setting up a project.

### Main points for choosing technology
*  ☑️ What are the requirements for this project?
   *  Does it need an api?
   *  How big is this project?
*  ⏲️ Speed. Speed of development is important
*  🧑🏼‍🤝‍🧑🏼 Community. Is the community big? If the community is big it is easier to solve an bug.
*  ♻️ Updated. Is the technology still getting updates?

### Pros and cons
Pros and cons of the frameworks in the context of this assessment.
#### Inertia
**pros**:
*  Easy postgres/mysql database integration
*  Seamless vue integration
*  No loading states

**cons**:
*  Steep learning curve
*  Setup with typescript is complicated

#### Vue3
**pros**:
*  Easy setup
*  Easy to understand

**cons**:
*  Need to manage loading states
*  Components in seperate files

#### Nextjs 12
**pros**:
*  Easy setup
*  Easy to understand
*  Seamless typescript integration
*  Multiple components in one file

**cons**:
*  Live website is kinda slow

#### Nextjs 13
**pros**:
*  Easy setup

**cons**:
*  Typescript not fully supported
*  Very different from Nextjs 12
*  It is new. So therefore there are bound to be some unexpected errors. (Which I encountered)
*  Learning curve, because of the concept of server components


### Api
You may have noticed that there is also a Laravel API directory containing a Laravel API project. This project is not finished, because of the time constrained.

Although this project is not finished, I can provide you with an example of how I would have created the relationships for the data from the Rijksoverheid API response.

Below you see an art object from the Rijksoverheid API.
```json
{
   "links":{
      "self":"http://www.rijksmuseum.nl/api/nl/collection/BK-NM-1010",
      "web":"http://www.rijksmuseum.nl/nl/collectie/BK-NM-1010"
   },
   "id":"nl-BK-NM-1010",
   "objectNumber":"BK-NM-1010",
   "title":"Poppenhuis van Petronella Oortman",
   "hasImage":true,
   "principalOrFirstMaker":"anoniem",
   "longTitle":"Poppenhuis van Petronella Oortman, anoniem, ca. 1686 - ca. 1710",
   "showImage":true,
   "permitDownload":true,
   "webImage":{
      "guid":"8c3131da-1405-426f-9b23-5671a93920af",
      "offsetPercentageX":0,
      "offsetPercentageY":0,
      "width":2500,
      "height":2266,
      "url":"https://lh3.ggpht.com/OIaBDlLOhgpAQHGdfYfIh0ygXRqgBNR-tW7se4OTwOtD6dsr6xLAmp8u_pfsqJ-0EqB_wbCF_0mvCl979lWxfFIyFQQ=s0"
   },
   "headerImage":{
      "guid":"fde471c0-800c-4bea-b28e-a8523a1b643f",
      "offsetPercentageX":0,
      "offsetPercentageY":0,
      "width":1920,
      "height":460,
      "url":"https://lh3.ggpht.com/QARSFMHdk59lhi0GnyZzxvqkt3rMLpYrBI8dXqEVjnbLgcb4PudxSzYaLxju5Juo4CzwwSC2wlq2ZDUMXw54tIhgmF0=s0"
   },
   "productionPlaces":[
      "Amsterdam"
   ]
}
```
#### Tables
I would create 4 tables which will be:
*  artwork
   *  objectNumber: `string`
   *  title: `string`
   *  hasImage: `boolean`
   *  principalOrFirstMaker: `string`
   *  longTitle: `text`
   *  showImage: `boolean`
   *  permitDownload: `boolean`
*  web_image
   *  guid: `string`
   *  offsetPercentageX: `int`
   *  offsetPercentageY: `int`
   *  width: `int`
   *  height: `int`
   *  url: `string`
*  header_image
   *  guid: `string`
   *  offsetPercentageX: `int`
   *  offsetPercentageY: `int`
   *  width: `int`
   *  height: `int`
   *  url: `string`
*  links
   *  web: `string`
   *  self: `string`
*  artwork_production_places <- Junction table
   * artwork_id: `string`
   * production_place_id: `string`

### AI
I have used AI only during the second assessment. What I have noticed is that AI is good for generating boilerplate code, but not for building out the actual database or UI logic. The reason for this is that projects are large and live in separate files. To achieve the desired outcome with AI, you need to provide it with all the necessary context and ask the right questions.

But in order to ask the right questions, you need to have a good grasp of programming fundamentals. For example, during the second assessment, I asked the AI to fetch data from the database. It provided me with code to retrieve all the data, but based on my programming knowledge, I realized that it wasn't the most efficient approach since it fetched a large amount of unnecessary data. This highlights the importance of understanding programming concepts and making informed decisions to optimize code performance.

To summarize:

*  To effectively utilize AI, it is essential to have a strong foundation in programming.
*  AI can be particularly useful for generating boilerplate code, such as creating TypeScript types or generating simple components with pre-defined styling using Tailwind CSS.