# Simple To-do List

![To-do List Screenshot](image-readme.png)

## Overview
**To-do List** is a simple web application that allows users to add, view, edit, and mark tasks as completed. The app uses **React** for building the user interface and **Firebase** for real-time data storage. This project is great for learning how to integrate Firebase with a React application and implementing basic CRUD (Create, Read, Update) functionalities.

## Features
- Add new tasks to the list.
- Edit existing tasks.
- Mark tasks as completed.
- Responsive and basic interface.

## Technologies Used
<table align="left" height="255px">
  <tr>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/">
        <img src="https://skillicons.dev/icons?i=html" width="65px" alt="HTML5 icon"/><br/>
        <sub>
          <b>
            <pre>HTML5</pre>
          </b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/">
        <img src="https://skillicons.dev/icons?i=css" width="65px" alt="CSS3 icon"/><br/>
        <sub>
          <b>
            <pre>CSS3</pre>
          </b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/">
        <img src="https://skillicons.dev/icons?i=js" width="65px" alt="Javascript icon"/><br/>
        <sub>
          <b>
            <pre>Javascript</pre>
          </b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://react.dev/">
        <img src="https://skillicons.dev/icons?i=react" width="65px" alt="React icon"/><br/>
        <sub>
          <b>
            <pre>React</pre>
          </b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://firebase.google.com/">
        <img src="https://skillicons.dev/icons?i=firebase" width="65px" alt="Firebase icon"/><br/>
        <sub>
          <b>
            <pre>Firebase</pre>
          </b>
        </sub>
      </a>
    </td>
  </tr>
</table>
<br/><br/><br/><br/><br/><br/><br/><br/>

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/leonardohernandesq/listadetarefas
```
2. Install dependencies:
 ```bash
npm install
```

3. Set up Firebase:

Create a project in the Firebase Console.
Add Firebase to your React project by following the instructions provided in the Firebase documentation.
In the code, replace the Firebase configuration in firebase-config.js with your project's Firebase credentials.

### Firebase Setup
To integrate Firebase with your project, you'll need to set up Firebase Firestore (for storing tasks) and obtain your Firebase project's credentials. Edit a firebaseConnetion.js file in the src directory and add the Firebase configuration, as shown below:
```javascript
const firebaseConfig = {
  apiKey: "YOUR-API-KEY",
  authDomain: "YOUR-PROJECT.firebaseapp.com",
  projectId: "YOUR-PROJECT",
  storageBucket: "YOUR-PROJECT.appspot.com",
  messagingSenderId: "YOUR-ID",
  appId: "YOUR-APP-ID",
};
```


4.Start the development server:
```bash
npm start
```

Now, you can access the app in your browser at http://localhost:3000.


Visit the live site at [To-do List](https://lista-de-tarefas-lhq.netlify.app/).
