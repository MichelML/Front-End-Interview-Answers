#### Network Questions:

* Traditionally, why has it been better to serve site assets from multiple domains?
  * Browsers can make a limited number of requests to a domain, thus getting the files from multiple domains can help you make more requests asynchronously
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
<<<<<<< HEAD
  * When I enter a website's URL, in the transport layer, it will ask a local DNS what is the IP of the provided URL. We know the IP of the local DNS server by the DHCP protocol, when a node connects to internet and gets an IP address. After that, a browser will try to establish a TCP connection with a server having the retrieved IP by 3-way handshake. When it establish a TCP connection, the browser will form an HTTP request containing an HTTP header and body. After the HTTP request is sent and the server responds with an HTTP response, the browser will parse the HTTP response header and body, and will render the website. If the document contains additional assets, the browser will create HTTP requests for the assets and send them like above.

  * D'un point de vue Front-End, une des choses, ou sinon la chose, la plus importante à garder en tête lorsque quelqu'un tappe siteabc.com dans son navigateur, est que c'est un humain. Cet humain, lorsqu'il tappe siteabc.com ou un autre site dans son navigateur, a des attentes, vit des émotions, et a un objectif en tête. 

Si le site ne télécharge pas rapidement, une de ses attentes n'est pas rencontrée, il vit des émotions négatives, et on le freine dans son objectif.

Si le site est difficile à comprendre, une de ses attentes n'est pas rencontrée, il vit des émotions négatives, et on le freine dans son objectif.

Si le site qui apparait enfin est lait, une de ses attentes n'est pas rencontrée, il vit des émotions négatives. Il remplit quand même son objectif, mais avec moins de bonheur.

Si le site ne lui ressemble pas bien qu'il soit beau, une de ses attentes n'est pas rencontré, et il vit des émotions négatives. Il remplit quand même son objectif, mais avec moins de bonheur.

Si lorsqu'il en vient à intéragir avec le site, celui-ci ne réagit pas de la bonne façon, une autre de sens attentes n'est pas rencontré, il vit des émotions négatives, et on connait la suite.

S'il est sur un mobile, une tablette, un ordinateur, sur sa télé, ou autres, et que le site n'est pas adapté à l'écran, il vit des émotions négatives, et on connait la suite.

Si ce n'est pas sa première visite, il a d'autres attentes. Il aimerait peut-être qu'on se souvienne de lui, qu'on se rappelle des actions qu'il a posé les dernières fois, qu'on lui suggère des nouvelles actions à poser, qu'on lui présente de la nouveauté, etc. Si cela fait longtemps qu'il est un utilisateur fidèle, peut-être a-t-il d'autres attentes également.

Cet humain là, celui qui tappe siteabc.com, c'est important de se rappeller qu'il a des superpouvoirs, deux en particuliers: le pouvoir de revenir ou non sur siteabc.com, et le pouvoir de communiquer à d'autres humains. En fonction du nombre d'attentes qui ont été remplies ou excédées lorsqu'il a visité siteabc.com, il excercera par la suite ces superpouvoirs du mauvais côté de la force (ne jamais revenir, et dire à tout le monde de ne jamais aller sur ce site) ou du bon côté de la force (revenir sur le site avec engouement, et dire à tout le monde à quel point siteabc.com est un site incroyable). 

Et c'est à l'équipe derrière ce site de tout faire pour que l'humain qui a tappé siteabc.com exerce ces superpouvoirs du bon côté de la force.
* Explain the following request and response
=======
 * When I enter a website's URL, in the transport layer, it will ask a local DNS what is the IP of the provided URL. We know the IP of the local DNS server by the DHCP protocol, when a node connects to internet and gets an IP address. After that, a browser will try to establish a TCP connection with a server having the retrieved IP by 3-way handshake. When it establish a TCP connection, the browser will form an HTTP request containing an HTTP header and body. After the HTTP request is sent and the server responds with an HTTP response, the browser will parse the HTTP response header and body, and will render the website. If the document contains additional assets, the browser will create HTTP requests for the assets and send them like above.
>>>>>>> 4ec99923c575f4c6e3f28237f2c3e4f85634a7a4
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
 * long polling : A variation of the traditional polling technique and allows emulation of an information push from a server to a client. With long polling, the client requests information from the server in a similar way to a normal poll. If the server does not have any information available for the client, instead of sending an empty response, the server holds the request and waits for some information to be available. Once the information becomes available (or after a suitable timeout), a complete response is sent to the client. The client will normally then immediately re-request information from the server, so that the server will almost always have an available waiting request that it can use to deliver data in response to an event. In a web/AJAX context, long polling is also known as Comet programming.
 * WebSockets provide a persistent connection between a client and server that both parties can use to start sending data at any time. The client establishes a WebSocket connection through a process known as the WebSocket handshake. This process starts with the client sending a regular HTTP request to the server. An Upgrade header is included in this request that informs the server that the client wishes to establish a WebSocket connection. 
 * Developing a web application that uses server-sent events is quite easy. You'll need a bit of code on the server to stream the events to the web application, but the web application side of things works nearly identical to handling any other type of event.
<<<<<<< HEAD
 headers:
=======
* Explain the following request and response headers:
>>>>>>> 4ec99923c575f4c6e3f28237f2c3e4f85634a7a4
  * Diff. between Expires, Date, Age and If-Modified-...
    * The age the object has been in a proxy cache in seconds (AGE)
    * Gives the date/time after which the response is considered stale (in "HTTP-date" format as defined by RFC 7231) (Expires)
    * The date and time that the message was sent (in "HTTP-date" format as defined by RFC 7231) (Date)
    * Allows a 304 Not Modified to be returned if content is unchanged. (IF-modified-since)
  * Do Not Track: Requests a web application to disable their tracking of a user. This is Mozilla's version of the X-Do-Not-Track header field
  * Cache-Control: Tells all caching mechanisms from server to client whether they may cache this object. It is measured in seconds 
  * Transfer-Encoding: Chunked transfer encoding is a data transfer mechanism in version 1.1 of the Hypertext Transfer Protocol (HTTP) in which data is sent in a series of "chunks". It uses the Transfer-Encoding HTTP header in place of the Content-Length header, which the earlier version of the protocol would otherwise require.
  * ETag: An identifier for a specific version of a resource, often a message digest
  * X-Frame-Options:Clickjacking protection: deny - no rendering within a frame, sameorigin - no rendering if origin mismatch, allow-from - allow from specified location, allowall - non-standard, allow from any location
* What are HTTP methods? List all HTTP methods that you know, and explain them.
  * see nice summary [here](https://www.tutorialspoint.com/http/http_methods.htm)
  
