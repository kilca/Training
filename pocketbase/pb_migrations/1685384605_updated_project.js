migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05455d5391rwgil")

  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05455d5391rwgil")

  collection.viewRule = null

  return dao.saveCollection(collection)
})
