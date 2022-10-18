import dbConnect from "./dbConnect.js"


export function createCoffee(req, res) {
//connect to fire store
const db = dbConnect()
// add a new doc to coffees collection
db.collection("coffees").add(req.body)
//send back a responce (err || not)
.then(doc => res.status(201).send({ success : true, message: "Created coffee: " + doc.id}))
.catch(err => res.status(500).send({success: false, message: err}))
}