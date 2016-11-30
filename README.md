#Front-end Job Interview Answers
This file contains a number of front-end interview questions and their answers.

This project originates from [Front-end Job Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions).

**Note:** Keep in mind that these are just answers given by one or a few people, and thus the contributors of this repository do not guarantee the results coming out of responding with the answers of this repository in the context of a real interview.

## Table of Contents

  1. [General Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/general.md)
  1. [HTML Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/html.md)
  1. [CSS Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/css.md)
  1. [JS Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/javascript.md)
  1. [Testing Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/testing.md)
  1. [Performance Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/performance.md)
  1. [Network Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/network.md)
  1. [Coding Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/coding.md)
  1. [Fun Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/fun.md)

## Getting Involved

  1. [Aknowledgements](#Aknowledgements)
  1. [License](https://github.com/h5bp/Front-end-Developer-Interview-Questions/blob/master/LICENSE.md)

#### General Questions:

* What did you learn yesterday/this week?
	* (exemple) je travaille présentement à développer mon processus de développement (build process). Ce que je tente de réaliser concrètement est d'optimiser un maximum de tâches possibles pour réduire mes activités à simplement coder mes applications dès le départ. J'essais également d'intégrer à part entière la pratique de TDD dans mon style de développement. Pour arriver à ces fins, j'en suis présentement à utiliser gulp comme outil principal, à travers duquel toutes les tâches externes à coder l'application sont automatisées: optimisation d'images, minification des resources css et javascript, conversion de fichier SASS à CSS, JSX à JS, automatisation du test runner, déploiement, version développement vs version production, déplacement des ressources du dossier source vers le dossier distribution, autoprefixer. Webpack est également très utilise pour la gestion des ressources. 
	* je développe aussi actuellement une application full-stack permettant de créer des événements rapidement et simplement de manière synchroniser avec Google Calendar. J'utilise plusieurs technologies dont Knockout.js, Jquery, Express, Node.js et d'autres technologies à travers ce projet, et j'ai une vision à savoir ou j'aimerais amener le projet à court-moyen terme. J'aimerais en faire une application omniprésente, c'est-à-dire disponible sur toutes les plateformes mobile, web, extension chrome, desktop.
	* J'ai un autre projet sur lequel je travaille actuellement qui utilise React avec Babel pour utiliser les feature ES6, et qui se veut être une application web permettant d'accéder aux transports disponibles d'un point A à B, que le end-user soit en ligne ou non, utilisant un Service Worker à cette fin. Ce projet me permet également d'intégrer le paradigme de composition primant sur l'inhéritance, un concept prôné par React et par les dev JS, ainsi que tout programmeur OO depuis The Gang of Four.
	
* What excites or interests you about coding?
	* Le pouvoir de créer, et non juste d'en parler
	* La croyance fondamentale que la majorité des problèmes significatifs de notre société d'aujourd'hui seront pour le moins en partie régler par des logiciels. 
	* Le défi intellectuel constant
	* L'apprentissage continu inévitable, j'aime apprendre
* What is a recent technical challenge you experienced and how did you solve it?
	* Le management de l'authentication OAuth2 et d'autres style d'authentication à travers une même base de données. Comment 
	* Repenser le processus de développement d'une application au complet (déploiement avant toute chose pour instaurer la séquence complète, après ça il devient plus facile de développer la solution complète rapidement). Ce que je tente de réaliser concrètement est d'optimiser un maximum de tâches possibles pour réduire mes activités à simplement coder mes applications dès le départ. J'essais également d'intégrer à part entière la pratique de TDD dans mon style de développement. Pour arriver à ces fins, j'en suis présentement à utiliser gulp comme outil principal, à travers duquel toutes les tâches externes à coder l'application sont automatisées: optimisation d'images, minification des resources css et javascript, webpack bundling, conversion de fichier SASS à CSS, JSX à JS, automatisation du test runner, déploiement, version développement vs version production, déplacement des ressources du dossier source vers le dossier distribution, autoprefixer, live reload. Webpack est également très utilise pour la gestion des ressources. 
* What UI, Security, Performance, SEO, Maintainability or Technology considerations do you make while building a web application or site?
	* UI: mobile first (idéalement toutes les features sont présentes tant sur mobile que sur desktop). Responsive. Offline first. Error-handling optimal. Page rendering le plus rapide et fluide possible. S'il y a des formulaires, faire en sorte que ce soit le plus conviviale possible. KISS (Keep it simple stupid), eliminer le plus de barrières pour le end-user, de sorte qu'ils accomplissent son objectif de la manière la plus fluide et réjouissante possible. Créer l'interface à l'image de l'entreprise représentée. Créer des interfaces les plus attirantes possibles. Les end-users sont des révélateurs de vérité. Apparence optimale cross-browser, cross-devices (tablettes, mobiles, desktop). 
	* Securité: À avoir en tête 1) Client XSS, IFrame, CORS, Cookie, HTML5 breaches
	* SEO: https://blog.kissmetrics.com/simple-guide-to-seo/ reference for a quick start
	* Maintainability: KISS, DRY, reutilisabilité, éliminer les répétitions, utiliser des guides de style et s'entendre sur le même style à l'interne.
	* Technologies: le moins de dépendence possibles, utiliser des technologies qui auront de fortes chances d'être maintenues à travers le temps, préférablement bien maîtrisées par tous les membres de l'équipe, utliser des technologies qui accélèrent le processus de développement (Gulp) et le rend de meilleur qualité, et plus flexible à travers le temps (Jasmine (tdd), MVC forcé, CSS modulaire, composition over inhéritance). 
* Talk about your preferred development environment.
	* Personellement, j'utlise actuellement vim directement du commandline sur un MacBook Pro avec un grand écran seulement, et un autre pour de la documentation seulement au besoin. J'utilise le pomodoro technique pour compter mon temps proactif. Dans mon commandeline, j'ai normalement deux à trois fenêtres d'ouvertes, une pour coder (vim), une petite pour effectuer des commandes, une pour rouler mes gulp tasks. Dans mon écran, j'ai également un browser ouvert la plupart du temps chrome pour à la fois voir mon oeuvre sur différents devices et pour avoir accès au chrome dev tool.
* Which version control systems are you familiar with?
	* Git-GitHub seulement: add, push, pull, commit, branch, checkout sont les commandes que j'ai surtout utilisé pour le moment. Mon github est disponible [ici](https://github.com/MichelML) 
* Can you describe your workflow when you create a web page?
	* Ultérieurement je commençais par coder immédiatement sans établir le processus complet de développement de la minification et concatenation des resources, passant par les tests, jusqu'au déploiement. Maintenant, j'essais d'avoir la discipline d'établir le processus complet de déploiement avant de commencer à coder. _Establish the complete build process first, than code_ s'avere la meilleure approche pour le moment pour moi, parce que ton cerveau est laisser libre de créer une fois que 'la table est mise' (tu ne penses qu'à coder).
* If you have 5 different stylesheets, how would you best integrate them into the site?
	* 1) Identifier si des règles peuvent être éliminés et les éliminer 2) Identifier les règles qui doivent être présentes lors du téléchargement de la page,les séparer du reste des autres fichiers, les minifier et insérer ces règles inline dans le _head_ tag de la page HTML 3) concateniser, autoprefixer, minifier les fichiers restants, puis les lazy-loader suivant le téléchargement de la page HTML (webpack prend soin de ceci automatiquement, autrement des modules gulp sont disponibles pour prendre soin de transformer les ressources css de la page en 'formule' lazy-load)
* Can you describe the difference between progressive enhancement and graceful degradation?
	* Ce sont des principes qui se ressemblent beaucoup
	* Graceful degradation signifie qu'on part d'une experience utilisateur optimale, et qu'on ajuste celle-ci en fonction de l'agent utilisateur (user-agent). Un agent utilisateur supportant moins de fonctionnalité recevra donc une expérience diminuée, mais utilisable quand même. Exemple: adapter l'expérience aux navigateurs moins récents.
	* Progressive inhancement signifie que nous partons avec une expérience utilisateur construite pour un agent utilisateur ayant peu de fonctionnalité, et qu'on ajoute des fonctionnalité plus les capacités de l'agent utilisateur est grande. Example: mobile-first approach, et plus récemment, offline-first approach.
* How would you optimize a website's assets/resources?
	* 1) do we need them? If not, remove them. 2) Concatenifier et minifier le plus possible, 3) Compresser les images le plus possible, 4) utiliser le meilleur format d'image pour l'image en question (example: graphiques = svg) 5) Mettre en cache les ressources 5) Optimiser le jank à partir du [Chrome Dev Tools Network](https://developers.google.com/web/tools/chrome-devtools/network-performance/resource-loading#view-network-timing-details-for-a-specific-resource) 5) optimiser le code javascript le plus possible encore une fois pour eliminer le jank et manager la memoire
* How many resources will a browser download from a given domain at a time?
  * Cela dépend du browser, mais pour les browser récents la reponse est de 6 à 8 (voir thread interessant ici a ce sujet, considerant le DNS lookup time au passage)[http://stackoverflow.com/questions/7456325/get-number-of-concurrent-requests-by-browser](http://stackoverflow.com/questions/7456325/get-number-of-concurrent-requests-by-browser)
  * What are the exceptions?
* Name 3 ways to decrease page load (perceived or actual load time).
	* Utiliser le bon type d'image, utiliser l'attribut srcset
	* Compresser et resizer les images et les autres assets le plus possible
	* Concatenifier et minifier les ressources (Minimiser les HTTP requests)
	* Lazy-load, async load, et defer load toutes les ressources possibles
	* Reduire les CSS rules le plus possible, optimiser et reduire le code javascript le plus possible
	* Cacher les ressources et les assets pour les secondes visites
* If you jumped on a project and they used tabs and you used spaces, what would you do?
	* La majorité gagne, et je change mon vim editor pour tab au lieu de spaces. En faisant une copie d'avance, j'effectue une command vim me permettant de faire le changement dans tous les fichiers de mon dossier de travail
* Describe how you would create a simple slideshow page.
	* On top of my head:
	* Stragegy: SPA with event listener sur window.hash (www.aaa.com#slide-1, www.aaa.com#slide-2, etc...)
	* 1) Produire la view par default avec un container pour insérer les slides et insérer deux clickable elements comme back et next buttons a l'exterieur du container
	* 2) Produire des CSS rules globales s'appliquant à l'ensemble des diapos, au besoin en créer pour des diapos spécifiques
	* 3) Produire les views templates dans un script js sous forme de strings
	* 4) Créer deux events listeners a) un event listener sur le back button qui présente la vue précédente lorsque la slide actuelle n'est pas la numero 1 et b) un event listener sur le next button qui présente la vue suivante lorsque la slide actuelle n'est pas la dernière
* If you could master one technology this year, what would it be?
	* React (integrer le concept de composition over inheritance)
	* Angular pour (masterer front-end MVC)
	* ES6 (integrer les meilleurs pratiques)
	* Integrer le principe SCRUM
	* Jasmine (integrer le tdd a ma pratique courante)
	* Node.js eco-system ++ (augmenter ma full-stackibility)
	* Python pour intelligence artificielle
* Explain the importance of standards and standards bodies.
	* Les standards indiquent comment les choses fonctionnent et les meilleures pratiques d'un domaine. Elles sont importantes pour s'assurer que, par exemple, le code que nous écrivons fonctionne de la même manière partout.
	* Les standards bodies, comme ECMA (ECMASCRIPT), sont importants car ils dictent les meilleures pratiques. Ce sont généralement les experts d'un domaine qui forme les standards bodies.
* What is Flash of Unstyled Content? How do you avoid FOUC?
	* FOUC est causé lorsque le contenu est chargé avant que les styles ne soient appliqués au contenu. Il se produit lorsque les balises de style sont placées après d'autres contenus ou appliquées de manière asynchrone, par exemple, par des scripts. Pour éviter le FOUC, les styles doivent être placés de manière à ce qu'ils puissent être chargés et appliqués dans le même processus de rendu que les éléments HTML. Le plus simple est de les placer dans la tête, et d'éviter d'appliquer des styles par des scripts à la première charge.
* Explain what ARIA and screenreaders are, and how to make a website accessible. 
	* Ils sont pour l'accessibilité. Pour rendre un site Web accessible, nous devrions essayer de suivre l'utilisation d'éléments HTML, par exemple, h1 pour les en-têtes et la section pour les sections. D'autres tags à considérer serait main, aside, header, menu, form, audio et autres. Aussi, il est bon de prendre soin d'utiliser le contenu visuel, comme ne pas oublier d'ajouter un attribut alt à img tags.
* Explain some of the pros and cons for CSS animations versus JavaScript animations.
	* pros: ils utilisent le GPU et non CPU. Ne freine pas le code JavaScript.
	* cons: Logique intégrée au CSS et non au JavaScript. Pas supporter dans les vieux browsers.
* What does CORS stand for and what issue does it address?
	* [Cross Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS). Il s'agit d'un standard pour rendre possible les requetes HTTP dans différents contextes:
		* AJAX a des third-party APIs
		* Web fonts
		* WebGL textures
		* Images et video frames drawn to a canva using drawImage
		* stylesheets (CSS)
		* scripts js

#### HTML Questions:

* What does a `doctype` do?
	* [<! DOCTYPE> indique au navigateur quelle version de HTML (ou XML) vous avez utilisée pour écrire le document. Doctype est une déclaration, pas un tag; Vous pouvez également y référer comme «déclaration de type de document» ou «DTD» pour abréger.](https://developer.mozilla.org/en-US/docs/Glossary/Doctype)
* What's the difference between full standards mode, almost standards mode and quirks mode?
	* Ce sont des modes utilisés par les browser rendering engines. En mode standard, le engine affichera une page en fonction des spécifications HTML et CSS. Le mode Quirks est de rendre les pages 'legacy' écrites avant que ces normes soient fixées. Les pages legacy contiennent des comportements non standard émulés dans les anciens navigateurs comme Internet Explorer 5 ou Navigator 4. une des raisons pour laquelle on utilise le doctype est pour amener les browsers à utliser le mode standard avec une balise <! DOCTYPE html>.
* What's the difference between HTML and XHTML?
	* [Ces deux syntaxes sont définies par la norme HTML5. Le choix de la syntaxe est indiqué par le type MIME, qui est envoyé dans l'en-tête HTTP Content-Type. Le type MIME pour la syntaxe HTML est text/html et le type MIME pour la syntaxe XHTML est application/xhtml+xml.](http://mdn.beonex.com/en/XHTML.html)
* Are there any problems with serving pages as `application/xhtml+xml`?
 * IE < 8 affiche une boîte de dialogue pour les pages au lieu de les rendre correctement (HTMLish).
* How do you serve a page with content in multiple languages?
	* Un bon overview est [ici](https://www.nomensa.com/blog/2010/7-tips-for-multi-lingual-website-accessibility)
* What kind of things must you be wary of when design or developing for multilingual sites?
	* Voir [lien](https://www.nomensa.com/blog/2010/7-tips-for-multi-lingual-website-accessibility) à la réponse précédente
* What are `data-` attributes good for?
* Consider HTML5 as an open web platform. What are the building blocks of HTML5?
	* Il permet aux éléments HTML de contenir des informations supplémentaires sans utiliser des attributs non standard.
* Describe the difference between a `cookie`, `sessionStorage` and `localStorage`.
	* SessionStorage, localStorage et les cookies sont tous utilisés pour stocker des données sur le côté client. Chacun a sa propre limite de stockage et d'expiration. SessionStorage: similaire à localStorage mais expire lorsque le navigateur est fermé (pas l'onglet). Cookie: stocke les données qui doivent être renvoyées au serveur avec les requêtes suivantes.
* Describe the difference between `script`, `script async` and `script defer`.
	* `<script>` arrête le processus de rendu, et télécharge et exécute un script. <script async> n'arrêtent pas le processus de rendu lors du téléchargement asynchrone d'un script. Lors de la fin du téléchargement, il arrête le rendu et exécute le script. <script defer> n'arrêtent pas le processus de rendu lors du téléchargement asynchrone d'un script. Lors de la finition du rendu, il exécute le script
* Why is it generally a good idea to position CSS `link`s between `<head></head>` and JS `script`s just before `body`? Do you know any exceptions?
 * At a high level, pour que la page soit blanche le moins longtemps possible et qu'elle soit styliser avant le loading du HTML. Les scripts sont mis à la fin du body pour ne pas blocker le rendement de la page, et dans le cas ou le JS doit effectuer des operations sur le DOM, le DOM doit d'abord avoir été téléchargé. Les script avec defer pourrait theoriquement etre mis n'importe ou dans la page. Les CSS qui n'ont pas besoin d'être loader avant le HTML devrait être lazy loader pour accélérer le rendement de la page. 

* What is progressive rendering?
	* Le rendu progressif est le nom donné aux techniques utilisées pour rendre le contenu à afficher le plus rapidement possible. Il a été utilisé avec beaucoup plus de prévalence dans les jours précédant Internet à large bande, mais il est toujours utile dans le développement moderne que les connexions de données mobiles sont de plus en plus populaires (et peu fiable!) Exemples de ces techniques: lazy-loading d'images (srcset), soit loader une image quand elle vient dans le bon viewport des navigateurs au lieu de charger toutes les images au chargement de page. Lazy-loading de resources (css, et js).
* Have you used different HTML templating languages before?
	* Yes. Jade-Pug, et en ce moment j'essais EJS, mais j'aime bien Pug. Dans ce sens, React peut egalement etre vue comme un templating language.

#### CSS Questions:

* What is the difference between classes and IDs in CSS?
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
* Describe Floats and how they work.
* Describe z-index and how stacking context is formed.
* Describe BFC(Block Formatting Context) and how it works.
* What are the various clearing techniques and which is appropriate for what context?
* Explain CSS sprites, and how you would implement them on a page or site.
* What are your favourite image replacement techniques and which do you use when?
* How would you approach fixing browser-specific styling issues?
* How do you serve your pages for feature-constrained browsers?
  * What techniques/processes do you use?
* What are the different ways to visually hide content (and make it available only for screen readers)?
* Have you ever used a grid system, and if so, what do you prefer?
* Have you used or implemented media queries or mobile specific layouts/CSS?
* Are you familiar with styling SVG?
* How do you optimize your webpages for print?
* What are some of the "gotchas" for writing efficient CSS?
* What are the advantages/disadvantages of using CSS preprocessors?
  * Describe what you like and dislike about the CSS preprocessors you have used.
* How would you implement a web design comp that uses non-standard fonts?
* Explain how a browser determines what elements match a CSS selector.
* Describe pseudo-elements and discuss what they are used for.
* Explain your understanding of the box model and how you would tell the browser in CSS to render your layout in different box models.
* What does ```* { box-sizing: border-box; }``` do? What are its advantages?
* List as many values for the display property that you can remember.
* What's the difference between inline and inline-block?
* What's the difference between a relative, fixed, absolute and statically positioned element?
* The 'C' in CSS stands for Cascading.  How is priority determined in assigning styles (a few examples)?  How can you use this system to your advantage?
* What existing CSS frameworks have you used locally, or in production? How would you change/improve them?
* Have you played around with the new CSS Flexbox or Grid specs?
* How is responsive design different from adaptive design?
* Have you ever worked with retina graphics? If so, when and what techniques did you use?
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?

#### JS Questions:

* Explain event delegation
* Explain how `this` works in JavaScript
* Explain how prototypal inheritance works
* What do you think of AMD vs CommonJS?
* Explain why the following doesn't work as an IIFE: `function foo(){ }();`.
  * What needs to be changed to properly make it an IIFE?
* What's the difference between a variable that is: `null`, `undefined` or undeclared?
  * How would you go about checking for any of these states?
* What is a closure, and how/why would you use one?
* What's a typical use case for anonymous functions?
* How do you organize your code? (module pattern, classical inheritance?)
* What's the difference between host objects and native objects?
* Difference between: `function Person(){}`, `var person = Person()`, and `var person = new Person()`?
* What's the difference between `.call` and `.apply`?
* Explain `Function.prototype.bind`.
* When would you use `document.write()`?
* What's the difference between feature detection, feature inference, and using the UA string?
* Explain Ajax in as much detail as possible.
* What are the advantages and disadvantages of using Ajax?
* Explain how JSONP works (and how it's not really Ajax).
* Have you ever used JavaScript templating?
  * If so, what libraries have you used?
* Explain "hoisting".
* Describe event bubbling.
* What's the difference between an "attribute" and a "property"?
* Why is extending built-in JavaScript objects not a good idea?
* Difference between document load event and document DOMContentLoaded event?
* What is the difference between `==` and `===`?
* Explain the same-origin policy with regards to JavaScript.
* Make this work:
```javascript
duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]
```
* Why is it called a Ternary expression, what does the word "Ternary" indicate?
* What is `"use strict";`? what are the advantages and disadvantages to using it?
* Create a for loop that iterates up to `100` while outputting **"fizz"** at multiples of `3`, **"buzz"** at multiples of `5` and **"fizzbuzz"** at multiples of `3` and `5`
* Why is it, in general, a good idea to leave the global scope of a website as-is and never touch it?
* Why would you use something like the `load` event? Does this event have disadvantages? Do you know any alternatives, and why would you use those?
* Explain what a single page app is and how to make one SEO-friendly.
* What is the extent of your experience with Promises and/or their polyfills?
* What are the pros and cons of using Promises instead of callbacks?
* What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?
* What tools and techniques do you use debugging JavaScript code?
* What language constructions do you use for iterating over object properties and array items?
* Explain the difference between mutable and immutable objects.
  * What is an example of an immutable object in JavaScript?
  * What are the pros and cons of immutability?
  * How can you achieve immutability in your own code?
* Explain the difference between synchronous and asynchronous functions.
* What is event loop?
  * What is the difference between call stack and task queue?
* Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}`

#### Testing Questions:

* What are some advantages/disadvantages to testing your code?
* What tools would you use to test your code's functionality?
* What is the difference between a unit test and a functional/integration test?
* What is the purpose of a code style linting tool?

#### Performance Questions:

* What tools would you use to find a performance bug in your code?
* What are some ways you may improve your website's scrolling performance?
* Explain the difference between layout, painting and compositing.

#### Network Questions:

* Traditionally, why has it been better to serve site assets from multiple domains?
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
* Explain the following request and response headers:
  * Diff. between Expires, Date, Age and If-Modified-...
  * Do Not Track
  * Cache-Control
  * Transfer-Encoding
  * ETag
  * X-Frame-Options
* What are HTTP methods? List all HTTP methods that you know, and explain them.

#### Coding Questions:

*Question: What is the value of `foo`?*
```javascript
var foo = 10 + '20';
```
__Answer__:
  
```  
'1020'
```  


*Question: How would you make this work?*
```javascript
add(2, 5); // 7
add(2)(5); // 7
```
__Answer__:  
```javascript  
"use strict";
function addGenerator() {
  let allArgs = [];
  let sum = 0;

  return function add (...addArgs) {
    allArgs = allArgs.concat(addArgs); 

    if (allArgs.length >= 2) {
      sum = allArgs.reduce((sum, val) => sum + val, 0);
      allArgs = [];
      return sum;
    }

    return add;
  };
}

const add = addGenerator();

add(1,2); // 3
add(1)(2); // 3
// We could also do:
add(1)(2,234 /*...and so on*/); // 237
add(1,2,3,4,5,6,6 /*...and so on*/); // 27
// The following would throw error and we should handle it correctly depending on the context
// add(1,2,3,4,5,6,6)(2); 
``` 


*Question: What value is returned from the following statement?*
```javascript
"i'm a lasagna hog".split("").reverse().join("");
```

__Answer__:
```javascript 
"goh angasal a m'I"
``` 

*Question: What is the value of `window.foo`?*
```javascript
( window.foo || ( window.foo = "bar" ) );
```
__Answer__:
```javascript 
// If window.foo is declared with a truthy value earlier
// it will be the value of window.foo
// Otherwise, it will return "bar"
```

*Question: What is the outcome of the two alerts below?*
```javascript
var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);
```
__Answer__:
```javascript 
// first alert (inside IIFE) will be "Hello World"
// second alert will be "Helloundefined"
```

*Question: What is the value of `foo.length`?*
```javascript
var foo = [];
foo.push(1);
foo.push(2);
```
__Answer__:  
```javascript  
2
```   

*Question: What is the value of `foo.x`?*
```javascript
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
```
__Answer__:
```javascript
undefined
```

*Question: What does the following code print?*
```javascript
console.log('one');
setTimeout(function() {
  console.log('two');
}, 0);
console.log('three');
```
__Answer__:
```javascript
'one'
'three'
'two'
// worth knowing: setTimeout is always set to at least 4 ms, even if set below 4
```

#### Fun Questions:

* What's a cool project that you've recently worked on?
* What are some things you like about the developer tools you use?
* Who inspires you in the front-end community?
* Do you have any pet projects? What kind?
* What's your favorite feature of Internet Explorer?
* How do you like your coffee?


#### Aknowledgements

This project originated from another project called [Front-end Developer Interview Questions](https://github.com/h5bp/Front-end-Developer-Interview-Questions), which started in 2009 as a collaboration of [@paul_irish](https://twitter.com/paul_irish) [@bentruyman](https://twitter.com/bentruyman) [@cowboy](https://twitter.com/cowboy) [@ajpiano](https://twitter.com/ajpiano)  [@SlexAxton](https://twitter.com/slexaxton) [@boazsender](https://twitter.com/boazsender) [@miketaylr](https://twitter.com/miketaylr) [@vladikoff](https://twitter.com/vladikoff) [@gf3](https://twitter.com/gf3) [@jon_neal](https://twitter.com/jon_neal) [@sambreed](https://twitter.com/sambreed) and [@iansym](https://twitter.com/iansym), and have received contributions from over [100 developers](https://github.com/h5bp/Front-end-Developer-Interview-Questions/graphs/contributors).
