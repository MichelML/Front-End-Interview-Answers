#### Network Questions:

* Traditionally, why has it been better to serve site assets from multiple domains?
  * Browsers can make a limited number of requests to a domain, thus getting the files from multiple domains can help you make more requests asynchronously
* Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
* What are the differences between Long-Polling, Websockets and Server-Sent Events?
 * long polling : A variation of the traditional polling technique and allows emulation of an information push from a server to a client. With long polling, the client requests information from the server in a similar way to a normal poll. If the server does not have any information available for the client, instead of sending an empty response, the server holds the request and waits for some information to be available. Once the information becomes available (or after a suitable timeout), a complete response is sent to the client. The client will normally then immediately re-request information from the server, so that the server will almost always have an available waiting request that it can use to deliver data in response to an event. In a web/AJAX context, long polling is also known as Comet programming.
 * WebSockets provide a persistent connection between a client and server that both parties can use to start sending data at any time. The client establishes a WebSocket connection through a process known as the WebSocket handshake. This process starts with the client sending a regular HTTP request to the server. An Upgrade header is included in this request that informs the server that the client wishes to establish a WebSocket connection. 
 * Developing a web application that uses server-sent events is quite easy. You'll need a bit of code on the server to stream the events to the web application, but the web application side of things works nearly identical to handling any other type of event.
* When I enter a website's URL, in the transport layer, it will ask a local DNS what is the IP of the provided URL. We know the IP of the local DNS server by the DHCP protocol, when a node connects to internet and gets an IP address. After that, a browser will try to establish a TCP connection with a server having the retrieved IP by 3-way handshake. When it establish a TCP connection, the browser will form an HTTP request containing an HTTP header and body. After the HTTP request is sent and the server responds with an HTTP response, the browser will parse the HTTP response header and body, and will render the website. If the document contains additional assets, the browser will create HTTP requests for the assets and send them like above.
* Explain the following request and response headers:
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
  
