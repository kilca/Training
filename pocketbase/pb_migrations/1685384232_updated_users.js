migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05455d5391rwgil")

  collection.name = "project"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05455d5391rwgil")

  collection.name = "users"

  return dao.saveCollection(collection)
})
