const cds = require('@sap/cds');
module.exports = (srv) => {
    console.log("Success");
    srv.after('Emp', (req) =>{
        console.log(req);
    })
}