 //-- Fetch all documents
 db.managers.find() 


// --- find the year:2018
db.managers.find({year:2018})


///---- find rated varchar, also many
db.movies.find( { rated: { $in: [ "PG", "PG-13" ] } } )  



///---- use of AND ,,,, dont have to use explicitly
db.movies.find( { runtime: 130, year: { $lt: 2019 } }) 


///---- use of OR ,,,,  have to use explicitly
db.movies.find( { $or:[ {runtime: 130}, {year: { $lt: 2019 } }]})



db.movies.findOne( { rated: { $in: [ "PG", "PG-13" ] } } )  






