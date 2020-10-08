const pool = require('./db');

module.exports = function (request, response) {
    var q = `SELECT id,name,company,department,designation,contact,email FROM users1 WHERE name LIKE '` + request.params.search_text + `%' OR company LIKE '` + request.params.search_text + `%'OR department LIKE '` + request.params.search_text + `%'OR designation LIKE '` + request.params.search_text + `%'OR email LIKE '` + request.params.search_text + `%'OR contact LIKE '` + request.params.search_text + `%'`;
    console.log(q);
    pool.query(q, (error, results) => {
        if(error) {
           	console.log(error)
            response.status(500).json({ msg: "ERROR", err: error });
        } else {
            if(results.rows!=0){
                response.status(200).json({ msg: "SUCCESS", data: results.rows });
            }
            else{
                response.status(200).json({ msg: "SUCCESS: No results to display" });
            }
        }
    });
}
