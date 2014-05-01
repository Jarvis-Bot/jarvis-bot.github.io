This page globally shows you how addons work. For developpers, go into `developers API`.

What are they ?
=====================

Jarvis is based on addons. Without them, Jarvis can do nothing.
There are three types of addons : sources, receivers and clients.
Sources and clients are independent : they don't have necessary connexions between them.
However, receivers depend on sources, et most of the time on clients.

What are they used for ?
================

Addons are used to standardize services concerning Jarvis.
Imagine a receiver "Send to mom" which sends by email to your mum every message received containing "#mom".
It would work like this :

You have several things :

* 2 sources : Twitter and Instagram.
* 1 client : Mail
* 1 receiver : "Send to mom"

Your receiver will detect the tweets and the Instagram pictures containing "#mom".
When the source will send these messages to Jarvis, the latter will redirect the picture and the tweet to your receiver. Finally, the receiver will connect to the mail client, and send it to your dear mom.

Details of the addons types
====================

Sources
-------

Sources are used to collect information from a service, or any input, such as a sensor or a mic.
A source only deals with an input / service.

Receivers
---------

Receivers have to execute some tasks. They are programmed to activate only one, several, or every services. They can also detect one or several, or being activated no matter the message sent is.
They depend on sources, and have to use of the clients to answer via a service.

Clients
-------

Clients are the link between receivers and other services. They can be local or external services.
A client can be a tool to save an input as data base, a local file, but also a way to communicate with Github or Twitter. They are used by the receivers.