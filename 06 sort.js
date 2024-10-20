

//----it will only show one
db.movies.find().limit(1)

//----it will only show two
db.movies.find().limit(2)




//------   first document will be skipped
db.movies.find().skip(1)

//------   first 2 document will be skipped
db.movies.find().skip(2)





//-----   it will show  last one first  (ascending order of quantity)
db.movies.find().sort({runtime:1})

//-----------it will show last one last  (descending order of quantity)
db.movies.find().sort({runtime:-1})



//  Achieving Pagination using MongoDB find and limit
no = 8
db.blogs.find().skip((pageNo-1)*no).limit(no)
pageno = 1 db.blogs.find().skip(0).limit(8)
pageno = 8 db.blogs.find().skip(8).limit(8)














