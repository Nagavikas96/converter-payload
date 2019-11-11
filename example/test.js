const Converter = require('../index')

let v1payload = {"cmd":"post","objects":[{"type":"groups","data":[{"enable":1,"name":"Group 2"}]}],"reqid":"ios-Samsung Galaxy S10+-1562901962572-30"}

// let v2Payload = Converter.configV2ToV1(v1payload)
let v2Payload = Converter.configV2ToV1(v1payload)
// let v2Payload = Converter.statusV1ToV2(v1payload)
console.log(JSON.stringify(v2Payload))

// Converter.devidV1ToV2()