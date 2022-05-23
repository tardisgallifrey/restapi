# A teaching application for REST API's
## This uses a NodeJS backend, very simple and a REACTJS frontend

<p>As a means of both practicing my Javascript, Node, and React, I have built this app in one repo.  The top level folder is the NODEJS backend.  It is dirt simple, using just Express and an array of two element objects; a customer list.  I copied this from a tutorial on a NODE REST API.</p
>

<p>It uses a REACTJS frontend that I have borrowed from across the resources of the web.  Though, most of the design is mine.  It doesn't do much.  It just gives a menu of each of the HTTP REST API calls (GET, POST, PUT, DELETE).  In real world situations, most folks won't GET an item by using the item's ID number, but it was simplest here.</p>

<p>When you clone it, it should form two nested folders (<code>restapi</code> and <code>useapi</code>).  <code>restapi</code> contains the node script. <code>useapi</code> contains the React app.  Open two terminals and start the backend in <code>restapi</code> with <code>node script.js</code>.  Then, in the second terminal, <code>cd</code> into <code>useapi</code> and run <code>npm run start</code>. The result should be a running app that provides examples of interaction with a REST API.</p>

<p>This was written with NODE 16 and REACT 17.  One item I discovered that was difficult to locate the answer for is the use of <code>STRICTMODE</code> in <code>indexjs</code>.  There wasn't a good explanation where I found the answer, but by removing <code>STRICTMODE</code> from my app, the POST call stopped posting twice.  I had a real problem that POST created two identical records in the backend, yet nothing was telling it to do so.  Removing that option solved the issue.</p>

<p>You will need to init both restapi for NODE and useapi for REACT.  restapi depends upon the Express package.</p>

<p>As always, use freely, but use at your own risk.</p>

