migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("arzk3wf91d5rv72")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cv9ysygu",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
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
  collection.schema.removeField("cv9ysygu")

  return dao.saveCollection(collection)
})
