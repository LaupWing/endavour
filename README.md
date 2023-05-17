# Endeavour Assessments
> This document outlines the decisions I made regarding technologies and code choices for the Endeavour assessments.

## Anagram
The first assessments involves taking an array of strings and determing which words in the list are exact anagrams of each other. Initially, I was not familiar with the concept of anagrams, so it took me a little while to grasp the concept.

The goal of the assessment is to transform the given array from:
```json
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
```json
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

2. cd into anagram

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
