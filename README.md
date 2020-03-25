1) Display a form which prompts you to enter a message when you visit localhost:8080;

e.g:  Please enter a message below:       

       Message: an input box is here where user submits their message
       Submit: a submit button is below.


       So far, you should have a form element which wraps around an input element and a submit button. 

       Your input element should have a name html property equal to message so you can get the value when you submit

       Your form should also have a method property equal to "POST" and an action property that equals to "/message"

CLUE: You can use "res.write()" to write html tags like forms, inputs, buttons and send to the browser. Look up html forms and how to send them using res.write() on google. 

2) When you submit to "/message", you should have your input written to a file named message.txt. You must use the inbuilt node js fs module.

USEFUL RESOURCES:
 
https://www.w3schools.com/nodejs/nodejs_filesystem.asp.
https://www.geeksforgeeks.org/javascript-program-to-write-data-in-a-text-file/
https://www.quora.com/How-do-I-fs-append-post-HTML-form-input-to-a-text-file-in-a-local-storage-by-using-Node-js
https://www.c-sharpcorner.com/UploadFile/dacca2/node-js-in-action-create-simple-text-file-in-node-js-using/
https://stackoverflow.com/questions/4295782/how-to-process-post-data-in-node-js
 