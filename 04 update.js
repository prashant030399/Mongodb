

//--------update one    ....  it will update the last one only
db.movies.updateOne( { runtime:105  },
{
  $set: {
    year: 2020
  },
  $currentDate: { lastUpdated: true }
})



//-----------update many
db.movies.updateMany(
  { runtime: { $lt: 140 } },
  {
    $set: { year: 2024, type: "web series" }
  }
)













