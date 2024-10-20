

//---- delete all 
db.movies.deleteMany({})


//---- delete all with some condition
db.movies.deleteMany( { title: "Titanic" } )


//---- delete  one with condition ... latest one
db.movies.deleteOne( { cast: "Brad Pitt" } )

//

