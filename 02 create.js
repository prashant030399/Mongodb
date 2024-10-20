

//--for insert one 
    db.managers.insertOne(
        {
          title: "The Favourite",
          genres: [ "Drama", "History" ],
        
        }
      )  
      


       //--for insert many
      db.managers.insertMany([
        {
           title: "Jurassic World: Fallen Kingdom",
           genres: [ "Action", "Sci-Fi" ],
           runtime: 130,
          
         },
         {
           title: "Tag",
           genres: [ "Comedy", "Action" ],
           runtime: 108,
          
         }
     ])  

      

      