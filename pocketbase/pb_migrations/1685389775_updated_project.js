migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05455d5391rwgil")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1d2xc4w3",
    "name": "tasks",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "arzk3wf91d5rv72",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "name",
        "done",
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("05455d5391rwgil")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1d2xc4w3",
    "name": "tasks",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "arzk3wf91d5rv72",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
