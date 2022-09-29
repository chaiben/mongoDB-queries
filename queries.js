db = db.getSiblingDB('restaurants')
// printjson(db.restaurants.find())
// printjson(db.restaurants.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1}))
// printjson(db.restaurants.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1}))
// printjson(db.restaurants.find({},{restaurant_id: 1, name: 1, borough: 1, 'address.zipcode':1, _id:0}))
// printjson(db.restaurants.find({borough: 'Bronx'},{}))
// printjson(db.restaurants.find({borough: 'Bronx'},{}).limit(5))
// printjson(db.restaurants.find({borough: 'Bronx'},{}).skip(5).limit(5))
// printjson(db.restaurants.find({'grades.score': {$gt: 90}},{}))
// printjson(db.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}}, {}))
// printjson(db.restaurants.find({'address.coord.0': {$lt: -95.754168}},{}))
// printjson(db.restaurants.find({$and:[{'address.coord.1': {$lt: -65.754168}},{'grades.score': {$gt: 70}},{cuisine: {$ne:'American '}}]},{}))
// printjson(db.restaurants.find({'address.coord.0': {$lt: -65.754168}, 'grades.score': {$gt: 70}, cuisine: {$ne:'American '}},{}))
printjson(db.restaurants.find({borough: {$ne: 'Brooklyn'}, 'grades.grade': 'A', cuisine: {$ne:'American '}},{}).sort({cuisine:-1}))