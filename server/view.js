const pool = require('./db');

module.exports = function (request, response) {
    var q = `SELECT id,name,company,department,designation,contact,email 
    FROM users1 
    WHERE
     name iLIKE '` + request.params.search_text + `%' 
     OR
    company iLIKE '` + request.params.search_text + `%'
     OR
     department iLIKE '` + request.params.search_text + `%'
     OR 
     designation iLIKE '` + request.params.search_text + `%'
     OR 
     email iLIKE '` + request.params.search_text + `%'
     OR 
     contact::text iLIKE '` + request.params.search_text + `%'
     OR 
     id::text iLIKE '` + request.params.search_text + `%' `;
    //  union all 
    //  SELECT dept_id,dept_name,service,user_id 
    //  FROM department 
    //  WHERE 
    //  dept_name iLIKE '` + request.params.search_text + `%' 
    //  OR 
    //  service iLIKE '%` + request.params.search_text + `%'
    //  OR 
    //  dept_id::text iLIKE '` + request.params.search_text + `%'
    //  OR 
    //  user_id::text iLIKE '` + request.params.search_text + `%'
    //  union all 
    //  SELECT cust_id,cust_name,service,user_id 
    //  FROM customer 
    //  WHERE 
    //  cust_name iLIKE '` + request.params.search_text + `%' 
    //  OR 
    //  service iLIKE '%` + request.params.search_text + `%'
    //  OR 
    //  cust_id::text iLIKE '%`+ request.params.search_text + `%'
    //  OR 
    //  user_id::text iLIKE  '%`+ request.params.search_text+ `%'`;
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
