# Shop System

This is a TypeScript project that implements a simple shop system where users can buy items.

## Features

- Create and manage items in the shop.
- Create and manage users.
- Add items to a user's cart.
- Remove items from a user's cart.
- Remove a specified quantity of items from a user's cart.
- Calculate the total price of items in a user's cart.
- Uses MongoDB for data storage and retrieval.

## Setup and Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/HussainAther/CartRebornOOP
   ```

2. Navigate to the project directory:

    ```bash
    cd shop-system
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start your MongoDB server: 

* macOS/Linux: Open a new terminal and run `mongod`.
* Windows: Open a new command prompt and run `"C:\Program Files\MongoDB\Server\{version}\bin\mongod.exe"` (replace {version} with the version number of MongoDB you have installed).

5. Update the MongoDB configuration: 
* Open the `database.ts` file in the src directory.
* Replace the MongoDB connection URL, database name, and collection names with your MongoDB setup.
* Save the changes to the `database.ts` file.

6. Build the TypeScript code:

    ```bash
    npm run build
    ```
   
7. Run the program:

    ```bash
    npm start
    ```

The shop system will now execute, interacting with the MongoDB database. You should see the output in the console, demonstrating the functionality of the shop system.

## Dependencies
The project has the following dependencies:

TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
`uuid`: A package for generating UUIDs (Universally Unique Identifiers).

## License
This project is licensed under the MIT License.
