migrate((db) => {
  const collection = new Collection({
    "id": "05455d5391rwgil",
    "created": "2023-05-29 18:15:46.206Z",
    "updated": "2023-05-29 18:15:46.206Z",
    "name": "users",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gxdlofsi",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("05455d5391rwgil");

  return dao.deleteCollection(collection);
})
