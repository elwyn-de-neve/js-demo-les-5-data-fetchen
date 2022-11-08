# Vanilla JS project opzetten

1. NPM initialiseren: `npm init`
2. GIT initialiseren: `git init`
3. GIT ignore opzetten:
```
/.idea
.parcel-chache
/dist
/node_modules
```
4. Dependencies installeren: 
  - `npm install parcel --save-dev`
  - `npm install axios`
5. Scripts toevoegen aan package.json
```
"start" : "parcel src/index.html",
"build" : "parcel build"
```
6. `src` map aanmaken
7. Koppelen stylesheets & scripts:
```
<script defer src="main.js" type="module"></script>
<link rel="stylesheet" href="styles.css">
```

# Data fetchen
1. Project starten: `npm run start` _Let op: Gebruik niet meer de 'view in browser' knop!_
2. Element in HTML creëren om data in te injecteren 
3. Verwijzing maken naar element 
4. Asynchrone functie maken om data te fetchen _Let op: Vergeet je functie niet aan te roepen!_
5. Try-catch blok maken om errors af te vangen 
6. Get request met axios en deze opslaan in een variabele _Let op: importeer axios & gebruik await keyword_
7. URI opslaan in variabele en in request plaatsen 
8. Loggen van response om te checken of het is gelukt 
9. Errors afvangen in catch blok 
10. Map door array (data) heen en creëer voor elke entry een element in JS creëren om data in te injecteren _Let op: Gebruik in plaats van innerHTML!_
11. Attributen toekennen waar nodig 
12. Voeg data toe aan het element 
13. Voeg alle items toe aan de list

# Event listener
1. Button in HTML creëren om de functie aan te roepen 
2. Verwijzing maken naar element 
3. Event listener toevoegen aan element
4. Functie aanroep in event listener plaatsen
5. Voorkom dat de lijst twee keer gevuld wordt `list.replaceChildren`

# Parameters meegeven aan request
1. Element in HTML creëren om input mee te geven 
2. Verwijzing maken naar elementen
3. Variabele meegeven als argument aan de functie
4. Parameter ontvangen in functie
5. Parameter verwerken in request
