STATUS CODES
500: server error










**localStorage**
- localStorage.setItem('name', data);
- localStorage.getItem('name');
- localStorage.removeItem('name');
RESOURCE LINKS
**Axios.js**
      - https://axios-http.com/
      - https://www.digitalocean.com/community/tutorials/js-axios-vanilla-js
Axios.post()
      - https://axios-http.com/docs/post_example
      - result: {
            config: {},
            data: {},
            headers: {},
            request: {},
            status: #,
            statusText: ""
        }
  
Axios.get()










**Express.js**
- http://expressjs.com/en/guide/routing.html#express-router

- Express.js | app.use() Function
  - https://www.geeksforgeeks.org/express-js-app-use-function/
  - The app.use() function is used to mount the specified middleware function(s) at the path which is being specified.
  - It is mostly used to set up middleware for your application.

Methods
- http://expressjs.com/en/api.html#express.json
  - 
- http://expressjs.com/en/api.html#express.urlencoded
  - 










**MongoDB**










**Mongoose.js**
- https://mongoosejs.com/docs/index.html
- https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-Schema
- https://mongoosejs.com/docs/api/schema.html
- https://mongoosejs.com/docs/api/model.html
- https://mongoosejs.com/docs/api/model.html#model_Model
- https://mongoosejs.com/docs/api/model.html#model_Model-remove
- https://mongoosejs.com/docs/api.html#model_Model-insertMany
- https://mongoosejs.com/docs/api/model.html#model_Model-find
- https://mongoosejs.com/docs/api/model.html#model_Model-findOne
- https://mongoosejs.com/docs/api/model.html#model_Model-findById










**Node.js**
- URLSearchParams constructor to parse
- https://www.geeksforgeeks.org/node-js-urlsearchparams-api/?ref=gcse
- The URLSearchParams class is a global object and used with one of the four following constructors:
  1 new URLSearchParams(): No argument constructor instantiates a new empty URLSearchParams object.
  2 new URLSearchParams(string): Accepts a string as an argument to instantiate a new URLSearchParams object.
  3 new URLSearchParams(obj): Accepts an object with a collection of key-value pairs to instantiate a new URLSearchParams object. The key-value pair of obj are always coerced to strings. Duplicate keys are not allowed.
  4 new URLSearchParams(iterable): Accepts an iterable object having a collection of key-value pairs to instantiate a new URLSearchParams object. Iterable can be any iterable object. Since URLSearchParams is iterable, an iterable object can be another URLSearchParams, where the constructor will create a clone of the provided URLSearchParams. Duplicate keys are allowed.










**React Router Dom**
__useLocation__  
-     https://www.geeksforgeeks.org/react-router-hooks/
-     This hook returns the location object used by the react-router. 
-     This object represents the current URL and is immutable. 
-     Whenever the URL changes, the useLocation() hook returns a newly updated location object. 
-     Some of its use includes extracting the query parameters from the URL and doing something depending on the query parameters. 
-     The ???search??? property of the location object returns a string containing the query part of the URL.

useNavigate and Link are very similar, though one (Link) is used within the JSX, while the other (useNavigate) is used directly inside the javascript logic
__useNavigate__
-     

__Link__










REACT-BOOTSTRAP :
# react-bootstrap/Container
# react-bootstrap/Navbar
# react-bootstrap/Navbar.Brand
https://react-bootstrap.netlify.app/components/navbar/#brand
# react-bootstrap/Nav
# react-bootstrap/NavDropdown
# react-bootstrap/Badge

# react-bootstrap/ListGroup
<ListGroup> is equivalent of <ul>
<ListGroup.Item> is equivalent of <li>
**React Bootstrap**
https://react-bootstrap.netlify.app/components/navbar/#color-schemes
- my-#  margin top and bottom










**React Context**
https://reactjs.org/docs/context.html









**React Helmet Async**










**React Toaastify**
npm install react-toastify
- https://fkhadra.github.io/react-toastify/introduction/
- 
- import { toast } from 'react-toastify';
- toast.error('')
- 
- import { ToastContainer } from 'react-toastify';
- <ToastContainer position="bottom-center" limit={1} />










JAVASCRIPT :
__**Array.prototype.find()**__
- The find() method **returns the first element** in the provided array that satisfies the provided testing function. 
- If no values satisfy the testing function, undefined is returned.
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find



__**Array.prototype.reduce()**__
- The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
- The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

__**URL API**__
__Queries__
      - https://developer.mozilla.org/en-US/docs/Web/API/URL_API
      - Queries
      - The search property on a URL contains the query string portion of the URL. 
      - For example, if the URL is https://example.com/login?user=someguy&page=news, then the value of the search property is ?user=someguy&page=news. 
      - You can also look up the values of individual parameters with the URLSearchParams object's get() method:

__URLSearchParams()__
      - https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
      - 





















**bCrypt**
for password encryption: hash & salt
https://github.com/kelektiv/node.bcrypt.js#readme
      -compareSync(plain-text, encrypted)




**express-async-handler**
npm install express-async-handler
https://www.npmjs.com/package/express-async-handler
- Simple middleware for handling exceptions inside of async express routes and passing them to your express error handlers.


**jsonwebtoken**
npm install jsonwebtoken
- https://www.npmjs.com/package/jsonwebtoken
- https://github.com/auth0/node-jsonwebtoken#readme
- import jwt from 'jsonwebtoken';










**CHROME EXTENSIONS:**
Advanced REST client - https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US










**QUESTIONS:**
- does /api imply backend?