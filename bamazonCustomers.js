const mysql = require("mysql");
const inquirer = require("inquirer");
const table = require('cli-table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });

    const displayTable = () => {
        let query = 'SELECT * FROM products';
        connection.query(query, (err, data) => {
            if (err) throw err;
            console.table(data);
        });
    };


    function runSearch() {
        inquirer
            .prompt({
                name: "action",
                type: "list",
                message: "What would you like to search for?",
                choices: "Find product by item ID, name, department"
            })
            .then(function (answer) {
                let query = "SELECT item_id, product_name, department_name FROM products ?";
                connection.query(query, )
            });
    }






    function productSearch() {
        inquirer
             .prompt({
                name: "product",
                type: "input",
                message: "What product are you searching for?"
            })
                .then(function (result) {
                    let query = "SELECT item_id, product_name, department_name FROM products ?";
                    connection.query(query, { product: result.product }, function (err, res) {
                        for (let i = 0; i < res.length; i++) {
                            console.lof("item_id: " + res[i].item_id + " || product_name: " + res[i].product_name + " || department_name: " + res[i].department_name);
                        }
                        runSearch();
                    });
                });
    }


}


// Jenny
// There’s a nom package called..hold please let me look
// cli - table
// var Table = require('cli-table');
// Samantha Bell:
// You’re the love of my life
// class:
// const displayTable = () => {
//         let query = 'SELECT * FROM products';
//         connection.query(query, (error, data) => {
//                 if (error) throw error;
//                 console.table(data);
//                 buyerID();

//                 //

//         })
// };
// Make that into a function and call it somewhere
// Ignore my buyerID()
