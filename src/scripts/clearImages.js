const models = require('../db/models');
const { connectDB } = require('../db/config');
const fetch = require('node-fetch');

connectDB();

const deviceCollection = models.DeviceModel;

async function clearAllImages() {
  const allDevices = await deviceCollection.find();
  const idsToClear = [];
  const asyncCalls = [];

  allDevices.forEach(iDevice => {
    asyncCalls.push((async () => {
      const response = await fetch(iDevice.imageUrl);
      if (response.status === 404) {
        idsToClear.push(iDevice._id);
      }
    })());
  });

  await Promise.all(asyncCalls);

  await deviceCollection.updateMany({ _id: { $in: idsToClear }}, { $unset: { imageUrl: 1 }});
  console.log(`${idsToClear.length} broken images deleted successfully ✅`);
}

clearAllImages().then(() => {
  process.exit(0);
});
