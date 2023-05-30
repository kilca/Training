migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("arzk3wf91d5rv72")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7bkj6vvz",
    "name": "projet",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "05455d5391rwgil",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("arzk3wf91d5rv72")

  // remove
  collection.schema.removeField("7bkj6vvz")

  return dao.saveCollection(collection)
})
