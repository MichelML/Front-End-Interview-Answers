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
