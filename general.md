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
