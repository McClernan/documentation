*SOURCE:*
https://www.programmableweb.com/news/how-rest-apis-are-driving-digital-industrial-revolution/analysis/2016/03/31

# REST RULES

REST gives us a manageable software-to-software tool set to confidently create and interpret messaging between independent software applications in a predictable and ubiquitous way.  

REST provides the “Grammar” rules, which in summary are:

1. There will be a resource with an addressable URI; in other words a standard method for other software applications to find the resource. An example would be:

GET [base URL]/people/williamshakespeare

2. There will be the transfer of a representation of the resource. For example, if the source software application intends to have a name and address set in a target software application, transferring the end-state of that resource (name and address) via a REST-compliant command (ie: HTTP’s POST, PUT, and PATCH verbs) is the expected communication.  The target software application will set the resource to the presented state using processes of its own discretion.  An example that posts new data to the target system might be:

POST [base URL]/people/williamshakespeare
~~~
{
 "name": "William Shakespeare",
 "email": "bill@stratford-upon-avon.co.uk",
 "address": "Henley Street, Stratford-upon-Avon, Warwickshire, England"
}
~~~

3. The request to have a resource state change is done with an expression that’s compliant with the protocol agreed upon in the communication channel. For example, if HTTP is the agreed upon protocol for communication between the source and target software applications, the source and target will rely HTTP’s verbs to invoke a request for state change.

4. REST does not attempt any situational context, it is stateless.  By its explicit omission of it, it makes the inarguable assertion that situational context will not be considered in the message exchange.  If situational context is relevant to either the sender or receiver, it is up to each to manage.  This is key, in that REST makes it understood by all participants to only expect the conveyance of the current or desired state of a resource, thus the messages are idempotent. For example, suppose Bill moved:

POST [base URL]/people/williamshakespeare
~~~

{
 "name": "William Shakespeare",
 "email": "bill@stratford-upon-avon.co.uk",
 "address": "Payton Street, Stratford-upon-Avon, Warwickshire, England"
}
~~~

If the new location was not agreeable to Bill, and he decided to move back, it would be a break of the Lingua Franca to do this:

POST [base URL]/people/williamshakespeare
~~~

{
 "name": "William Shakespeare",
 "email": "bill@stratford-upon-avon.co.uk",
 "address": "previous"
}
~~~

There is no consideration of Bill’s "state" of being in a new location and moving back to a previous address, there is only the stateless communication of what his address is.  Each software application, the source and the target, is free to monitor and track Bill’s state as he moves from one place to another, but the communication channel between them remains stateless.  The return back to Bill’s previous address would be communicated in this way:

POST [base URL]/people/williamshakespeare
~~~

{
 "name": "William Shakespeare",
 "email": "bill@stratford-upon-avon.co.uk",
 "address": "Henley Street, Stratford-upon-Avon, Warwickshire, England"
}
~~~

5. REST does not demand a specific language. While REST is almost always practiced in the construct HTTP, HTTP is not required to meet the tenets of REST. For example, COAP is a protocol that’s associated with the Internet of Things that is considered to conform to the RESTful architectural style. Like HTTP, it comes with a standard set of commands (also known as verbs) baked-in.

6. REST will not instruct the receiver of a “change of state” request on how to affect the change.  REST only concerns itself with communicating of the expected state of the resource.

Facilitating universal human interaction to exchange information with the Web and all the systems connected to it,  was accomplished by the agreement that all browsers would comply with REST governance and HTTP protocol.  It was prudent to adopt this same approach for the exchange of services and functions between software applications, with the language allowed to vary as appropriate (HTTP, FTP, COAP, etc.).

The adoption of REST and HTTP for browsers and the resulting expansion of the Web proves the prolific power of standardized conversation models.  Extending this same model to software applications is speeding us to a new era in which entire communities of systems will be connected.  It will give us new internet-connected spaces of individual functions (micro services) that will develop into new Internet_of areas:  the Internet of Things, the Internet of Applications, the Internet of (fill in the blank).  

History confirms that a standard communication protocol is key in how we work together to extend our reach , build towers to new heights, and move into new phases of societal evolution.  

Welcome to the Web’s Industrial Revolution
