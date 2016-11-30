#### CSS Questions:

* What is the difference between classes and IDs in CSS?
  * Bien qu'il soit possible d'assigner le même ID à plusieurs éléments dans la page, c'est une convention d'utilier des ID unique, alors qu'une même classe peut être assigné à plusieurs éléments
  * Dans css, les règles utilisant le ID ont précédence sur ceux utilisant des classes
* What's the difference between "resetting" and "normalizing" CSS? Which would you choose, and why?
  * Normaliser est l'établissement de règles css visant à régler les différences incohérences à travers les navigateurs
    * On utilise la normalisation pour s'assurer que le design du site soit similaire a travers les navigateurs, et par consequent j'utilise par defaut
  * Resetting retire toute les regles par defaut utiliser par les navigateurs
    * Si je veux batir quelque chose d'unique ou d'inusuel, il est bon d'utiliser le reset et de partir de zero regle completement
* Describe Floats and how they work.
  * Il y a left, right et none pour le float. Chaque valeur indique comment un élément doit flotter. Lorsque le float est réglé, chaque élément sort de son positionnement 'normal' et est déplacé dans la direction spécifiée, jusqu'à ce qu'il reçoive son conteneur ou un autre élément flottant.
* Describe z-index and how stacking context is formed.
  * A partir d'un element racine et d'elements enfants positiones un contexte d'empilage est créé, le z-index permet de creer des 'niveau d'empilage' permettant de faire apparaitre des elements 'devant' d'autres et vice versa. 
* Describe BFC(Block Formatting Context) and how it works.
  * C'est la région dans laquelle la disposition des boîtes de blocs se produit et dans laquelle les flotteurs interagissent les uns avec les autres.
* What are the various clearing techniques and which is appropriate for what context?
  * 
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
  * Je n'ai jamais travaillé avec ca mais je suis curieux d'en savoir plus et de savoir si ce savoir est bon. 
* Is there any reason you'd want to use `translate()` instead of *absolute positioning*, or vice-versa? And why?
