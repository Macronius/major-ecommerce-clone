# Major eCommerce Clone using MERN stack

# Git Commits

1. First Commit - setup
2. Add data, create HomeScreen and ProductScreen, Add SPA routing
   1. npm install react-router-dom
   2. create route for home screen
   3. create router for product screen
        - because this is a single-page application, the entire page should not refresh each time a particular component is changed.  To avoid this, replace all anchor <a> tags with <Link> tags from react-router-dom, then replace the href= with to=
        - import { useParams } from "react-router-dom"; allows to extract the slug parameter from the url, which can then be used to call a prduct page according to which was clicked, according to what its slug property is set to
3. Create a Node.js server
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
  4. fetch products data from backend
     1. set proxy in package.json
        - (from frontend) in package.json, beneath "name":, add "proxy": "http://localhost:5000",
        - NOTE: this is the final move that connects the frontend to the backend and vice versa
     2. npm install axios
     3. from HomeScreen, define a state to save the product from backend
     4. use chrome dev tools > network > (refresh page) > products > {headers, preview, response}... to confirm the data is actually coming from backend