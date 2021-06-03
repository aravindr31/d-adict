const db = require("./dbconfig/connection");
const collection = require("./dbconfig/collection");
const { ObjectId } = require("mongodb");

module.exports = {
  getSchedule: () => {
    return new Promise(async (resolve, reject) => {
      await db
        .get()
        .collection(collection.SCHEDULES)
        .find()
        .toArray()
        .then((response) => {
          resolve(response);
        });
    });
  },
  editSchedule: (id) => {
    console.log("here", id);
    return new Promise(async (resolve, reject) => {
      await db
        .get()
        .collection(collection.SCHEDULES)
        .findOne({ _id: ObjectId(id) })
        .then((response) => {
          resolve(response);
        });
    });
  },
  addSchedule: (data) => {
    return new Promise(async (resolve, reject) => {
      await db
        .get()
        .collection(collection.SCHEDULES)
        .insertOne({ data })
        .then(() => {
          resolve();
        });
    });
  },
  updateSchedule:(data)=>{
    console.log(data)
  }
};
