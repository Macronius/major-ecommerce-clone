# Major eCommerce Clone using MERN stack

# Git Commits

1. **First Commit - setup**

2. **Add data, create HomeScreen and ProductScreen, Add SPA routing**
   1. npm install react-router-dom
   2. create route for home screen
   3. create router for product screen
        - because this is a single-page application, the entire page should not refresh each time a particular component is changed.  To avoid this, replace all anchor <a> tags with <Link> tags from react-router-dom, then replace the href= with to=
        - import { useParams } from "react-router-dom"; allows to extract the slug parameter from the url, which can then be used to call a prduct page according to which was clicked, according to what its slug property is set to
        - 
3. **Create a Node.js server**
   1. cd to root folder, npm init
   2. update backend package.json, right after name: add type: module (allows to use ES6 import and export feature)
   3. add .js and .jsx extensions to all imports (as needed)
   4. npm install express (from backend)
   5. create server.js
   6. add a start command as node backend/server.js
   7. require express
   8. create route for / return backened is ready
   9. move products.js data from frontend to backend
   10. create route for /api/products
   11. return products from the /api/products route from server.js in the backend directory
   12. (from backend)> npm install nodemon --save-dev
        - note: --save-dev enables this to be used only for development, will not get shipped with _____
        - (from backend) in package.json, confirm devDependencies: {} object
        - (from backend) in package.json, in "scripts", at key:value... "start": "nodemon server.js",
        - ^ this will allow the backend server to run with nodemon for continual update re-rendering automatically, initialized with npm start
  
4. **fetch products data from backend**
     1. set proxy in package.json
        - (from frontend) in package.json, beneath "name":, add "proxy": "http://localhost:5000",
        - NOTE: this is the final move that connects the frontend to the backend and vice versa
     2. npm install axios
         - https://axios-http.com/docs/intro
     3. from HomeScreen, define a state to save the product from backend
     4. use chrome dev tools > network > (refresh page) > products > {headers, preview, response}... to confirm the data is actually coming from backend
   
5. **manage state with useReducer() hook**
   1. define a reducer
   2. update fetch data
   3. get state from reducer

6. **add bootstrap UI framework**
   1. npm install bootstrap react-bootstrap react-router-bootstrap
   2. update App.js to reflect bootstrap component and class-style references
   3. replace App.js <header> with react-bootstrap/Navbar
   4. surround Navbar and main contents with react-bootstrap/Container to ensure page contents align vertically
   5. divided screen into three sections,
   6. set display flex to main container, then flex 1'd the middle container to take up the remaining page space;

7. **create Product and Rating components**
   1.  moved product logic into its own component
   2.  5-star rating system with num of reviews
   3.  changed button color
   4.  on HomeScreen, changed product list to bootstrap

8. **Product Screen**
   1. create product details screen
      1. fetch product from backend
      2. create three columns: image, info, action
      3. npm install react-helmet-async
         1. allows browser tab title to reflect the current page's content (and other webpage metadata)
         2. wrap <App> component with <HelmetProvider>, which enables children to utilize <Helmet>
         3. implemented in HomeScreen and ProductScreen
      4. (from backend) in server.js, added a new api to return product information based on slug
      5. enable ProductScreen details image to take up 100% of its container width
   2. create Loading and Message components
      1. create loading component
      2. use spinner component
      3. create message component
      4. (from backend) create utils.js to define getError() function to interact with server.js api error handling
      5. implemented LoadingBox and MessageBox components in HomeScreen and ProductScreen

9. **implement add-to-cart functionalituy**
   1. create a React Context
      1. https://reactjs.org/docs/context.html
   2. define a reducer
   3. create a Store Provider 
      1. to save items from the cart into a global state, to be used in the navbar
      2. use in index.js to wrap the entire App component
   4. implement an 'add to cart' button with an onClick handler
      1. onClick, a badge in the navbar will reflect cart quantity total

10. **refactor add-to-cart functionality to check 'inventory' from the backend, and prevent item duplication**
   1. (from backend) in data.js, add _id: key/value to each products object
      1. adding an id to each allows each to be unique
      2. note: _id, the underline makes compatible with MongoDB for future application
   2. check if item exists in cart
   3. check if count in stock is > count in cart request

11. **Create Cart Screen**
   1. design layout
      - https://excalidraw.com/#json=cVGX9wOezv8rivtx90m12,ttjmbE41lmw4t7K-DFG9lw
   2. from App, add new route to= CartScreen
   3. useNavigate to navigate user to CartScreen following 'add to cart' button
   4. (from HomeScreen) add functionality btns.add-to-cart
      1. add item to cart
      2. if (outOfStock) button disabled
   5. (from CartScreen) add functionality of buttons: -, +, remove
   6. (from Store) added CART_REMOVE_ITEM case
   7. (from Store) moved initial cartItems value to localStorage
   8. add functionality to update localStorage of cartItems changes, prevent lost progress on refresh
   16. create SignInScreen
   10. add functionality: continueToCheckout -> SignInScreen
   11. (from ProductScreen) implement addToCartHandler

12. **Create Sign In Screen**
   1. design layout
      - https://excalidraw.com/#json=20i4dUdYB2weyrPl6QVrD,AMOEnw01vuUuYo5ef08Kaw
      - email, password, submit
      - https://react-bootstrap.netlify.app/forms/overview/#rb-docs-content
   2. Connect to MongoDB Database
      1. create atlas mongoDB database
         1. create project
         2. add database
            1. Shared (FREE)
            2. choose service, location, cluster name, create Cluster
            3. set up Username and Password for database
            4. establish where to connect from: IP Address and description
            5. Add my own data
               1. Create Database
                  - database name
                  - collection name
         3. connect database to project
      2. install local MongoDB database
      3. create .env file in backend
         - constant MONGODB_URI = copy uri info from mongodb atlas site dashboard
      4. (from backend) npm install Mongoose (schema)
      5. (from backend) npm install dotenv
      6. add both to server.js
      7. connect to MongoDB database
   3. Download and install MongoDB Compass Community
      1. connect...   mongodb://localhost
      2. set up a new database and collection
      3. update the .env file 
   4. Seed Sample Data to new MongoDB - local
      1. create backend models directory
      2. create Product Model
         1. create Schema
            - import mongoose to define schema
            - https://mongoosejs.com/docs/index.html
            - https://mongoosejs.com/docs/api/mongoose.html#mongoose_Mongoose-Schema
            - https://mongoosejs.com/docs/api/schema.html
            - first: mongoose.Schema takes required first parameter object to define the schema, and an optional second parameter, which can be 'timestamp', which adds two more data: create-time and update-time
         2. create Model based on Schema
            - https://mongoosejs.com/docs/api/model.html
            - https://mongoosejs.com/docs/api/model.html#model_Model
      3. create User Model
      4. "seed" or create products into the database using Express
         - http://expressjs.com/en/guide/routing.html#express-router
         - https://mongoosejs.com/docs/api/model.html#model_Model-remove
         - https://mongoosejs.com/docs/api.html#model_Model-insertMany
      5. use route in server.js
      6. seed sample product
      7. Create User Model
         - seed sample users
           - use bCrypt
           - https://github.com/kelektiv/node.bcrypt.js#readme
         - create user model
         - create user routes
         - create sample users (admin & customer), generate encrypted passwords for each
         - npm install bcryptjs
   5. Create Sign-In Backend API
      1. create sign-in api
      2. npm install jsonwebtoken
      3. define generateToken
      4. install Chrome dev extension Advanced REST client
         - https://chrome.google.com/webstore/detail/advanced-rest-client/hgmloofddffdnphfgcellkdfbfbjeloo?hl=en-US
   6. Complete Sign-In Screen
      1. handle submit action
         - set user's sign-in email and password to state
      2. save token in store and local storage
      3. then redirect user according to search parameter in url
      4. show user name in header
         - App.js > Nav
         - fetch userInfo from store
      5. prevent user from accessing SignInScreen if already signed in
      6. (from frontend) npm install toastify
         - use instead of alert() to show error message
      7. use context state.userInfo to dynamically render complication in navbar
      8. add two new actions to Store.js
         - USER_SIGNIN
         - USER_SIGNOUT