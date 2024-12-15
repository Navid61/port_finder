// Switch to the target database
db = db.getSiblingDB("ports");

// Ensure the `ports` collection exists
if (!db.getCollectionNames().includes("ports")) {
  db.createCollection("ports");
  print("Collection 'ports' created.");
} else {
  print("Collection 'ports' already exists.");
}

// Create an index on the `name` field to ensure uniqueness and improve performance
db.ports.createIndex({ name: 1 }, { unique: true });
print("Index created on 'name' field in 'ports' collection.");

// Optionally seed minimal initial data if the collection is empty
if (db.ports.countDocuments() === 0) {
  db.ports.insertOne({ name: "Default Port" });
  print("Minimal seed data inserted into 'ports' collection.");
} else {
  print("Ports collection already has data. No seed needed.");
}
