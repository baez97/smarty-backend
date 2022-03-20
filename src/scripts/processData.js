const sampleData = require('../data/sampledata.json');
const fs = require('fs');

function buildDevice(deviceId, deviceRawData) {
  const deviceData = {
    deviceId,
    name: deviceRawData.name.id,
    manufacturer: deviceRawData.maker.name,
    description: "",
    color: "",
    price: generateRandomPrice(),
    screenSize: {
      inches: deviceRawData.display.s,
      width: deviceRawData.display.w,
      height: deviceRawData.display.h,
    },
    os: {
      type: deviceRawData.os.type,
      version: deviceRawData.os.version
    },
    ram: deviceRawData.memory.ram,
    rom: deviceRawData.memory.rom,
    processor: {
      cores: deviceRawData.cpu.cores,
      frequency: deviceRawData.cpu.freq,
      name: deviceRawData.cpu.name
    },
    imageUrl: `https://raw.githubusercontent.com/openstf/stf-device-db/master/data/photo/${deviceId}.jpg`
  }

  return deviceData;
}

function generateRandomPrice() {
  const MAX_PRICE = 1000;
  const MIN_PRICE = 100;
  const STEP = 50;
  const INTERVAL = MAX_PRICE - MIN_PRICE;

  const slot = Math.floor(Math.random() * (INTERVAL/ STEP));
  const slotValue = slot * STEP;
  const finalValue = slotValue + MIN_PRICE;
  const cents = [0, .5, .99][Math.floor(Math.random()*3)];
  return finalValue + cents;
}

const processedData = Object.keys(sampleData).map(iDeviceId => buildDevice(iDeviceId, sampleData[iDeviceId]));

fs.writeFileSync('data.json', JSON.stringify(processedData, null, 2));

console.log(`${sampleData.length} smartphones were processed successfully in file data.json ✅`);