/*!
 * align-text <https://github.com/jonschlinkert/converter-payload>
 *
 * Copyright (c) 2019, Lucnn@luci.vn.
 * Licensed under the MIT License.
 */
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
const Traits = {
    OnOff: 'OnOff',
    StartStop: 'StartStop',
    Brightness: 'Brightness',
    Speed: 'Speed',
    Level: 'Level',
    ColorSpectrum: 'ColorSpectrum',
    OpenClose: 'OpenClose',
    LockUnlock: 'LockUnlock',
    PinCode: 'PinCode',
    TemperatureControl: 'TemperatureControl',
    TemperatureSetting: 'TemperatureSetting',
    Swing: 'Swing',
    Act: 'Act',
    IrConfig: 'IrConfig',
    IrActive: 'IrActive',
    IrStatus: 'IrStatus',
    IrActiveV2: 'IrActiveV2',
    Battery: 'Battery',
    Luminance: 'Luminance',
    Humidity: 'Humidity',
    Temperature: 'Temperature',
    Power: 'Power',
    Voltage: 'Voltage',
    Ampe: 'Ampe',
    ContactAlarm: 'ContactAlarm',
    PirAlarm: 'PirAlarm',
    COAlarm: 'COAlarm',
    SmokeAlarm: 'SmokeAlarm',
    WaterAlarm: 'WaterAlarm',
    GasAlarm: 'GasAlarm',
    ShockAlarm: 'ShockAlarm',
    HeatAlarm: 'HeatAlarm',
    PlayController: 'PlayController',
    Speaker: 'Speaker',
    LoopMode: 'LoopMode',
    ChangeChannel: 'ChangeChannel',
    ConfigSpeaker: 'ConfigSpeaker',
    CameraEvent: 'CameraEvent',
    CameraSnapshot: 'CameraSnapshot',
    ModeActive: 'ModeActive',
    ModeConfig: 'ModeConfig',
    ColdWarmColor: 'ColdWarmColor'
}
const DeviceTypeV2 = {
    SWITCH: 'SWITCH',
    LIGHT: 'LIGHT',
    LIGHTV2: 'LIGHTV2',
    FAN: 'FAN',
    CURTAIN: 'CURTAIN',
    DOORLOCK: 'DOORLOCK',
    SENSOR: 'SENSOR',
    DAIKIN: 'DAIKIN',
    PEBBLE: 'PEBBLE',
    IR: 'IR',
    IRV2: 'IRV2',
    SPEAKER: 'SPEAKER',
    CAMERA: 'CAMERA',
    INPUT: 'INPUT',
    UNKNOW: 'UNKNOW',
    COOKER: 'COOKER'
}

const DeviceTypeV1 = {
    UNKNOW: '0',
    SWITCH: '1',
    DIMMER: '2',
    FAN: '3',
    CURTAIN: '4',
    IR: '5',
    RGB: '6',
    PIRAC: '7',
    DAIKIN: '8',
    INPUT: '9',
    AUDIO: '10',
    GASSENSOR: '11',
    RGBWW: '13',
    WW: '15',
    BATTERY: '127',
    PIRSENSOR: '128',
    DOORSENSOR: '129',
    TEMPSENSOR: '130',
    HUMIDITYSENSOR: '131',
    LIGHTSENSOR: '132',
    PEBBLE: '133',
    WATERSENSOR: '134',
    SMOKESENSOR: '135',
    COSENSOR: '136',
    SHOCKSENSOR: '137',
    CAMERA: '123',
    DOORLOCK: '138',
    IRV2: '139',
    HEATSENSOR: '140',
    WATTSENSOR: '141',
    VOLTSENSOR: '142',
    AMPESENSOR: '143',
    COOKER: '144'
}

const BridgeKey = {
    zigbee: 'zigbee',
    wifi: 'wifi',
    zwave: 'zwave',
    speaker: 'speaker',
    camera: 'camera',
    coolmaster: 'coolmaster'
}

let Converter = {
    /*
    Chuyen doi irview V1 sang Button ID V2
    */
    irViewV1toButtonIdV2: (irType, irview) => {
        if (irType == "Air Conditioning") {
            if(irview == "lgirpoweron") {
                return "air_on"
            } else if(irview == "lgirpoweroff") {
                return "air_off"
            } else if(irview == "lgirbutton1") {
                return "air_btn1"
            } else if(irview == "lgirbutton2") {
                return "air_btn2"
            } else if(irview == "lgirbutton3") {
                return "air_btn3"
            } else if(irview == "lgirbutton4") {
                return "air_btn4"
            } else if(irview == "lgirbutton5") {
                return "air_btn5"
            } else if(irview == "lgirbutton6") {
                return "air_btn6"
            }
        } else if (irType == "IR TV") {
            if(irview == "0") {
                return "tv_ch0"
            } else if(irview == "1") {
                return "tv_ch1"
            } else if(irview == "2") {
                return "tv_ch2"
            } else if(irview == "3") {
                return "tv_ch3"
            } else if(irview == "4") {
                return "tv_ch4"
            } else if(irview == "5") {
                return "tv_ch5"
            } else if(irview == "6") {
                return "tv_ch6"
            } else if(irview == "7") {
                return "tv_ch7"
            } else if(irview == "8") {
                return "tv_ch8"
            } else if(irview == "9") {
                return "tv_ch9"
            } else if(irview == "On/off") {
                return "tv_power"
            } else if(irview == "Vol Up") {
                return "tv_vol_up"
            } else if(irview == "Vol Down") {
                return "tv_vol_dow"
            } else if(irview == "CH Up") {
                return "tv_channel_up"
            } else if(irview == "CH Down") {
                return "tv_channel_dow"
            } else if(irview == "OK Up") {
                return "tv_menu_up"
            } else if(irview == "OK Down") {
                return "tv_menu_down"
            } else if(irview == "OK Back") {
                return "tv_menu_left"
            } else if(irview == "OK Next") {
                return "tv_menu_right"
            } else if(irview == "OK") {
                return "tv_menu_ok"
            } else if(irview == "Menu") {
                return "tv_menu"
            } else if(irview == "Input") {
                return "tv_input"
            } else if(irview == "Exit") {
                return "tv_enter"
            } else if(irview == "List") {
                return "tv_list"
            } else if(irview == "Info") {
                return "tv_info"
            }
        } else if (irType == "IR Fan") {
            if(irview == "On/off") {
                return "fan_onOff"
            } else if(irview == "Timer") {
                return "fan_timer"
            } else if(irview == "Swing") {
                return "fan_swing"
            } else if(irview == "Auto") {
                return "fan_auto"
            } else if(irview == "Speed") {
                return "fan_speed"
            }
        } else {
            return irview   //mean V2 keep the same
        }
    },
    /*
    chuyen type IR V1 -> V2
    */
    remoteTypeV1toV2: (remoteType) => {
        if (remoteType == "remote") {
            return "IR"
        } else if (remoteType == "remoteV2") {
            return "IRV2"
        }
    },
    /*
    chuyen type IR V1 -> V2
    */
    irTypeV1toV2: (irType) => {
        if (irType == "Air Conditioning") {
            return 3
        } else if (irType == "IR TV") {
            return 0
        } else if (irType == "IR Fan") {
            return 1
        } else {
            return irType
        }
    },
    /*
    chuyen type IR V2 -> V1
    */
    irTypeV2toV1: (irType) => {
        if (irType == "3") {
            return "Air Conditioning"
        } else if (irType == "0") {
            return "IR TV"
        } else if (irType == "1") {
            return "IR Fan"
        } else {
            return irType
        }
    },
    /*
    chuyển bridgekey v2 => devid v1
    */
    bridgeKeyV2ToV1: (brKey) => {
        if (brKey == BridgeKey.zigbee) {
            return 1
        } else if (brKey == BridgeKey.speaker) {
            return 2
        } else if (brKey == BridgeKey.zwave) {
            return 0
        } else if (brKey == BridgeKey.camera) {
            return 5
        } else if (brKey == BridgeKey.coolmaster) {
            return 6
        }
    },
    /*
    chuyển bridgekey v1 => devid v2
    */
    bridgeKeyV1ToV2: (brKeyV1) => {
        if (brKeyV1 == 1) {
            return BridgeKey.zigbee
        } else if (brKeyV1 == 2) {
            return BridgeKey.speaker
        } else if (brKeyV1 == 0) {
            return BridgeKey.zwave
        } else if (brKeyV1 == 5) {
            return BridgeKey.camera
        } else if (brKeyV1 == 6) {
            return BridgeKey.coolmaster
        }
    },
    /*
    chuyển devid v2 => devid v1
     */
    devidV2ToV1: (devid) => {
        let arrDevid = devid.split('_')
        let arrDev = arrDevid[1].split('-')
        let net = 0
        if (arrDev[0] == BridgeKey.zigbee) {
            net = 1
        } else if (arrDev[0] == BridgeKey.speaker) {
            net = 2
        } else if (arrDev[0] == BridgeKey.camera) {
            net = 5
        } else if (arrDev[0] == BridgeKey.coolmaster) {
            net = 6
        }
        return {
            machc: arrDevid[0],
            devid: arrDev[1],
            net: net,
            ord: arrDev[2]
        }
    },

    /*
    chuyển devid v1 => devid v2
     */
    devidV1ToV2: (machc, devid, net, ord) => {
        if (machc != undefined) {
            machc = machc.toLowerCase()
        }
        let bridge_key = BridgeKey.zwave
        if (net == 1) {
            bridge_key = BridgeKey.zigbee
        } else if (net == 2) {
            bridge_key = BridgeKey.speaker
        } else if (net == 5) {
            bridge_key = BridgeKey.camera
        } else if (net == 6) {
            bridge_key = BridgeKey.coolmaster
        }
        return machc + '_' + bridge_key + '-' + devid + '-' + ord
    },

    /*
    chuyển topic v2 => topic v1
     */
    topicV2ToV1: (topic) => {
        return topic.replace('hc', 'hcv1')
    },

    /*
    chuyển topic v1 => topic v2
     */
    topicV1ToV2: (topic) => {
        return topic.replace('hcv1', 'hc')
    },

    getTimeCurrent: () => {
        return new Date().getTime() / 1000;
    },

    /*
    phân tách  chuỗi str v1 thành các đối tượng cụ thể
     */
    getFormat: (str) => {
        let array
        let type = ''
        let cmd = ''
        let obj_data = ''
        let regex = RegExp('{', 'g')
        while ((array = regex.exec(str)) !== null) {
            let a = str.slice(0, regex.lastIndex - 1).replace('$', '').split("=")
            let b = JSON.parse(str.slice(regex.lastIndex - 1).replace('$end', ''))
            type = a[0]
            cmd = a[1]
            obj_data = b
            break;
        }
        return {type: type, cmd: cmd, obj_data: obj_data}
    },

    /*
    lấy deviceType v2 từ execution
     "type": "LIGHT"
     "traits": [{"name": "OnOff"}]
     */
    getDeviceTypeV1ByTypeAndTraitsV2: (type_v2, traits) => {
        let type = 0
        switch (type_v2) {
            case DeviceTypeV2.SWITCH:
                type = DeviceTypeV1.SWITCH
                break;
            case DeviceTypeV2.LIGHT:
                type = DeviceTypeV1.DIMMER
                for (let i in traits) {
                    let row = traits[i]
                    if (row.name == Traits.ColorSpectrum) {
                        type = DeviceTypeV1.RGB
                    }
                }
                break;
            case DeviceTypeV2.LIGHTV2:
                type = DeviceTypeV1.WW
                for (let i in traits) {
                    let row = traits[i]
                    if (row.name == Traits.ColorSpectrum) {
                        type = DeviceTypeV1.RGBWW
                    }
                }
                break;
            case DeviceTypeV2.FAN:
                type = DeviceTypeV1.FAN
                break;
            case DeviceTypeV2.CURTAIN:
                type = DeviceTypeV1.CURTAIN
                break;
            case DeviceTypeV2.IR:
                type = DeviceTypeV1.IR
                break;
            case DeviceTypeV2.DAIKIN:
                type = DeviceTypeV1.DAIKIN
                break;
            case DeviceTypeV2.SPEAKER:
                type = DeviceTypeV1.AUDIO
                break;
            case DeviceTypeV2.PEBBLE:
                type = DeviceTypeV1.PEBBLE
                break;
            case DeviceTypeV2.SENSOR:
                type = DeviceTypeV1.PIRAC
                for (let i in traits) {
                    let row = traits[i]
                    switch (row.name) {
                        case Traits.PirAlarm:
                            type = DeviceTypeV1.PIRSENSOR
                            break;
                        case Traits.ContactAlarm:
                            type = DeviceTypeV1.DOORSENSOR
                            break;
                        case Traits.Temperature:
                            type = DeviceTypeV1.TEMPSENSOR
                            break;
                        case Traits.Humidity:
                            type = DeviceTypeV1.HUMIDITYSENSOR
                            break;
                        case Traits.Luminance:
                            type = DeviceTypeV1.LIGHTSENSOR
                            break;
                        case Traits.WaterAlarm:
                            type = DeviceTypeV1.WATERSENSOR
                            break;
                        case Traits.SmokeAlarm:
                            type = DeviceTypeV1.SMOKESENSOR
                            break;
                        case Traits.COAlarm:
                            type = DeviceTypeV1.COSENSOR
                            break;
                        case Traits.ShockAlarm:
                            type = DeviceTypeV1.SHOCKSENSOR
                            break;
                        case Traits.Battery:
                            type = DeviceTypeV1.BATTERY
                            break;
                        case Traits.HeatAlarm:
                            type = DeviceTypeV1.HEATSENSOR
                            break;
                        case Traits.Power:
                            type = DeviceTypeV1.WATTSENSOR
                            break;
                        case Traits.Voltage:
                            type = DeviceTypeV1.VOLTSENSOR
                            break;
                        case Traits.Ampe:
                            type = DeviceTypeV1.AMPESENSOR
                            break;
                        default:
                            break;
                    }
                }
                break;
            case DeviceTypeV2.IR:
                type = DeviceTypeV1.IR
                break;
            case DeviceTypeV2.IRV2:
                type = DeviceTypeV1.IRV2
                break;
            case DeviceTypeV2.CAMERA:
                type = DeviceTypeV1.CAMERA
                break;
            case DeviceTypeV2.DOORLOCK:
                type = DeviceTypeV1.DOORLOCK
                break;
            case DeviceTypeV2.INPUT:
                type = DeviceTypeV1.INPUT
                break;
            case DeviceTypeV2.COOKER:
                type = DeviceTypeV1.COOKER
                break;
            default:
                break;
        }
        return type
    },

    /*
    đảo ngược giá trị enable : 1 => 0, 0 => 1
     */
    enableReverse: (enable) => {
        enable = parseInt(enable)
        if(enable == 0){
            enable = 1
        }else{
            enable = 0
        }
        return enable
    },
    /*
    chuyển execution v2 => val v1
     */
    executionToVal: (obj, type) => {
        let val = {}
        if (obj.command == Traits.IrConfig) {
            if (type == 'IR') {
                if(obj.params.irConfig == "learn") {
                    val.irid = '0'
                    val.act = '0'
                    val.buttonId = obj.params.buttonId.toString()
                } else if(obj.params.irConfig == "delete") {
                    let arrButtonIdV2 = obj.params.buttonId.split('__')   //ButtonId V2: 4w02lpw1n7clqk63lkcg924emr12j5hx__buttonId__tv_power

                    val.irid = obj.params.irId.toString()
                    val.act = '2'
                    val.componentcode = obj.params.buttonId
                    val.irview = arrButtonIdV2[2]
                    val.devkey = arrButtonIdV2[0]
                } else if(obj.params.irConfig == "stop") {  //Stop learning IR cmd
                    val.irid = '0'
                    val.act = '1'
                }
            }
        }
        if (obj.command == Traits.IrActiveV2) {
            if (type == 'IRV2') {
                val.irid = obj.params.irActiveV2.toString()
                val.act = '6'
                if(obj.arrIr != undefined) {
                    val.arrIr = obj.arrIr
                }
                if(obj.stateAcIr != undefined) {
                    val.stateAcIr = obj.stateAcIr
                }
            }
        }
        if (obj.command == Traits.IrActive) {
            if (type == 'IR') {
                //     if(obj.params.irActive != 0) {
                val.irid = obj.params.irActive.toString()
                val.act = '5'
                if(obj.stateAcIr != undefined) {
                    val.stateAcIr = obj.stateAcIr
                }
                //     }
            }
        }
        if (obj.command == Traits.OnOff) {
            val.state = obj.params.on ? 'on' : 'off'
            if (type == 'CURTAIN' || type == 'LIGHT' || type == 'FAN') {
                val.level = '-1'
            }
        }
        if (obj.command == Traits.Brightness) {
            if (type == DeviceTypeV2.LIGHT) {
                val.state = obj.params.brightness != 0 ? 'on' : 'off'
                val.level = obj.params.brightness.toString()
            } else if (type == DeviceTypeV2.LIGHTV2) {
                val.brightness = obj.params.brightness.toString()
            }
        }
        if (obj.command == Traits.ColorSpectrum) {
            val.state = obj.params.colorSpectrum != '00:00:00' ? 'on' : 'off'
            let levelV2 = obj.params.colorSpectrum.split(':')
            let levelV1 = []
            for (let colorV2 of levelV2) {
                levelV1.push(parseInt(colorV2, 16).toString())
            }
            val.level = levelV1.join(':')
        }
        if (obj.command == Traits.ColdWarmColor) {
            val.coldWarmColor = obj.params.coldWarmColor.toString()
        }
        if (obj.command == Traits.Speed) {
            if (type == 'FAN') {
                val.state = obj.params.speed != 0 ? 'on' : 'off'
                val.level = obj.params.speed.toString()
            } else if (type == 'DAIKIN') {
                val.fanmod = obj.params.speed.toString()
                // val.state = 'on'
            }
        }
        if (obj.command == Traits.OpenClose) {
            val.state = obj.params.open ? 'on' : 'off'
            val.level = '-1'
        }
        if (obj.command == Traits.StartStop) {
            val.state = obj.params.start ? 'on' : 'stop'
            val.level = '-1'
        }
        if (obj.command == Traits.Level) {
            val.state = obj.params.level != 0 ? 'on' : 'off'
            if (type == 'CURTAIN') {
                val.state = obj.params.level != 100 ? 'on' : 'off'
            }
            val.level = obj.params.level.toString()
        }
        if (obj.command == Traits.ConfigSpeaker) {
            val.lst = [{'info':'','act':''}]
            switch(obj.params.configCmd) {
                case 'getPlaylistUSB':
                    val.lst[0].act = '1'
                    break;
                case 'playtheUSBDisk':
                    val.lst[0].act = '2'
                    val.lst[0].info = obj.params.value
                    break
                case 'getSpeakerInformartion':
                    val.lst[0].act = '3'
                    break;
                case 'getPlaybackState':
                    val.lst[0].act = '15'
                    break;
                case 'renameSpeaker':
                    val.lst[0].act = '20'
                    val.lst[0].info = obj.params.value
                    break;
                case 'joinToGroup':
                    val.lst[0].act = '21'
                    val.lst[0].info = obj.params.value
                    break;
                case 'kickoutSlave':
                    val.lst[0].act = '22'
                    val.lst[0].info = obj.params.value
                    break;
                case 'setSlaveVolume':
                    val.lst[0].act = '23'
                    val.lst[0].info = obj.params.value
                    break;
                default:
                    val.lst[0].act = '1'
                    break;
			}
		}
	    if (obj.command == Traits.Speaker) {
            val.lst = [{'info':'','act':''}]
            if (obj.params.volume || (obj.params.volume == 0)) {
                val.lst[0].act = '4'
                val.lst[0].info = obj.params.volume
            } else if (obj.params.mute) {
                val.lst[0].act = '5'
                val.lst[0].info = obj.params.mute
            }
        }
        if (obj.command == Traits.LoopMode) {
            val.lst = [{'info':'','act':''}]
            val.lst[0].info = obj.params.loopMode
            val.lst[0].act = '6'
		}
        if (obj.command == Traits.PlayController) {
            val.lst = [{'info':'','act':''}]
            switch(obj.params.controller) {
                case 'pause':
                    val.lst[0].act = '13'
                    break;
                case 'resume':
                    val.lst[0].act = '14'
                    break;
                case 'previous':
                    val.lst[0].act = '16'
                    break;
                case 'next':
                    val.lst[0].act = '17'
                    break;
                case 'seek':
                    val.lst[0].act = '19'
                    val.lst[0].info = obj.params.value
                    break;
                default:
                    break;
            }
		}
	    if (obj.command == Traits.ChangeChannel) {
			val.lst = [{'info':'','act':''}]
            val.lst[0].info = obj.params.changeChannel
            val.lst[0].act = '18'
        }

        if (obj.command == Traits.TemperatureControl) {
            // val.state = 'on'
            if (type == DeviceTypeV2.COOKER) {
                val.tempset = obj.params.temperatureControl.toString()
            } else {
                val.coolingset = obj.params.temperatureControl.toString()
                val.heatingset = obj.params.temperatureControl.toString()
            }
        }
        if (obj.command == Traits.TemperatureSetting) {
            let sysmod = obj.params.temperatureSetting
            if (type == DeviceTypeV2.DAIKIN) {
                switch (obj.params.temperatureSetting) {
                    case 0: //Auto
                        sysmod = 1
                        break;
                    case 1: // Fan-Only
                        sysmod = 7
                        break;
                    case 2: // Heat
                        sysmod = 4
                        break;
                    case 3: // Cool
                        sysmod = 3
                        break;
                    case 4: // Dry
                        sysmod = 8
                        break;
                }
            }
            val.sysmod = sysmod.toString()
            // val.state = 'on'
        }
        if (obj.command == Traits.Swing) {
            val.fandirect = obj.params.swing.toString()
            // val.state = 'on'
        }
        if (obj.command == Traits.Act) {
            let act
            switch (parseInt(obj.params.act)) {
                case 7: act = 1; break;
                case 9: act = 2; break;
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    act = obj.params.act + 2
                    break;
                case 8: act = 9; break;
                default:
                    act = obj.params.act
                    break;
            }
            val.act = act.toString()
        }
        if (obj.command == Traits.PirAlarm) {
            val.level = obj.params.pirAlarm ? '1' : '0'
        }
        if (obj.command == Traits.ContactAlarm) {
            val.level = obj.params.csAlarm ? '0' : '1'
        }
        if (obj.command == Traits.Temperature) {
            if (type == DeviceTypeV2.SENSOR) {
                val.level = obj.params.temperature.toString()
            } else if (type == DeviceTypeV2.DAIKIN) {
                val.localtemp = obj.params.temperature.toString()
            }
        }
        if (obj.command == Traits.Humidity) {
            val.level = obj.params.humidity.toString()
        }
        if (obj.command == Traits.Luminance) {
            val.level = obj.params.lux.toString()
        }
        if (obj.command == Traits.SmokeAlarm) {
            val.level = obj.params.smokeAlarm ? '1' : '0';
        }
        if (obj.command == Traits.ShockAlarm) {
            val.level = obj.params.shockAlarm
        }
        if (obj.command == Traits.LockUnlock) {
            val.state = obj.params.lock ? 'on' : 'off'
        }
        if (obj.command == Traits.PinCode) {
            let act
            switch(obj.params.act){
                case 'set':
                    val.act = '1'
                    val.userId = obj.params.userId
                    val.pinCode = obj.params.pinCode
                    break;
                case 'get':
                    val.act = '2'
                    val.userId = obj.params.userId
                    break;
                case 'clear':
                    val.act = '3'
                    val.userId = obj.params.userId
                    break;
            }
        }
        if (obj.command == Traits.CameraEvent) {
            val.eventType = obj.params.eventType
        }
        if (obj.command == Traits.HeatAlarm) {
            val.level = obj.params.heatAlarm
        }
        if (obj.command == Traits.Power) {
            val.level = obj.params.power
        }
        if (obj.command == Traits.Voltage) {
            val.level = obj.params.voltage
        }
        if (obj.command == Traits.Ampe) {
            val.level = obj.params.ampe
        }
            return val
    },

    /*
    chuyển val v1 => states v2
     */
    valToStates: (device_type_v1, val) => {
        device_type_v1 = parseInt(device_type_v1)
        let device_type_v2 = Converter.deviceTypeV1ToV2(device_type_v1)
        let states = {}
        switch (device_type_v1) {
            case 1:
            case 9:
                if (val.state != undefined) {
                    states.OnOff = {
                        on: (val.state == 'on') ? true : false
                    }
                }
                break;
            case 2:
                if (val.state != undefined) {
                    states.OnOff = {
                        on: (val.state == 'on') ? true : false
                    }
                }
                if (val.level != undefined && parseInt(val.level) != -1) {
                    states.Brightness = {
                        brightness: parseInt(val.level)
                    }
                }
                break;
            case 3:
                if (val.state != undefined) {
                    states.OnOff = {
                        on: (val.state == 'on') ? true : false
                    }
                }
                if (val.level != undefined && parseInt(val.level) != -1) {
                    states.Speed = {
                        speed: parseInt(val.level)
                    }
                }
                break;
            case 4:
                if (val.state != undefined) {
                    states.OpenClose = {
                        open: (val.state == 'on') ? true : false
                    }
                }
                if (val.level != undefined && parseInt(val.level) != -1) {
                    states.Level = {
                        level: parseInt(val.level)
                    }
                }
                break;
            case 5:
                if(val.act == 0 && val.state == 1) {
                    states.IrStatus = {
                        irStatus: "learning"
                    }
                }
                if (val.act == 0 && val.state == 0 && val.irid != undefined) {
                    states.IrStatus = {
                        irStatus: "idle"
                    }
                    states.IrConfig = {
                        irConfig: "learn",
                        buttonId: val.buttonId,
                        irId: parseInt(val.irid)
                    }
                }
                if (val.act == 2 && val.state == 0 && val.irid != undefined) {
                    states.IrStatus = {
                        irStatus: "idle"
                    }
                    states.IrConfig = {
                        irConfig: "delete",
                        buttonId: val.buttonId,
                        irId: parseInt(val.irid)
                    }
                }
                if (val.act == 5 && val.irid != undefined) {
                    states.IrActive = {
                        irActive: parseInt(val.irid)
                    }
                }

                break;
            case 6:
                if (val.state != undefined) {
                    states.OnOff = {
                        on: (val.state == 'on') ? true : false
                    }
                }
                if (val.level != undefined && val.level != -1) {
                    let levelV1 = val.level.split(':')
                    let levelV2 = []
                    for (let colorV1 of levelV1) {
                        let colorV2 = parseInt(colorV1).toString(16).toLowerCase();
                        if (colorV2.length < 2)
                            colorV2 = '0' + colorV2;
                        levelV2.push(colorV2);
                    }
                    states.ColorSpectrum = {
                        colorSpectrum: levelV2.join(':')
                    }
                }
                if (val.modeActive != undefined) {
                    states.ModeActive = {
                        modeActive: parseInt(val.modeActive)
                    }
                }
                break;
            case 8: // Daikin
                if (val.state != undefined) {
                    states.OnOff = {
                        on: val.state == 'on' ? true : false
                    }
                }
                if (val.localtemp != undefined) {
                    states.Temperature = {
                        temperature: parseFloat(val.localtemp)
                    }
                }
                if (val.sysmod != undefined) {
                    let temperatureSetting = 0
                    switch (parseInt(val.sysmod)) {
                        case 1: //Auto
                            break;
                        case 7: // Fan-Only
                            temperatureSetting = 1
                            break;
                        case 4: // Heat
                            temperatureSetting = 2
                            break;
                        case 3: // Cool
                            temperatureSetting = 3
                            break;
                        case 8: // Dry
                            temperatureSetting = 4
                            break;
                        default:
                            break;
                    }
                    states.TemperatureSetting = {
                        temperatureSetting: temperatureSetting
                    }
                }
                if (val.coolingset != undefined) {
                    states.TemperatureControl = {
                        temperatureControl: parseFloat(val.coolingset)
                    }
                }
                if (val.heatingset != undefined) {
                    states.TemperatureControl = {
                        temperatureControl: parseFloat(val.heatingset)
                    }
                }
                if (val.fanmod != undefined) {
                    states.Speed = {
                        speed: parseInt(val.fanmod)
                    }
                }
                if (val.fandirect != undefined) {
                    states.Swing = {
                        swing: parseInt(val.fandirect)
                    }
                }
                break;
            case 10: //Audio
                if (val.act != undefined) {
                    switch (parseInt(val.act)) {
                        case 1:
                            states.ConfigSpeaker = {
                                configCmd: 'getPlaylistUSB'
                            }
                            break;
                        case 2:
                            states.ConfigSpeaker = {
                                configCmd: 'playtheUSBDisk',
                                value: val.info
                            }
                            break;
                        case 3:
                            states.ConfigSpeaker = {
                                configCmd: 'getSpeakerInformartion'
                            }
                            break;
                        case 4:
                            states.Speaker = {
                                volume: val.info
                            }
                            break;
                        case 5:
                            states.Speaker = {
                                mute: val.info
                            }
                            break;
                        case 6:
                            states.LoopMode = {
                                loopMode: val.info
                            }
                            break;
                        case 13:
                            states.PlayController = {
                                controller: 'pause'
                            }
                            break;
                        case 14:
                            states.PlayController = {
                                controller: 'resume'
                            }
                            break;
                        case 15:
                            states.ConfigSpeaker = {
                                configCmd: 'getPlaybackState'
                            }
                            break;
                        case 16:
                            states.PlayController = {
                                controller: 'previous'
                            }
                            break;
                        case 17:
                            states.PlayController = {
                                controller: 'next'
                            }
                            break;
                        case 18:
                            states.ChangeChannel = {
                                changeChannel: val.info
                            }
                            break;
                        case 19:
                            states.PlayController = {
                                controller: 'seek',
                                value: val.info
                            }
                            break;
                        default:
                            break;
                    }
                } else {
                    if (val.info != undefined) {
                        states = val.info
                    }
                }
                break;
            case 11: // Gas
                if (val.level != undefined) {
                    states.GasAlarm = {
                        gasAlarm: (val.level == 1) ? true : false
                    }
                }
                break;
            case 13:
                if (val.state != undefined) {
                    states.OnOff = {
                        on: states == "on"
                    }
                }
                if (val.level != undefined && val.level != -1) {
                    let levelV1 = val.level.split(':')
                    let levelV2 = []
                    for (let colorV1 of levelV1) {
                        let colorV2 = parseInt(colorV1).toString(16).toLowerCase();
                        if (colorV2.length < 2)
                            colorV2 = '0' + colorV2;
                        levelV2.push(colorV2);
                    }
                    states.ColorSpectrum = {
                        colorSpectrum: levelV2.join(':')
                    }
                }
                if (val.coldWarmColor != undefined) {
                    states.ColdWarmColor = {
                        coldWarmColor: parseInt(val.coldWarmColor)
                    }
                }
                if (val.brightness != undefined) {
                    states.Brightness = {
                        brightness: parseInt(val.brightness)
                    }
                }
                break;
            case 123: // Camera
                if (val.eventType != undefined) {
                    states.CameraEvent = {
                        eventType: val.eventType
                    }
                }
                if (val.urls != undefined && val.time != undefined) {
                    states.CameraSnapshot = {
                        urls: val.urls,
                        time: val.time
                    };
                }
                break;
            case 127: // Battery
                if (val.level != undefined) {
                    states.Battery = {
                        battery: parseInt(val.level)
                    }
                }
                break;
            case 128: // PIR
                if (val.level != undefined) {
                    states.PirAlarm = {
                        pirAlarm: val.level == '1' ? true : false
                    }
                }
                break;
            case 129: // Door
                if (val.level != undefined) {
                    states.ContactAlarm = {
                        csAlarm: val.level == '0' ? true : false
                    }
                }
                break;
            case 130: // Temperature
                if (val.level != undefined) {
                    states.Temperature = {
                        temperature: parseInt(val.level)
                    }
                }
                break;
            case 131: // Humidity
                if (val.level != undefined) {
                    states.Humidity = {
                        humidity: parseInt(val.level)
                    }
                }
                break;
            case 132: // Light
                if (val.level != undefined) {
                    states.Luminance = {
                        lux: parseInt(val.level)
                    }
                }
                break;
            case 133: // Pebble
                if (val.act != undefined) {
                    let act
                    switch (parseInt(val.act)) {
                        case 1: act = 7; break;
                        case 2: act = 9; break;
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                            act = val.act - 2
                            break;
                        case 9: act = 8; break;
                        default:
                            act = val.act
                            break;
                    }
                    states.Act = { act }
                }
                break;
            case 134: // Water
                if (val.level != undefined) {
                    states.WaterAlarm = {
                        waterAlarm: val.level == '1' ? true : false
                    }
                }
                break;
            case 135: // Smoke
                if (val.level != undefined) {
                    states.SmokeAlarm = {
                        smokeAlarm: val.level == '1' ? true : false
                    }
                }
                break;
            case 136: // CO
                if (val.level != undefined) {
                    states.COAlarm = {
                        coAlarm: val.level == '1' ? true : false
                    }
                }
                break;
            case 137: // Shock
                if (val.level != undefined) {
                    states.ShockAlarm = {
                        shockAlarm: parseInt(val.level)
                    }
                }
                break;
            case 138: // Lock
                if (val.state != undefined) {
                    states.LockUnlock = {
                        lock: val.state == 'on' ? true : false
                    }
                }
                if (val.act != undefined) {
                    let act
                    switch(val.act){
                        case "1":
                            act = 'set';
                            break;
                        case "2":
                            act = 'get';
                            break;
                        case "3":
                            act = 'clear';
                            break;
                        case "4":
                            act = 'update';
                            break;
                    }
                    states.PinCode = {
                        act: act,
                        userId: val.userId,
                        pinCode: val.pinCode,
                        status: val.status
                    }
                }
                if (val.battery != undefined) {
                    states.Battery = {
                        battery: parseInt(val.battery)
                    }
                }
                break;
            case 139:
                if (val.act == 6 && val.irid != undefined) {
                    states.IrActiveV2 = {
                        irActiveV2: val.irid
                    }
                }

                break;
            case 140:
                if (val.level != undefined) {
                    let heatAlarm = 'Normal';
                    if (parseInt(val.level) === -1) heatAlarm = 'Underheat';
                    else if (parseInt(val.level) === 1) heatAlarm = 'Overheat';
                    states.HeatAlarm = { heatAlarm }
                }
                break;
            case 141:
                if (val.level != undefined) {
                    states.Power = {
                        power: parseFloat(val.level)
                    }
                }
                break;
            case 142:
                if (val.level != undefined) {
                    states.Voltage = {
                        voltage: parseFloat(val.level)
                    }
                }
                break;
            case 143:
                if (val.level != undefined) {
                    states.Ampe = {
                        ampe: parseFloat(val.level)
                    }
                }
                break;
            case 144:
                if (val.state != undefined) {
                    states.OnOff = {
                        on: val.state == "on"
                    }
                }
                if (val.localtemp != undefined) {
                    states.Temperature = {
                        temperature: parseFloat(val.localtemp)
                    }
                }
                if (val.sysmod != undefined) {
                    states.TemperatureSetting = {
                        temperatureSetting: parseInt(val.sysmod)
                    }
                }
                if (val.tempset != undefined) {
                    states.TemperatureControl = {
                        temperatureControl: parseFloat(val.tempset)
                    }
                }
                break;
            default:
                break;
        }

        return states
    },

    /*
    chuyển đổi device type v1 => traits v2
     */
    traitsByDeviceTypeV1: (type_v1, net_V1) => {
        type_v1 = parseInt(type_v1)
        let traits = []
        switch (type_v1) {
            case 1:
                traits.push({name: Traits.OnOff, is_main: true})
                break;
            case 2:
                traits.push({name: Traits.OnOff, is_main: false})
                if (net_V1 == 0) {
                    traits.push({name: Traits.Brightness, is_main: true, min: 0, max: 99})
                } else if (net_V1 == 1) {
                    traits.push({name: Traits.Brightness, is_main: true, min: 0, max: 100})
                }
                break;
            case 3:
                if (net_V1 == 0) {
                    traits.push({name: Traits.Speed, is_main: true, min: 1, max: 3})
                } else if (net_V1 == 1) {
                    traits.push({name: Traits.Speed, is_main: true, min: 1, max: 4})
                }
                traits.push({name: Traits.OnOff, is_main: false})
                break;
            case 4:
                traits.push({name: Traits.OpenClose, is_main: false})
                traits.push({name: Traits.StartStop, is_main: false})
                if (net_V1 == 0) {
                    traits.push({name: Traits.Level, is_main: true, min: 0, max: 99})
                } else if (net_V1 == 1) {
                    traits.push({name: Traits.Level, is_main: true, min: 0, max: 100})
                }
                break;
            case 5:
                traits.push({name: Traits.IrConfig, is_main: false})
                traits.push({name: Traits.IrActive, is_main: false})
                traits.push({name: Traits.IrStatus, is_main: true})
                break;
            case 6:
                traits.push({name: Traits.OnOff, is_main: false})
                traits.push({name: Traits.ColorSpectrum, is_main: true})
                if (net_V1 == 1) {
                    traits.push({name: Traits.ModeActive, is_main: false})
                    traits.push({name: Traits.ModeConfig, is_main: false})
                }
                break;
            case 7:
                traits.push({name: Traits.PirAlarm, is_main: true})
                break;
            case 8:
                traits.push({name: Traits.OnOff, is_main: false})
                traits.push({name: Traits.Speed, is_main: true, min: 1, max: 3})
                traits.push({name: Traits.TemperatureControl, is_main: true, min: 16, max: 32})
                traits.push({name: Traits.TemperatureSetting, is_main: true, min: 2, max: 4})
                traits.push({name: Traits.Swing, is_main: true})
                traits.push({name: Traits.Temperature, is_main: true});
                break;
            case 9:
                traits.push({name: Traits.OnOff, is_main: true})
                break;
            case 10:
                traits.push({name: Traits.PlayController, is_main: true})
                traits.push({name: Traits.Speaker, is_main: true})
                traits.push({name: Traits.LoopMode, is_main: true})
                traits.push({name: Traits.ChangeChannel, is_main: true})
                traits.push({name: Traits.ConfigSpeaker, is_main: true})
                break;
            case 11:
                traits.push({name: Traits.GasAlarm, is_main: true})
                break;
            case 13:
                traits.push({name: Traits.OnOff, is_main: true})
                traits.push({name: Traits.Brightness, is_main: true, min: 0, max: 100})
                traits.push({name: Traits.ColdWarmColor, is_main: true, min: 0, max: 255})
                traits.push({name: Traits.ColorSpectrum, is_main: true})
                traits.push({name: Traits.ModeActive, is_main: false})
                traits.push({name: Traits.ModeConfig, is_main: false})
                break;
            case 15:
                traits.push({name: Traits.OnOff, is_main: true})
                traits.push({name: Traits.Brightness, is_main: true, min: 0, max: 100})
                traits.push({name: Traits.ColdWarmColor, is_main: true, min: 0, max: 255})
                traits.push({name: Traits.ModeActive, is_main: false})
                traits.push({name: Traits.ModeConfig, is_main: false})
                break;
            case 123:
                traits.push({name: Traits.CameraEvent, is_main: true, min: 0, max: 3})
                traits.push({name: Traits.CameraSnapshot, is_main: true})
                break;
            case 127:
                traits.push({name: Traits.Battery, is_main: true})
                break;
            case 128:
                traits.push({name: Traits.PirAlarm, is_main: true})
                break;
            case 129:
                traits.push({name: Traits.ContactAlarm, is_main: true})
                break;
            case 130:
                traits.push({name: Traits.Temperature, is_main: true})
                break;
            case 131:
                traits.push({name: Traits.Humidity, is_main: true})
                break;
            case 132:
                traits.push({name: Traits.Luminance, is_main: true})
                break;
            case 133:
                traits.push({name: Traits.Act, is_main: true})
                break;
            case 134:
                traits.push({name: Traits.WaterAlarm, is_main: true})
                break;
            case 135:
                traits.push({name: Traits.SmokeAlarm, is_main: true})
                break;
            case 136:
                traits.push({name: Traits.COAlarm, is_main: true})
                break;
            case 137:
                if (net_V1 == 0) {
                    traits.push({name: Traits.ShockAlarm, is_main: true})
                } else if (net_V1 == 1) {
                    traits.push({name: Traits.ShockAlarm, is_main: true, min: 0, max: 3})
                }
                break;
            case 138:
                traits.push({name: Traits.LockUnlock, is_main: true})
                traits.push({name: Traits.PinCode, is_main: true})
                traits.push({name: Traits.Battery, is_main: true})
                break;
            case 139:
                traits.push({name: Traits.IrActiveV2, is_main: true})
                break;
            case 140:
                traits.push({name: Traits.HeatAlarm, is_main: true})
                break;
            case 141:
                traits.push({name: Traits.Power, is_main: true})
                break;
            case 142:
                traits.push({name: Traits.Voltage, is_main: true})
                break;
            case 143:
                traits.push({name: Traits.Ampe, is_main: true})
                break;
            case 144:
                traits.push({name: Traits.OnOff, is_main: true})
                traits.push({name: Traits.TemperatureControl, is_main: true})
                traits.push({name: Traits.TemperatureSetting, is_main: true})
                traits.push({name: Traits.Temperature, is_main: true})
                break;
            default:
                break;
        }
        return traits
    },

    /*
    chuyển deviceType v1 => deviceType v2
     */
    deviceTypeV1ToV2: (type_v1) => {
        type_v1 = parseInt(type_v1)
        let type_v2 = ''
        switch (type_v1) {
            case 1:
                type_v2 = DeviceTypeV2.SWITCH
                break;
            case 2:
                type_v2 = DeviceTypeV2.LIGHT
                break;
            case 3:
                type_v2 = DeviceTypeV2.FAN
                break;
            case 4:
                type_v2 = DeviceTypeV2.CURTAIN
                break;
            case 5:
                type_v2 = DeviceTypeV2.IR
                break;
            case 6:
                type_v2 = DeviceTypeV2.LIGHT
                break;
            case 8:
                type_v2 = DeviceTypeV2.DAIKIN
                break;
            case 9:
                type_v2 = DeviceTypeV2.INPUT
                break;
            case 10:
                type_v2 = DeviceTypeV2.SPEAKER
                break;
            case 13:
            case 15:
                type_v2 = DeviceTypeV2.LIGHTV2
                break;
            case 14:
                type_v2 = DeviceTypeV2.UNKNOW
                break;
            case 7:
            case 11:
            case 12:
            case 127:
            case 128:
            case 129:
            case 130:
            case 131:
            case 132:
            case 134:
            case 135:
            case 136:
            case 137:
            case 140:
            case 141:
            case 142:
            case 143:
                type_v2 = DeviceTypeV2.SENSOR
                break;
            case 133:
                type_v2 = DeviceTypeV2.PEBBLE
                break;
            case 138:
                type_v2 = DeviceTypeV2.DOORLOCK
                break;
            case 139:
                type_v2 = DeviceTypeV2.IRV2
                break;
            case 123:
                type_v2 = DeviceTypeV2.CAMERA
                break;
            case 144:
                type_v2 = DeviceTypeV2.COOKER
                break;
            default:
                type_v2 = DeviceTypeV2.UNKNOW
                break;
        }
        return type_v2
    },

    /*
    chuyển deviceType v2 => deviceType v1
     */
    deviceTypeV2ToV1: (type_v2) => {
        let type_v1
        switch (type_v2) {
            case DeviceTypeV2.SWITCH:
                type_v1 = 1
                break;
            case DeviceTypeV2.LIGHT:
                type_v1 = 2
                break;
            case DeviceTypeV2.FAN:
                type_v1 = 3
                break;
            case DeviceTypeV2.CURTAIN:
                type_v1 = 4
                break;
            case DeviceTypeV2.IR:
                type_v1 = 5
                break;
            case DeviceTypeV2.LIGHT:
                type_v1 = 6
                break;
            case DeviceTypeV2.DAIKIN:
                type_v1 = 8
                break;
            case DeviceTypeV2.INPUT:
                type_v1 = 9
                break;
            case DeviceTypeV2.SPEAKER:
                type_v1 = 10
                break;
            case DeviceTypeV2.UNKNOW:
                type_v1 = 13
                break;
            case DeviceTypeV2.UNKNOW:
                type_v1 = 14
                break;
            case 7:
            case 11:
            case 12:
            case 127:
            case 128:
            case 129:
            case 130:
            case 131:
            case 132:
            case 134:
            case 135:
            case 136:
            case DeviceTypeV2.SENSOR:
                type_v1 = 137
                break;
            case DeviceTypeV2.PEBBLE:
                type_v1 = 133
                break;
            case DeviceTypeV2.DOORLOCK:
                type_v1 = 138
                break;
            case DeviceTypeV2.IRV2:
                type_v1 = 139
                break;
            case DeviceTypeV2.CAMERA:
                type_v1 = 123
                break;
            default:
                type_v1 = DeviceTypeV1.UNKNOW
                break;
        }
        return type_v1.toString()
    },

    rowDevV1ToV2: (row) => {
        let devid_new = Converter.devidV1ToV2(row.hc, row.devid, row.net, row.ord)
        let hash = devid_new.split('_')[1]
        let brigde_key = hash.split('-')[0]
        let mac = row.mac.split(':');
        let macdev = hash.split('-')[0] + '-' + mac[mac.length - 2] + mac[mac.length - 1];

        return {
            ...row,
            devid: devid_new,
            hash: hash,
            machc: row.hc,
            brigde_key: brigde_key,
            macdev: macdev,
            type: Converter.deviceTypeV1ToV2(row.type),
            traits: Converter.traitsByDeviceTypeV1(row.type, row.net)
        }
    },

    /*
    chuyển đổi rules v2 sang rules v1
    v2 obj
        {
            "type": "rules",
            "data": [{
                "ruleid": int,
                "name": "string",
                "type": int, // loại rule : 0 - rule điều khiển tự động, 1 - cảnh, 2 - rule security, 3 - lịch
                "enable": int, // trạng thái 1 : bật, 0 : tắt
                "active": int, // trạng thái 1 : đã cảnh báo , 0 : chưa hoạc đã tắt cảnh báo (web/app sử dụng)
                "is_run": int, // 1 là đã chạy rule , 0 là chưa chạy rule (xử lý logic)
                "time_send_notify": 0, // thời gian gủi thông báo gần nhất
                "time_retry_notify": 0, // thời gian lặp lại gủi thông báo (tính theo phút)
                "in": {
                    "schedule": {
                        "starttime": "05:30",
                        "endtime": "23:00",
                        "repeat": {
                            "type": int, // loại lắp lại : 0 - lặp lại theo date (ngày trong tuần), 1 -  lặp lại theo ngày cố định
                            "date": "1111111", // ngày trong tuần từ thứ 2 -> cn : 0 là off, 1 là on
                            "abouttime": {"year": "2016", "month": "08", "day": "08", "after": int} // ngày cố định kích hoạt , after - bước nhảy lặp lại tính từ ngày hoạt động
                        }
                    },
                    "devices": [
                        {"devid": "string", "type": "LIGHT", "traits": [{"name": "OnOff"}], "states": { "OnOff": { "on": false } }, "cond": int } // cond : phép so sánh điều kiện => 0 ==, 1 !=, 2 <, 3 <=, 4 >, 5 >=
                    ]
                },
                "out": {
                    "devices": [
                        { "devid": "string", "type": "LIGHT", "traits": [{"name": "OnOff"}], "execution": { "command": "OnOff", "params": { "on": false } }, "delay": int } // delay : sau bao nhiêu s thì đổi trạng thái device này
                    ],
                    "remotes": ["irid_1"],
                    "rules": ["ruleid_1"],
                    "notify": {
                        "push": ["1@1.com_1 / phone_1"], // gửi thông báo qua kênh push notify
                        "sms": ["phone_1"], // gửi thông báo qua kênh sms
                        "email": ["1@1.com"], // gửi thông báo qua email,
                        "before":0, // gửi trước bao nhiêu phút
                        "content": "AAAA" // nội dung thông báo
                    }
                }
            }]
        }
    v1 obj
        {
          "ruleid": "null",
          "name": "123",
          "type": "0",
          "in": {
            "dev": [
                { "devid": "74", "ord": "1", "net": "1", "devkey": "460675862", "type": "1", "cond": "0", "val": { "level": "0", "state": "off" }}
            ],
            "mode": "null"
          },
          "out": {
            "dev": [
              { "devid": "74", "ord": "5", "net": "1", "devkey": "460675864", "type": "1", "timer": "0", "val": { "level": "0", "state": "off" }}
            ],
            "scenes": "null"
          },
          "timeschedule": {
            "time": { "starttime": "0200", "endtime": "2200" },
            "rp": { "type": "0", "date": "1111111", "abouttime": { "year": "0", "month": "0", "day": "0", "after": "0" } }
          },
          "notify": {
                "push": [ { "content": "123", "user": [ "tester@gmail.com" ] } ],
                "msm": [{"content":"string","phonenumber":["phone1","phone2"]}]
          },
          "enable": "0",
          "roomid": "null",
          "shortcut": "0",
          "iconkey": "4",
          "issyn": "0",
          "isactiverule": "1"
        }
     */
    rulesRowV2ToV1: (dataRowV2) => {
        let inV2 = dataRowV2.in
        let outV2 = dataRowV2.out
        delete dataRowV2.is_run
        delete dataRowV2.time_send_notify
        delete dataRowV2.time_retry_notify
        delete dataRowV2.in
        delete dataRowV2.out
        if (dataRowV2.checkOneTime != undefined) delete dataRowV2.checkOneTime
        let enable = dataRowV2.enable != undefined ? Converter.enableReverse(dataRowV2.enable) : -1
        let dataRowV1 = {...dataRowV2, in: {}, out: {}, timeschedule: {}, notify: {}, isactiverule: dataRowV2.active }
        if (enable != -1) dataRowV1.enable = enable
        delete dataRowV1.active
        if (inV2 !== undefined && inV2.devices !== undefined) {
            dataRowV1.in = Converter.deviceInV2ToV1(inV2.devices)
            dataRowV1.in.logic = inV2.logic;
        }
        if (inV2 !== undefined && inV2.schedule !== undefined) {
            dataRowV1.timeschedule.time = {}
            if (inV2.schedule.starttime != undefined) {
                dataRowV1.timeschedule.time.starttime = inV2.schedule.starttime.replace(':', '')
            }
            if (inV2.schedule.endtime != undefined) {
                dataRowV1.timeschedule.time.endtime = inV2.schedule.endtime.replace(':', '')
            }
            if (inV2.schedule.repeat != undefined) {
                dataRowV1.timeschedule.rp = inV2.schedule.repeat
                if (inV2.schedule.repeat.date != undefined && inV2.schedule.repeat.date != '') {
                    // dataRowV1.timeschedule.rp.date = Converter.repeatDateV2ToV1(inV2.schedule.repeat.date)
                    dataRowV1.timeschedule.rp.date = inV2.schedule.repeat.date
                }
            }
        }

        if (outV2 != undefined) {
            if (outV2.devices != undefined) {
                dataRowV1.out = Converter.deviceOutV2ToV1(outV2.devices)
            }

            if (outV2.scenes != undefined) {
                dataRowV1.out.scenes = [];
                outV2.scenes.forEach(scene => dataRowV1.out.scenes.push({
                    ruleid: scene.ruleid,
                    timer: scene.delay
                }))
            }

            if (outV2.notify != undefined) {
                if (outV2.notify.push != undefined && outV2.notify.content != undefined) {
                    if (outV2.notify.before == undefined) {
                        dataRowV1.notify.push = [{content: outV2.notify.content, user: outV2.notify.push}]
                    } else {
                        dataRowV1.notify.push = [{content: outV2.notify.content, user: outV2.notify.push, before: outV2.notify.before}]
                    }
                }
                if (outV2.notify.sms != undefined && outV2.notify.content != undefined) {
                    if (outV2.notify.before == undefined) {
                        dataRowV1.notify.msm = [{content: outV2.notify.content, phonenumber: outV2.notify.sms}]
                    } else {
                        dataRowV1.notify.msm = [{content: outV2.notify.content, phonenumber: outV2.notify.sms, before: outV2.notify.before}]
                    }
                }
                if (outV2.notify.email != undefined && outV2.notify.content != undefined) {
                    if (outV2.notify.before == undefined) {
                        dataRowV1.notify.email = [{content: outV2.notify.content, email: outV2.notify.email}]
                    } else {
                        dataRowV1.notify.email = [{content: outV2.notify.content, email: outV2.notify.email, before: outV2.notify.before}]
                    }
                }
            }
        }
        return dataRowV1
    },

    /*
    chuyển đổi rules v1 sang rules v2
    v2 obj
        {
            "type": "rules",
            "data": [{
                "ruleid": int,
                "name": "string",
                "type": int, // loại rule : 0 - rule điều khiển tự động, 1 - cảnh, 2 - rule security, 3 - lịch
                "enable": int, // trạng thái 1 : bật, 0 : tắt
                "active": int, // trạng thái 1 : đã cảnh báo , 0 : chưa hoạc đã tắt cảnh báo (web/app sử dụng)
                "is_run": int, // 1 là đã chạy rule , 0 là chưa chạy rule (xử lý logic)
                "time_send_notify": 0, // thời gian gủi thông báo gần nhất
                "time_retry_notify": 0, // thời gian lặp lại gủi thông báo (tính theo phút)
                "in": {
                    "schedule": {
                        "starttime": "05:30",
                        "endtime": "23:00",
                        "repeat": {
                            "type": int, // loại lắp lại : 0 - lặp lại theo date (ngày trong tuần), 1 -  lặp lại theo ngày cố định
                            "date": "1111111", // ngày trong tuần từ thứ 2 -> cn : 0 là off, 1 là on
                            "abouttime": {"year": "2016", "month": "08", "day": "08", "after": int} // ngày cố định kích hoạt , after - bước nhảy lặp lại tính từ ngày hoạt động
                        }
                    },
                    "devices": [
                        {"devid": "string", "type": "LIGHT", "traits": [{"name": "OnOff"}], "states": { "OnOff": { "on": false } }, "cond": int } // cond : phép so sánh điều kiện => 0 ==, 1 !=, 2 <, 3 <=, 4 >, 5 >=
                    ]
                },
                "out": {
                    "devices": [
                        { "devid": "string", "type": "LIGHT", "traits": [{"name": "OnOff"}], "execution": { "command": "OnOff", "params": { "on": false } }, "delay": int } // delay : sau bao nhiêu s thì đổi trạng thái device này
                    ],
                    "remotes": ["irid_1"],
                    "rules": ["ruleid_1"],
                    "notify": {
                        "push": ["1@1.com_1 / phone_1"], // gửi thông báo qua kênh push notify
                        "sms": ["phone_1"], // gửi thông báo qua kênh sms
                        "email": ["1@1.com"], // gửi thông báo qua email,
                        "before":0, // gửi trước bao nhiêu phút
                        "content": "AAAA" // nội dung thông báo
                    }
                }
            }]
        }
    v1 obj
        {
          "ruleid": "null",
          "name": "123",
          "type": "0",
          "in": {
            "dev": [
                { "devid": "74", "ord": "1", "net": "1", "devkey": "460675862", "type": "1", "cond": "0", "val": { "level": "0", "state": "off" }}
            ],
            "mode": "null"
          },
          "out": {
            "dev": [
              { "devid": "74", "ord": "5", "net": "1", "devkey": "460675864", "type": "1", "timer": "0", "val": { "level": "0", "state": "off" }}
            ],
            "scenes": "null"
          },
          "timeschedule": {
            "time": { "starttime": "0200", "endtime": "2200" },
            "rp": { "type": "0", "date": "1111111", "abouttime": { "year": "0", "month": "0", "day": "0", "after": "0" } }
          },
          "notify": {
                "push": [ { "content": "123", "user": [ "tester@gmail.com" ] } ],
                "msm": []
          },
          "enable": "0",
          "roomid": "null",
          "shortcut": "0",
          "iconkey": "4",
          "issyn": "0",
          "isactiverule": "1"
        }
     */
    rulesRowV1ToV2: (dataRowV1) => {
        let inV1 = dataRowV1.in
        let outV1 = dataRowV1.out
        let timescheduleV1 = dataRowV1.timeschedule
        let notifyV1 = dataRowV1.notify

        delete dataRowV1.timeschedule
        delete dataRowV1.notify
        delete dataRowV1.in
        delete dataRowV1.out
        if (dataRowV1.checkOneTime != undefined) delete dataRowV1.checkOneTime

        let dataRowV2 = {...dataRowV1, in: {}, out: {}, active: dataRowV1.isactiverule, enable: Converter.enableReverse(dataRowV1.enable)}
        delete dataRowV2.isactiverule
        if (inV1 !== undefined && inV1.dev !== undefined) {
            dataRowV2.in.devices = Converter.deviceInV1ToV2(inV1.dev)
            dataRowV2.in.logic = inV1.logic
        }

        if (timescheduleV1 !== undefined) {
            dataRowV2.in.schedule = {}
            if (timescheduleV1.time != undefined) {
                if(timescheduleV1.time.starttime != undefined){
                    dataRowV2.in.schedule.starttime = Converter.timeV1ToV2(timescheduleV1.time.starttime)
                }
                if(timescheduleV1.time.endtime != undefined){
                    dataRowV2.in.schedule.endtime = Converter.timeV1ToV2(timescheduleV1.time.endtime)
                }
            }
            if (timescheduleV1.rp != undefined) {
                dataRowV2.in.schedule.repeat = timescheduleV1.rp
                if (timescheduleV1.rp.date != undefined && timescheduleV1.rp.date != '') {
                    // dataRowV2.in.schedule.repeat.date = Converter.repeatDateV1ToV2(timescheduleV1.rp.date)
                    dataRowV2.in.schedule.repeat.date = timescheduleV1.rp.date
                }
            }
            if(Object.keys(dataRowV2.in.schedule).length === 0 && dataRowV2.in.schedule.constructor === Object){
                delete dataRowV2.in.schedule
            }
        }

        if (outV1 != undefined) {
            if (outV1.dev != undefined) {
                dataRowV2.out.devices = Converter.deviceOutV1ToV2(outV1.dev)
            }
            if (outV1.scenes != undefined && outV1.scenes.constructor == Array) {
                dataRowV2.out.scenes = []
                outV1.scenes.forEach(scene => dataRowV2.out.scenes.push({
                    ruleid: scene.ruleid,
                    delay: scene.timer
                }))
            }
        }

        if (notifyV1 != undefined) {
            if (notifyV1.push != undefined) {
                dataRowV2.out.notify = {}
                if (notifyV1.push[0] != undefined && notifyV1.push[0].user != undefined) {
                    dataRowV2.out.notify.push = notifyV1.push[0].user
                }
                if (notifyV1.msm != undefined) {
                    if (notifyV1.msm[0] != undefined && notifyV1.msm[0].phonenumber != undefined) {
                        dataRowV2.out.notify.sms = notifyV1.msm[0].phonenumber
                    }
                }
                if (notifyV1.email != undefined) {
                    if (notifyV1.email[0] != undefined && notifyV1.email[0].email != undefined) {
                        dataRowV2.out.notify.email = notifyV1.email[0].email
                    }
                }
                if (notifyV1.push[0] != undefined && notifyV1.push[0].content != undefined) {
                    dataRowV2.out.notify.content = notifyV1.push[0].content
                    if (notifyV1.push[0].before != undefined) {
                        dataRowV2.out.notify.before = notifyV1.push[0].before
                    }
                }
                if(Object.keys(dataRowV2.out.notify).length === 0 && dataRowV2.out.notify.constructor === Object){
                    delete dataRowV2.out.notify
                }
            }
        }

        return dataRowV2
    },

    /*
    chuyển device in v2 sang dev in v1
    v2- message
        [
            {"devid": "string", "type": "LIGHT", "traits": [{"name": "OnOff"}], "states": { "OnOff": { "on": false } }, "cond": int } // cond : phép so sánh điều kiện => 0 ==, 1 !=, 2 <, 3 <=, 4 >, 5 >=
        ]

    v1- message
        {
            "dev": [
                { "devid": "74", "ord": "1", "net": "1", "devkey": "460675862", "type": "1", "cond": "0", "val": { "level": "0", "state": "off" }}
            ],
            "mode": "null"
        }
     */
    deviceInV2ToV1: (inV2_devices) => {
        let inV1 = {
            dev: [],
            mode: null
        }
        for (let i in inV2_devices) {
            let rowDeviceV2 = inV2_devices[i]
            let rowDevV1 = {...Converter.devidV2ToV1(rowDeviceV2.devid), cond: Converter.condV2ToV1(rowDeviceV2.cond)}
            rowDevV1.type = Converter.getDeviceTypeV1ByTypeAndTraitsV2(rowDeviceV2.type, rowDeviceV2.traits)
            Object.keys(rowDeviceV2.states).map(function (key, index) {
                rowDevV1.val = Converter.executionToVal({command: key, params: rowDeviceV2.states[key]}, rowDeviceV2.type);
            });
            inV1.dev.push(rowDevV1)
        }
        return inV1
    },

    /*
    chuyển device in v1 sang dev in v2
    v2- message
        [
            {"devid": "string", "type": "LIGHT", "traits": [{"name": "OnOff"}], "states": { "OnOff": { "on": false } }, "cond": int } // cond : phép so sánh điều kiện => 0 ==, 1 !=, 2 <, 3 <=, 4 >, 5 >=
        ]

    v1- message
        {
            "dev": [
                { "devid": "74", "ord": "1", "net": "1", "devkey": "460675862", "type": "1", "cond": "0", "val": { "level": "0", "state": "off" }}
            ],
            "mode": "null"
        }
     */
    deviceInV1ToV2: (inV1_dev) => {
        let inV2_devices = []
        for (let i in inV1_dev) {
            let rowDevV1 = inV1_dev[i]
            let rowDevV2 = {
                devid: Converter.devidV1ToV2(rowDevV1.machc, rowDevV1.devid, rowDevV1.net, rowDevV1.ord),
                cond: Converter.condV1ToV2(rowDevV1.cond),
                states: Converter.valToStates(rowDevV1.type, rowDevV1.val)
            }
            inV2_devices.push(rowDevV2)
        }
        return inV2_devices
    },

    /*
    v2-message
        [
          { "devid": "string", "type": "LIGHT", "traits": [{"name": "OnOff"}], "execution": { "command": "OnOff", "params": { "on": false } }, "delay": int } // delay : sau bao nhiêu s thì đổi trạng thái device này
        ]
    v1-message
        {
            "dev": [
              { "devid": "74", "ord": "5", "net": "1", "devkey": "460675864", "type": "1", "timer": "0", "val": { "level": "0", "state": "off" }}
            ],
            "scenes": "null"
        }
     */
    deviceOutV2ToV1: (outV2_devices) => {
        let outV1 = {
            dev: []
        }
        for (let i in outV2_devices) {
            let rowDeviceV2 = outV2_devices[i]
            let rowDevV1 = {...Converter.devidV2ToV1(rowDeviceV2.devid), timer: rowDeviceV2.delay}
            rowDevV1.type = Converter.getDeviceTypeV1ByTypeAndTraitsV2(rowDeviceV2.type, rowDeviceV2.traits)
            if(rowDeviceV2.remoteid != undefined) {
                rowDevV1.remoteid = rowDeviceV2.remoteid
            }
            if (typeof rowDeviceV2.execution === 'object' && rowDeviceV2.execution.constructor === Array) {
                rowDevV1.val = {lst: []}
                for (let execution of rowDeviceV2.execution) {
                    let val = Converter.executionToVal(execution, rowDeviceV2.type)
                    if (val.lst != undefined) {
                        for (let item of val.lst) {
                            rowDevV1.val.lst.push(item)
                        }
                    } else {
                        rowDevV1.val.lst.push(val)
                    }
                }
            } else {
                rowDevV1.val = Converter.executionToVal(rowDeviceV2.execution, rowDeviceV2.type)
            }
            outV1.dev.push(rowDevV1)
        }
        return outV1
    },

    /*
    v2-message
        [
          { "devid": "string", "type": "LIGHT", "traits": [{"name": "OnOff"}], "execution": { "command": "OnOff", "params": { "on": false } }, "delay": int } // delay : sau bao nhiêu s thì đổi trạng thái device này
        ]
    v1-message
        {
            "dev": [
              { "devid": "74", "ord": "5", "net": "1", "devkey": "460675864", "type": "1", "timer": "0", "val": { "level": "0", "state": "off" }}
            ],
            "scenes": "null"
        }
     */
    deviceOutV1ToV2: (outV1_dev) => {
        let outV2_devices = []
        for (let i in outV1_dev) {
            let rowDevV1 = outV1_dev[i]
            let rowDevV2 = {
                devid: Converter.devidV1ToV2(rowDevV1.machc, rowDevV1.devid, rowDevV1.net, rowDevV1.ord),
                delay: rowDevV1.timer
            }
            if(rowDevV1.remoteid != undefined) {
                rowDevV2.remoteid = rowDevV1.remoteid
            }

            if (rowDevV1.val.lst != undefined && typeof rowDevV1.val.lst === 'object' && rowDevV1.val.lst.constructor === Array) {
                rowDevV2.execution = []
                for (let item of rowDevV1.val.lst) {
                    let execution = {}
                    let rowDevV2_state = Converter.valToStates(rowDevV1.type, item)
                    Object.keys(rowDevV2_state).map(function (key, index) {
                        execution.command = key
                        execution.params = rowDevV2_state[key]
                    });
                    if(rowDevV1.val.arrIr != undefined) {
                        execution.arrIr = rowDevV1.val.arrIr
                    }
                    if(rowDevV1.val.stateAcIr != undefined) {
                        execution.stateAcIr = rowDevV1.val.stateAcIr
                    }


                    rowDevV2.execution.push(execution)
                }
            } else {
                rowDevV2.execution = {}
                let rowDevV2_state = Converter.valToStates(rowDevV1.type, rowDevV1.val)
                Object.keys(rowDevV2_state).map(function (key, index) {
                    rowDevV2.execution.command = key
                    rowDevV2.execution.params = rowDevV2_state[key]
                });
                if(rowDevV1.val.arrIr != undefined) {
                    rowDevV2.execution.arrIr = rowDevV1.val.arrIr
                }
                if(rowDevV1.val.stateAcIr != undefined) {
                    rowDevV2.execution.stateAcIr = rowDevV1.val.stateAcIr
                }
            }

            outV2_devices.push(rowDevV2)
        }
        return outV2_devices
    },

    condV2ToV1: (cond) => {
        cond = parseInt(cond)
        if (cond == 3) {
            cond = 4
        } else if (cond == 4) {
            cond = 3
        }
        return cond
    },

    condV1ToV2: (cond) => {
        cond = parseInt(cond)
        if (cond == 4) {
            cond = 3
        } else if (cond == 3) {
            cond = 4
        }
        return cond
    },

    repeatDateV2ToV1: (str) => {
        let res = str.split("")
        return res[1] + res[2] + res[3] + res[4] + res[5] + res[6] + res[0]
    },

    repeatDateV1ToV2: (str) => {
        let res = str.split("")
        return res[6] + res[0] + res[1] + res[2] + res[3] + res[4] + res[5]
    },

    timeV1ToV2: (str) => {
        let res = str.split("")
        return res[0] + res[1] + ':' + res[2] + res[3]
    },
    /*
    chuyển bản tin lỗi v1 => v2
     */
    errorV1ToV2: (payload) => {
        try {
            return payload;
        } catch (e) {
            throw new Error('Error: ' + e);
        }
    },

    /*
    chuyển các bản tin config v1 => v2
    v1-payload
        {
            "reqid":"1551328475",
            "versions":5
            "str_cmd":"$dev=lstadd{\"dev\":[{\"devid\":\"6\",\"hc\":\"9c:65:f9:27:ad:9a\",\"mac\":\"00:0B:57:FF:FE:59:AA:FD\",\"net\":\"1\",\"ord\":\"1\",\"type\":\"4\"},{\"devid\":\"6\",\"hc\":\"9c:65:f9:27:ad:9a\",\"mac\":\"00:0B:57:FF:FE:59:AA:FD\",\"net\":\"1\",\"ord\":\"3\",\"type\":\"4\"}],\"type\":\"0\"}$end",
        }

     v2-payload
        {
            "cmd":"sync",
            "reqid":"1551328475",
            "objects":[
                {
                    "type":"devices",
                    "data":[
                        {"devid":"zigbee-6-1","hc":"9c:65:f9:27:ad:9a","mac":"00:0B:57:FF:FE:59:AA:FD","net":"1","ord":"1","type":"4"}}
                    ]
                }
             ]
        }

     */
    configV1ToV2: (payload) => {
        try {
            let reqid = payload.reqid
            let objFormat = Converter.getFormat(payload.str_cmd)
            let payload_new = {}
            switch (objFormat.type) {
                case 'dev': {
                    let dev = objFormat.obj_data.dev
                    let data = []
                    switch (objFormat.cmd) {
                        case 'sync':
                        case 'syncres':
                            for (let i in dev) {
                                let row_new = Converter.rowDevV1ToV2(dev[i])
                                data.push(row_new)
                            }
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'devices',
                                        versions: parseInt(payload.versions),
                                        data: data
                                    }
                                ]
                            }
                            if(data.length <= 0){
                                console.log("===================================>Sync device empty")
                            }
                            break;
                        case 'lstadd':
                        case 'syncinfo':
                            for (let i in dev) {
                                let row_new = Converter.rowDevV1ToV2(dev[i])
                                data.push(row_new)
                            }
                            payload_new = {
                                cmd: 'response',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'devices',
                                        versions: parseInt(payload.versions),
                                        data: data
                                    }
                                ]
                            }
                            break;
                        case 'rmv':
                            for (let i in dev) {
                                let row = dev[i]
                                data.push(Converter.devidV1ToV2(row.hc, row.devid, row.net, row.ord))
                            }
                            payload_new = {
                                cmd: 'delete',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'devices',
                                        data: data
                                    }
                                ]
                            }
                            break;
                        default:
                            break;
                    }
                }
                    break;
                case 'group': {
                    let data = []
                    switch (objFormat.cmd) {
                        case 'addres':
                            data.push(objFormat.obj_data)
                            payload_new = {
                                cmd: 'response',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'groups',
                                        versions: parseInt(payload.versions),
                                        data: data
                                    }
                                ]
                            }
                            break;
                        case 'sync':
                            let lst = objFormat.obj_data.lst
                            for (let i in lst) {
                                data.push(lst[i])
                            }
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'groups',
                                        versions: parseInt(payload.versions),
                                        data: data
                                    }
                                ]
                            }
                            break;
                    }
                }
                    break;
                case 'rule': {
                    let data = []
                    switch (objFormat.cmd) {
                        case 'addres':
                            if (objFormat.obj_data.lst != undefined) {
                                for (let rule of objFormat.obj_data.lst) {
                                    data.push(Converter.rulesRowV1ToV2(rule))
                                }
                            }

                            payload_new = {
                                cmd: 'response',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'rules',
                                        versions: parseInt(payload.versions),
                                        data: data
                                    }
                                ]
                            }
                            break;
                        case 'sync':
                            if (objFormat.obj_data.lst != undefined) {
                                let lstRuleV1 = objFormat.obj_data.lst
                                for (let i in lstRuleV1) {
                                    data.push(Converter.rulesRowV1ToV2(lstRuleV1[i]))
                                }
                            }
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'rules',
                                        versions: parseInt(payload.versions),
                                        data: data
                                    }
                                ]
                            }
                            break;
                    }
                }
                    break;
                case 'floor': {
                    let dataFloorRes = []
                    switch (objFormat.cmd) {
                        case 'addres':
                            for (let i in objFormat.obj_data.lst) {
                                dataFloorRes.push({
                                    floorid: objFormat.obj_data.lst[i].floorid,
                                    name: objFormat.obj_data.lst[i].name
                                })
                            }
                            payload_new = {
                                cmd: 'response',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'floors',
                                        versions: parseInt(payload.versions),
                                        data: dataFloorRes
                                    }
                                ]
                            }
                            break;
                        case 'sync':
                            let lst = objFormat.obj_data.lst
                            for (let i in lst) {
                                dataFloorRes.push(lst[i])
                            }
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'floors',
                                        versions: parseInt(payload.versions),
                                        data: dataFloorRes
                                    }
                                ]
                            }
                            break;
                    }
                }
                    break;
                case 'room': {
                    let dataRoomRes = []
                    switch (objFormat.cmd) {
                        case 'addres':
                            for (let i in objFormat.obj_data.lst) {
                                dataRoomRes.push({
                                    roomid: objFormat.obj_data.lst[i].roomid,
                                    floorid: objFormat.obj_data.lst[i].floorid,
                                    name: objFormat.obj_data.lst[i].name,
                                    image: objFormat.obj_data.lst[i].iconkey
                                })
                            }
                            payload_new = {
                                cmd: 'response',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'rooms',
                                        versions: parseInt(payload.versions),
                                        data: dataRoomRes
                                    }
                                ]
                            }
                            break;
                        case 'sync':
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'rooms',
                                        versions: parseInt(payload.versions),
                                        data: objFormat.obj_data.lst
                                    }
                                ]
                            }
                            break;
                    }
                }
                    break;
                case 'hc':{
                    switch (objFormat.cmd) {
                        case 'systeminfo':
                            let software = objFormat.obj_data.info
                            let macAddr = objFormat.obj_data.mac
                            let data = [{software, macAddr }]
                            payload_new = {
                                cmd: 'post',
                                reqid: reqid,
                                objects: [{
                                        type: 'system_info',
                                        data: data
                                }]
                            }
                            break;
                        case 'sync':
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'hcs',
                                        versions: parseInt(payload.versions),
                                        data: objFormat.obj_data.lst
                                    }
                                ]
                            }
                    }
                    
                }
                    break;
                case 'db': {
                    let lstVersionsGet = []
                    let lstVersions = []
                    switch (objFormat.cmd) {
                        case 'getversion':
                            lstVersions = objFormat.obj_data.lst
                            for (let i in lstVersions) {
                                lstVersionsGet.push(lstVersions[i])
                            }
                            payload_new = {
                                cmd: 'get',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'versions',
                                        data: lstVersionsGet
                                    }
                                ]
                            }
                            break;
                        case 'requestsync':
                            lstVersionsGet.push(objFormat.obj_data.lst)
                            let typeDb = 'versions'
                            if (objFormat.obj_data.lst.users != undefined) {
                                typeDb =  'serverversion'
                            }
                            payload_new = {
                                cmd: 'post',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: typeDb,
                                        data: lstVersionsGet
                                    }
                                ]
                            }
                            break;
                    }
                }
                    break;
                case 'camera': {
                    switch (objFormat.cmd) {
                        case 'sync': {
                            let cameraSync = []
                            let lst = objFormat.obj_data.lst
                            for (let i in lst) {
                                if (lst[i].device != undefined) {
                                    let device = lst[i].device;
                                    let devid = Converter.devidV1ToV2(device.hc, device.devid, device.net, device.ord)
                                    let type = Converter.deviceTypeV1ToV2(device.type)
                                    let traits = Converter.traitsByDeviceTypeV1(device.type, device.net);
                                    delete lst[i].device
                                    lst[i].device = { devid, type, traits }
                                }
                                cameraSync.push(lst[i])
                            }
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'cameras',
                                        versions: parseInt(payload.versions),
                                        data: cameraSync
                                    }
                                ]
                            }
                        } break;
                    }
                } break;
                case 'ir': {
                    switch (objFormat.cmd) {
                        case 'sync': {
                            let traitsSync = [
                                {
                                    name : "IrActive",
                                    is_main : true
                                },
                                {
                                    name : "IrConfig",
                                    is_main : true
                                },
                                {
                                    name : "IrStatus",
                                    is_main : true
                                }

                            ]
                            let irremoteSync = []
                            let lstRemoteGet = objFormat.obj_data.lst
                            for (let i in lstRemoteGet) {


                                let devid_new = Converter.devidV1ToV2(lstRemoteGet[i].hc, lstRemoteGet[i].devid, lstRemoteGet[i].net, lstRemoteGet[i].ord)
                                let hash = devid_new.split('_')[1]
                                // let mac = row.mac.split(':');
                                // let macdev = hash.split('-')[0] + '-' + mac[6] + mac[7];
                                // let brigde_key = hash.split('-')[0]
                                // return {
                                //     ...row,
                                //     devid: devid_new,
                                //     hash: hash,
                                //     machc: row.hc,
                                //     brigde_key: brigde_key,
                                //     macdev: macdev,
                                //     type: Converter.deviceTypeV1ToV2(row.type),
                                //     traits: Converter.traitsByDeviceTypeV1(row.type)
                                // }

                                // let lstIrCommandsGet = []
                                // for (let ii in lstRemoteGet[i].lst) {
                                //     lstIrCommandsGet.push({
                                //         buttonId: Converter.irViewV1toButtonIdV2(lstRemoteGet[i].irtype,lstRemoteGet[i].lst[ii].irview),
                                //         commandId: parseInt(lstRemoteGet[i].lst[ii].irid)
                                //     })
                                // }

                                let rowSync = {
                                    hash: hash,
                                    macdev: lstRemoteGet[i].macdev,
                                    // attr: ""
                                    machc: lstRemoteGet[i].hc,
                                    devid: devid_new,
                                    brigde_key: "zigbee",
                                    type: Converter.remoteTypeV1toV2(lstRemoteGet[i].remoteversion),
                                    traits: traitsSync,
                                    irtype: Converter.irTypeV1toV2(lstRemoteGet[i].irtype).toString(),
                                    remoteid: lstRemoteGet[i].devkey,
                                }
                                if(lstRemoteGet[i].remoteversion == "remote") {
                                    let lstIrCommandsGet = []
                                    for (let ii in lstRemoteGet[i].lst) {
                                        let row_IrCmds = {
                                            buttonId: Converter.irViewV1toButtonIdV2(lstRemoteGet[i].irtype,lstRemoteGet[i].lst[ii].irview),
                                            commandId: parseInt(lstRemoteGet[i].lst[ii].irid)
                                        }
                                        //Air Conditioning and not On Off button ->> need add arrIr array
                                        if (lstRemoteGet[i].lst[ii].arrIr != undefined) {
                                            row_IrCmds.arrIr = {
                                                temp: parseInt(lstRemoteGet[i].lst[ii].arrIr.Temp),
                                                mode: lstRemoteGet[i].lst[ii].arrIr.Mode,
                                                fan: lstRemoteGet[i].lst[ii].arrIr.Fan,
                                                swing: lstRemoteGet[i].lst[ii].arrIr.Swing
                                            }
                                        }

                                        lstIrCommandsGet.push(row_IrCmds)
                                    }

                                    rowSync.irCommands = lstIrCommandsGet
                                } else if(lstRemoteGet[i].remoteversion == "remoteV2") {
                                    rowSync.irData = lstRemoteGet[i].irV2data
                                }

                                if(lstRemoteGet[i].rmname != undefined) {
                                    rowSync.name = lstRemoteGet[i].rmname
                                }
                                if(lstRemoteGet[i].roomid != undefined) {
                                    rowSync.roomid = lstRemoteGet[i].roomid
                                }
                                if(lstRemoteGet[i].shortcut_by_user != undefined) {
                                    rowSync.shortcut_by_user = lstRemoteGet[i].shortcut_by_user
                                }
                                if(lstRemoteGet[i].stateAcIr != undefined) {
                                    rowSync.stateAcIr = lstRemoteGet[i].stateAcIr
                                }

                                irremoteSync.push(rowSync)
                            }
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'remotes',
                                        versions: parseInt(payload.versions),
                                        data: irremoteSync
                                    }
                                ]
                            }
                        } break;
                    }
                }
                    break;
                case 'irremote': {
                    switch (objFormat.cmd) {
                        case 'addres': {
                            let remoteAddres = []
                            let row_new = {
                                devid: Converter.devidV1ToV2(objFormat.obj_data.machc, objFormat.obj_data.devid, objFormat.obj_data.net, objFormat.obj_data.ord),
                                attr: objFormat.obj_data.attr,
                                brigde_key: objFormat.obj_data.brigde_key,
                                hash: objFormat.obj_data.hash,
                                hc: objFormat.obj_data.hc,
                                irtype: objFormat.obj_data.irtype,
                                mac: objFormat.obj_data.mac,
                                macdev: objFormat.obj_data.macdev,
                                machc: objFormat.obj_data.machc,
                                remoteid: objFormat.obj_data.remoteid,
                                traits: objFormat.obj_data.traits,
                                type: objFormat.obj_data.type
                            }
                            remoteAddres.push(row_new)
                            payload_new = {
                                cmd: 'response',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'remotes',
                                        versions: parseInt(payload.versions),
                                        data: remoteAddres
                                    }
                                ]
                            }
                        } break;
                    }
                }
                    break;
                case 'user':
                    switch (objFormat.cmd) {
                        case 'addres':
                            payload_new = {
                                cmd: 'response',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'users',
                                        versions: parseInt(payload.versions),
                                        data: objFormat.obj_data.lst
                                    }
                                ]
                            }
                            break;
                        case 'sync':
                            payload_new = {
                                cmd: 'sync',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'users',
                                        versions: parseInt(payload.versions),
                                        data: objFormat.obj_data.lst
                                    }
                                ]
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                case 'zb':
                    switch (objFormat.cmd) {
                        case 'infores':
                            payload_new = {
                                cmd: 'sync',
                                reqid,
                                objects: [{
                                    type: 'bridges',
                                    data: objFormat.obj_data.lst
                                }]
                            }
                            break;
                    }
                    break;
                default:
                    break;
            }
            return payload_new;
        } catch (e) {
            console.log('Error: ' + e);
        }
    },

    /*
    Chuyển đổi config payload Hc v2 => v1
    v2-payload
        {
            cmd: "set",
            reqid: "string",
            objects: [
                { "type": "join", "data":[{"brigde_key": "brigdeKey", "action":int,"machc":"string", ...}]}
            ]
        }

     v1-payload
        {
            reqid: "string"
            str_cmd: $dev=add{"act":"x","mac":"macHC/LC"}$end
        }

     */
    configV2ToV1: (payload) => {
        try {
            let cmd = payload.cmd
            let reqid = payload.reqid
            let object = payload.objects[0]
            let type = object.type
            let data

            let str_cmd = ''
            let versions = undefined
            switch (cmd) {
                case 'set':
                    data = object.data[0]
                    switch (type) {
                        case 'join':
                            let payload = {
                                mac: data.machc,
                                net: Converter.bridgeKeyV2ToV1(data.brigde_key)
                            }
                            payload.act = 0
                            if (data.action == 0) {
                                payload.act = 1
                            } else if (data.action == 2) {
                                payload.act = 2;
                            }
                            if (data.param != undefined) {
                                payload.param = data.param;
                            }
                            if (data.value != undefined) {
                                payload.param = data.value;
                            }
                            str_cmd = '$dev=add' + JSON.stringify(payload) + '$end'
                            break;
                        case 'reset_brigde':
                            str_cmd = '$dev=reset' + JSON.stringify({
                                mac: data.machc,
                                net: Converter.bridgeKeyV2ToV1(data.brigde_key)
                            }) + '$end'
                            break;
                        case 'reset_factory':
                            let lstReset = []
                            for (let data of object.data) {
                                lstReset.push(data)
                            }
                            str_cmd = '$hc=system' + JSON.stringify({
                                act: 1, lst: lstReset
                            }) + '$end'
                            break;
                        case 'left':
                            let left_act = 0
                            if (data.action == 0) {
                                left_act = 1
                            }
                            str_cmd = '$dev=del' + JSON.stringify({
                                act: left_act,
                                mac: data.machc,
                                net: Converter.bridgeKeyV2ToV1(data.brigde_key)
                            }) + '$end'
                            break;
                        case 'backup':
                            let macBackup = {
                                machc: object.data[0].machc.toString(),
                            }
                            if(object.data[0].brigde_key != undefined) {
                                macBackup.brigde_key = object.data[0].brigde_key.toString()
                            }
                            str_cmd = '$db=backupV2' + JSON.stringify(macBackup) + '$end'
                            break;
                        case 'restore':
                            let versionsServerLst = []
                            let restoreFormat = object.data[0].versions
                            restoreFormat.backup_file_link = object.data[0].backup_file_link
                            restoreFormat.machc = object.data[0].machc
                            restoreFormat.restore = 1
                            versionsServerLst.push(restoreFormat)
                            str_cmd = '$db=getversionres' + JSON.stringify({"lst": versionsServerLst}) + '$end'

                            break;
                        default:
                            break;
                    }
                    break;
                case 'delete':
                    data = object.data
                    switch (type) {
                        case 'devices':
                            let dev = []
                            for (let i in data) {
                                let devInfo = Converter.devidV2ToV1(data[i])
                                dev.push({
                                    devid: devInfo.devid,
                                    net: devInfo.net,
                                    ord: devInfo.ord,
                                })
                            }
                            str_cmd = '$dev=rmv' + JSON.stringify({"dev": dev}) + '$end'
                            break;
                        case 'groups':
                            let lst = []
                            for (let i in data) {
                                lst.push({groupid: data[i]})
                            }
                            str_cmd = '$group=del' + JSON.stringify({"lst": lst}) + '$end'
                            break;
                        case 'floors':
                            let lstFloorsId = []
                            for (let i in data) {
                                lstFloorsId.push({floorid: data[i]})
                            }
                            str_cmd = 'floor=del' + JSON.stringify({"lst": lstFloorsId}) + '$end'
                            break;
                        case 'rooms':
                            let lstRoomsId = []
                            for (let i in data) {
                                lstRoomsId.push({roomid: data[i]})
                            }
                            str_cmd = 'room=del' + JSON.stringify({"lst": lstRoomsId}) + '$end'
                            break;
                        case 'rules':
                            let lstRulesId = []
                            for (let i in data) {
                                lstRulesId.push({ruleid: data[i]})
                            }
                            str_cmd = '$rule=del' + JSON.stringify({"lst": lstRulesId}) + '$end'
                            break;
                        case 'cameras':
                            let lstCameraId = []
                            for (let i in data) {
                                lstCameraId.push({ id: data[i]})
                            }
                            str_cmd = '$camera=delete' + JSON.stringify({ "lst": lstCameraId }) + '$end'
                            break;
                        case 'remotes':
                            let lstRemotesDel = []
                            for (let i in data) {
                                lstRemotesDel.push({
                                    devkey: data[i]
                                })
                            }
                            str_cmd = 'irremote=del' + JSON.stringify({"lst": lstRemotesDel}) + '$end'
                            break;
                        default:
                            break;
                    }
                    break;
                case 'post':
                    switch (type) {
                        case 'groups':
                            str_cmd = '$group=add' + JSON.stringify({"lst": object.data}) + '$end'
                            break;
                        case 'floors':
                            str_cmd = '$floor=add' + JSON.stringify({"lst": object.data}) + '$end'
                            break;
                        case 'rooms':
                            str_cmd = '$room=add' + JSON.stringify({"lst": object.data}) + '$end'
                            break;
                        case 'devices':
                            data = object.data
                            let dev = []
                            for (let i in data) {
                                let devInfo = Converter.devidV2ToV1(data[i].devid)
                                delete data[i].devid
                                dev.push({
                                    ...devInfo,
                                    ...data[i]
                                })
                            }
                            str_cmd = '$dev=syncinfores' + JSON.stringify({dev: dev}) + '$end'
                            break;
                        case 'rules':
                            // str_cmd = '$rule=add' + JSON.stringify(Converter.rulesRowV2ToV1(object.data[0])) + '$end'
                            let lst = [];
                            for (let i in object.data) {
                                lst.push(Converter.rulesRowV2ToV1(object.data[i]));
                            }
                            str_cmd = '$rule=add' + JSON.stringify({ lst }) + '$end'
                            break;
                        case 'cameras':
                            if (object.data[0].device != undefined)
                                delete object.data[0].device
                            str_cmd = '$camera=add' + JSON.stringify({ 'cam': object.data[0] }) + "$end"
                            break;
                        case 'remotes':
                            data = object.data
                            if(data[0].remoteid != undefined && data[0].irCommands != undefined) {
                                let lstIr = []
                                if(!isEmpty(data[0].irCommands)){
                                    for (let i in data[0].irCommands) {
                                        let row_new_iradd = {
                                            componentcode: data[0].remoteid + "__buttonId__" + data[0].irCommands[i].buttonId,
                                            irid: data[0].irCommands[i].commandId.toString(),
                                            // irview: data[0].irCommands[i].buttonId,
                                            irtype: "",
                                            devkey: data[0].remoteid.toString()
                                        }
                                        if(data[0].irCommands[i].arrIr != undefined) {
                                            row_new_iradd.irview = data[0].irCommands[i].arrIr.mode + '/' + data[0].irCommands[i].arrIr.temp + '/' + data[0].irCommands[i].arrIr.fan + '/' + data[0].irCommands[i].arrIr.swing
                                        } else {
                                            row_new_iradd.irview = data[0].irCommands[i].buttonId
                                        }
                                        lstIr.push(row_new_iradd)
                                    }
                                } else {
                                    //Remote don't have any ircommand
                                    lstIr.push({
                                        componentcode: "-1",
                                        irid: "-1",
                                        irview: "-1",
                                        irtype: "",
                                        devkey: data[0].remoteid.toString()
                                    })
                                }
                                str_cmd = '$ir=add' + JSON.stringify({"lst": lstIr}) + "$end"
                            } else {
                                let remotes = []
                                if(data[0].remoteid != undefined) { //Update name and roomId
                                    for (let i in data) {
                                        remotes.push({
                                            ...data[i]
                                        })
                                    }
                                } else {
                                    let devInfo = Converter.devidV2ToV1(data[0].devid)
                                    delete data[0].devid
                                    remotes.push({
                                        ...devInfo,
                                        ...data[0]
                                    })
                                }
                                str_cmd = '$irremote=add' + JSON.stringify({"lst": remotes}) + "$end"
                            }
                            break;
                        case 'users':
                            str_cmd = '$user=add' + JSON.stringify({"lst": object.data}) + '$end'
                            break;
                        default:
                            break;
                    }
                    break;
                case 'sync':
                    data = object.data
                    versions = object.versions
                    switch (type) {
                        case 'rules':
                            let lstRule = []
                            for (let i in data) {
                                lstRule.push(Converter.rulesRowV2ToV1(data[i]))
                            }
                            str_cmd = '$rule=lstres' + JSON.stringify({lst: lstRule}) + '$end'
                            break;
                        case 'floors':
                            str_cmd = 'floor=lstres' + JSON.stringify({lst: data}) + '$end'
                            break;
                        case 'rooms':
                            str_cmd = 'room=lstres' + JSON.stringify({lst: data}) + '$end'
                            break;
                        case 'groups':
                            let lstGroups = []
                            for (let i in data) {
                                lstGroups.push({
                                    groupid: data[i].groupid,
                                    name: data[i].name,
                                    enable: data[i].enable
                                })
                            }
                            str_cmd = 'group=lstres' + JSON.stringify({lst: lstGroups}) + '$end'
                            break;
                        case 'devices':
                            let dev = []
                            for (let i in data) {
                                let devInfo = Converter.devidV2ToV1(data[i].devid)
                                let devType = {
                                    // type: Converter.deviceTypeV2ToV1(data[i].type)
                                    type: Converter.getDeviceTypeV1ByTypeAndTraitsV2(data[i].type, data[i].traits)
                                }
                                delete data[i].devid
                                delete data[i].type
                                dev.push({
                                    ...devInfo,
                                    ...devType,
                                    ...data[i]
                                })
                            }
                            str_cmd = '$dev=lstres' + JSON.stringify({dev: dev}) + '$end'
                            break;
                        case 'users':
                            versions = object.serverversion
                            str_cmd = '$user=lst' + JSON.stringify({lst: object.data}) + '$end'
                            break;
                        case 'cameras':
                            for (let i in data) {
                                if (data[i].device != undefined) {
                                    let deviceV1 = Converter.devidV2ToV1(data[i].device.devid)
                                    data[i].device = deviceV1
                                }
                            }
                            str_cmd = '$camera=lstres' + JSON.stringify({lst: data}) + '$end'
                            break;
                        case 'remotes':
                            let lstIrSync = []
                            // for (let i in data) {
                            //     if (data[i].device != undefined) {
                            //         let deviceV1 = Converter.devidV2ToV1(data[i].device.devid)
                            //         data[i].device = deviceV1
                            //     }
                            // }
                            for (let i in data) {
                                let devInfo = Converter.devidV2ToV1(data[i].devid)
                                delete data[i].devid
                                let row_new_irsync = {
                                    ...devInfo,
                                    net: Converter.bridgeKeyV2ToV1(data[i].brigde_key).toString(),
                                    remoteid: data[i].remoteid,
                                    irtype: data[i].irtype,
                                    type: data[i].type,
                                }
                                if(data[i].name != undefined) {
                                    row_new_irsync.name = data[i].name
                                }
                                if(data[i].roomid != undefined) {
                                    row_new_irsync.roomid = data[i].roomid
                                }
                                if(data[i].irData != undefined) {
                                    row_new_irsync.irData = data[i].irData
                                }

                                if(data[i].irCommands != undefined) {
                                    let lstIrCmds = []
                                    for (let j in data[i].irCommands) {
                                        let irCmds = {
                                            componentcode: data[i].remoteid + "__buttonId__" + data[i].irCommands[j].buttonId,
                                            irid: data[i].irCommands[j].commandId.toString(),
                                            // irview: data[i].irCommands[i].buttonId,
                                            // irtype: "",
                                            devkey: data[i].remoteid.toString()
                                        }
                                        if(data[i].irCommands[j].arrIr != undefined) {
                                            irCmds.irview = data[i].irCommands[j].arrIr.mode + '/' + data[i].irCommands[j].arrIr.temp + '/' + data[i].irCommands[j].arrIr.fan + '/' + data[i].irCommands[j].arrIr.swing
                                        } else {
                                            irCmds.irview = data[i].irCommands[j].buttonId
                                        }
                                        lstIrCmds.push(irCmds)
                                    }
                                    row_new_irsync.irCommands = lstIrCmds;
                                }

                                lstIrSync.push(row_new_irsync)
                            }
                            str_cmd = '$ir=lstres' + JSON.stringify({lst: lstIrSync}) + '$end'
                            break;
                        case 'hcs':
                            str_cmd = 'hc=sync' + JSON.stringify({lst: data}) + '$end'
                            break;
                        default:
                            break;
                    }
                    break;
                case 'response':
                    switch (type) {
                        case 'versions':
                            let versionsServerLst = []
                            versionsServerLst.push(object.data[0])
                            str_cmd = '$db=getversionres' + JSON.stringify({"lst": versionsServerLst}) + '$end'
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }
            let res = {reqid: reqid, str_cmd: str_cmd}
            if(versions != undefined){
                res.versions = versions
            }
            return res;
        } catch (e) {
            throw new Error('Error: ' + e);
        }
    },

    /*
    chuyển đổi control payload Hc v2 => v1
    v2-payload
         {
            cmd: "set",
            reqid: "string",
            objects" [
                {"type": "devices", "data": ["devid_1", ...],  "info": {"devid_1": {"type": "LIGHT", "traits": [{"name": "OnOff"}]}}, "execution": { "command": "OnOff", "params": { "on": true}}}
            ]
         }

     v1-payload
        {
            reqid: '',
            str_cmd: '$dev=set{"dev":[{"devid":"1","ord":"1","net":"1","type":"1","val":{"level":"1","state":"on"}}]}$end'
        }
    */
    controlV2ToV1: (payload) => {
        try {
            let cmd = payload.cmd
            let reqid = payload.reqid
            let object = payload.objects[0]
            let type = object.type
            let data = object.data

            let str_cmd = ''
            switch (cmd) {
                case 'set':
                    switch (type) {
                        case 'devices':
                            // let val = Converter.executionToVal(object.execution)
                            let dev = []
                            for (let i in data) {
                                let deviceTypeV1 = 0
                                let val
                                if(object.info != undefined){
                                    deviceTypeV1 = Converter.getDeviceTypeV1ByTypeAndTraitsV2(object.info[data[i]].type, object.info[data[i]].traits)
                                    val = Converter.executionToVal(object.execution, object.info[data[i]].type)
                                }
                                let devInfo = Converter.devidV2ToV1(data[i])
                                dev.push({
                                    devid: devInfo.devid,
                                    net: devInfo.net,
                                    ord: devInfo.ord,
                                    type: deviceTypeV1,
                                    val: val
                                })
                            }
                            str_cmd = '$dev=' + cmd + JSON.stringify({"dev": dev}) + '$end'
                            break;
                        case 'rules':
                            let lst = [];
                            data.forEach(rule => lst.push({ ruleid: rule }));
                            str_cmd = '$rule=actv' + JSON.stringify({lst}) + '$end'
                            break;
                        case 'reboot':
                            let lstReboot = []
                            for (let data of object.data) {
                                lstReboot.push({ machc: data })
                            }
                            str_cmd = '$hc=system' + JSON.stringify({
                                act: 2, lst: lstReboot
                            }) + '$end'
                            break;
                        case 'devices_wakeup':
                            let devices = []
                            data.forEach(it => devices.push(Converter.devidV2ToV1(it)))
                            str_cmd = `$dev=wakeup${JSON.stringify({ dev: devices })}$end`
                            break;
                        case 'learn_mode':
                            let payload = {
                                mac: data[0].machc,
                                act: data[0].action,
                                net: Converter.bridgeKeyV2ToV1(data[0].brigde_key)
                            }
                            console.log(payload)
                            str_cmd = `\$dev=learnmode${JSON.stringify(payload)}\$end`
                            break;
                        case 'advanced':
                            let net = Converter.bridgeKeyV2ToV1(data[0].brigde_key)
                            let mac = data[0].machc
                            delete data[0].brigde_key
                            delete data[0].machc
                            str_cmd = `\$dev=advanced${JSON.stringify({
                                ...data[0], net, mac
                            })}\$end`
                            break;
                        case 'debug':
                            let payload_new = {
                                mac: data[0].mac,
                                debug_enable: data[0].debug_enable ? 1 : 0,
                                vpn_enable: data[0].vpn_enable ? 1 : 0
                            }
                            str_cmd = `$hc=debug${JSON.stringify(payload_new)}$end`
                            break;
                        default:
                            break;
                    }
                    break;
                default:
                    break;
            }

            return {reqid: reqid, str_cmd: str_cmd};
        } catch (e) {
            console.error('Error: ' + e);
        }
    },

    /*
    chuyển đổi status payload Hc v1 => v2
    v1-payload
        {
            reqid: '',
            str_cmd: '$dev=stt{"dev":[{"devid":"xx","ord":"x","net":"x","type":"x","val":{...}},{"devid":"xx","ord":"x","net":"x","type":"x","val":{...}}]}$end'
        }

    v2-payload
        {
            cmd: "status",
            reqid: "string",
            objects: [
                {
                    "type": "devices",
                    "data": [
                        {"devid": "string", "status": 1, "states": {"OnOff": {"on":true}, "StartStop": {"start": false} }},
                        {"devid": "string", "status": 0, "errorCode": "code", "errorMessage": "string"}
                     ]
                 }
             ]
        }
     */
    statusV1ToV2: (payload) => {
        try {
            let reqid = payload.reqid
            let objFormat = Converter.getFormat(payload.str_cmd)
            let payload_new = {}
            switch (objFormat.type) {
                case 'ir':
                    switch (objFormat.cmd) {
                        case 'addres': {
                            //WARNING: ban tin ir=addres khong co truong "val" ---> Khong the su dung ham Converter.valToStates
                            let row_new = {}
                            let states = {}
                            states.IrStatus = {
                                irStatus: "idle"
                            }
                            states.IrConfig = {
                                irConfig: "learn",
                                buttonId: objFormat.obj_data.lst[0].componentcode.toString(),
                                irId: parseInt(objFormat.obj_data.lst[0].irid)
                            }
                            row_new = {
                                devid: Converter.devidV1ToV2(objFormat.obj_data.machc, objFormat.obj_data.devid, objFormat.obj_data.net, objFormat.obj_data.ord),
                                states: states,
                                status: 1
                            }
                            payload_new = {
                                cmd: 'status',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'devices',
                                        data: [row_new]
                                    }
                                ]
                            }
                            break;
                        }
                        default:
                            break;
                    }
                    break;
                case 'dev':
                    let dev = objFormat.obj_data.dev
                    let data = []
                    switch (objFormat.cmd) {
                        case 'stt':
                            for (let i in dev) {
                                let row = dev[i]
                                let states = Converter.valToStates(row.type, row.val)
                                let row_new = {
                                    devid: Converter.devidV1ToV2(row.machc, row.devid, row.net, row.ord),
                                    status: 1,
                                    states: states
                                }
                                data.push(row_new)
                            }

                            payload_new = {
                                cmd: 'status',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'devices',
                                        data: data
                                    }
                                ]
                            }
                            break;
                        case 'off':
                            for (let i in dev) {
                                let row = dev[i]
                                data.push(Converter.devidV1ToV2(row.hc, row.devid, row.net, row.ord))
                            }
                            payload_new = {
                                cmd: 'status',
                                reqid: reqid,
                                objects: [
                                    {
                                        type: 'devices_off',
                                        data: data
                                    }
                                ]
                            }
                            break;
                        case 'resetres': {
                            let row_new = {
                                brigde_key: Converter.bridgeKeyV1ToV2(objFormat.obj_data.net),
                                machc: objFormat.obj_data.mac,
                            }
                            if (objFormat.obj_data.ret == 0) {
                                row_new.status = 'SUCCESS'
                            } else {
                                row_new.status = 'ERROR'
                                row_new.errorCode = ''
                                row_new.errorMessage = ''
                            }
                            payload_new = {
                                cmd: 'status',
                                reqid: reqid,
                                objects: [row_new]
                            }
                            break;
                        }
                        case 'addres': {
                            let row_new = {
                                status: objFormat.obj_data.status,
                                duration: objFormat.obj_data.duration,
                                machc: objFormat.obj_data.mac
                            }
                            if (Converter.bridgeKeyV1ToV2(objFormat.obj_data.net) != BridgeKey.zigbee) {
                                row_new.bridgeKey = Converter.bridgeKeyV1ToV2(objFormat.obj_data.net)
                            }
                            payload_new = {
                                cmd: 'status',
                                reqid: reqid,
                                objects: [{
                                    type: 'devices_join',
                                    data: [row_new]
                                }]
                            }
                            break;
                        }
                        case 'delres': {
                            let row_new = {
                                status: objFormat.obj_data.status,
                                duration: objFormat.obj_data.duration,
                                machc: objFormat.obj_data.mac,
                                bridgeKey: Converter.bridgeKeyV1ToV2(objFormat.obj_data.net)
                            }
                            payload_new = {
                                cmd: 'status',
                                reqid: reqid,
                                objects: [{
                                    type: 'devices_left',
                                    data: [row_new]
                                }]
                            }
                            break;
                        }
                        case 'wakeup':
                            dev.forEach(device => data.push(Converter.devidV1ToV2(device.machc, device.devid, device.net, device.ord)))
                            payload_new = {
                                cmd: 'status',
                                reqid,
                                objects: [
                                    {
                                        type: 'devices_wakeup',
                                        data
                                    }
                                ]
                            }
                            break;
                        case 'learnmode':
                            payload_new = {
                                cmd: 'status',
                                reqid,
                                objects: [
                                    {
                                        type: 'learn_mode',
                                        data: [
                                            {
                                                brigde_key: Converter.bridgeKeyV1ToV2(objFormat.obj_data.net),
                                                machc: objFormat.obj_data.mac,
                                                status: objFormat.obj_data.status,
                                                value: objFormat.obj_data.value
                                            }
                                        ]
                                    }
                                ]
                            }
                            break;
                        case 'addinfor':
                            payload_new = {
                                cmd: 'status',
                                reqid,
                                objects: [
                                    {
                                        type: 'devices_join',
                                        data: [
                                            {
                                                bridgeKey: Converter.bridgeKeyV1ToV2(objFormat.obj_data.net),
                                                machc: objFormat.obj_data.mac,
                                                value: objFormat.obj_data.value,
                                                status: objFormat.obj_data.status
                                            }
                                        ]
                                    }
                                ]
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                case 'rule':
                    switch (objFormat.cmd) {
                        case 'actvres':
                            // objFormat.obj_data //{"ruleid":"xx","ret":"0/1/2"}
                            let row_new = [];
                            if (objFormat.obj_data.lst != undefined) {
                                objFormat.obj_data.lst.forEach(rule => row_new.push({
                                    ruleid: rule.ruleid,
                                    status: parseInt(objFormat.obj_data.ret) != 1 ? 1 : 0
                                }))
                            }
                            payload_new = {
                                "cmd": "status",
                                "reqid": reqid,
                                "objects": [
                                    {
                                        "type": "rules",
                                        "data": row_new
                                    }
                                ]
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                case 'notify':
                    switch (objFormat.cmd) {
                        case 'push':
                            if (objFormat.obj_data.devid != undefined) {
                                let devices = []
                                for (let dev of objFormat.obj_data.devid) {
                                    devices.push(Converter.devidV1ToV2(dev.machc, dev.devid, dev.net, dev.ord))
                                }
                                objFormat.obj_data.devid = devices
                            }
                            payload_new = {
                                "cmd": "post",
                                "reqid": reqid,
                                "objects": [
                                    {
                                        "type": "notify",
                                        "data": [objFormat.obj_data]
                                    }
                                ]
                            }
                            break;
                        default:
                            break;
                    }
                    break;
                case 'hc':
                    switch (objFormat.cmd) {
                        case 'systemres':
                            payload_new = {
                                cmd: 'status',
                                reqid,
                                objects: [{
                                    type: 'reset_factory',
                                    data: objFormat.obj_data.lst
                                }]
                            }
                            break;
                        case 'connect':
                            payload_new = {
                                cmd: 'status',
                                reqid,
                                objects: [{
                                    type: 'hcs_connect',
                                    data: objFormat.obj_data.lst
                                }]
                            }
                            break;
                    }
                    break;
                case 'image':
                    if (objFormat.cmd == 'getres') {
                        let data = []
                        for (let image of objFormat.obj_data.image) {
                            let devidV2 = Converter.devidV1ToV2(image.machc, image.devid, image.net, image.ord)
                            let item = { devid: devidV2, time: image.time, url: image.url }
                            data.push(item)
                        }
                        payload_new = {
                            cmd: 'status',
                            reqid,
                            objects: [{
                                type: 'camera_image',
                                data: data
                            }]
                        }
                    }
                    break;
                case 'db':
                    switch (objFormat.cmd) {
                        case 'backupV2Res':
                            let dataBackupRes = [{
                                machc: objFormat.obj_data.machc,
                                status: objFormat.obj_data.status
                            }]
                            payload_new = {
                                cmd: 'status',
                                reqid: reqid,
                                objects: [{
                                    type: 'backup',
                                    data: dataBackupRes
                                }]
                            }
                            break;
                        case 'restoreV2Res':
                            let dataRestoreRes = [{
                                machc: objFormat.obj_data.machc,
                                brigde_key: objFormat.obj_data.brigde_key,
                                status: objFormat.obj_data.status
                            }]
                            payload_new = {
                                cmd: 'status',
                                reqid: reqid,
                                objects: [{
                                    type: 'restore',
                                    data: dataRestoreRes
                                }]
                            }
                            break;
                    }
                    break;
                case 'msg':
                    payload_new = {
                        reqid,
                        cmd: 'status',
                        objects: [{
                            type: 'msg',
                            data: [{
                                type: objFormat.cmd,
                                content: objFormat.obj_data.content
                            }]
                        }]
                    }
                    break;
                case 'camera':
                    if (objFormat.cmd == "adderr")
                        payload_new = {
                            reqid, cmd: 'status',
                            objects: [{
                                type: 'cameras_add_error',
                                data: objFormat.obj_data.lst
                            }]
                        }
                    break;
                default:
                    break;
            }
            return payload_new;
        } catch (e) {
            throw new Error('Error: ' + e);
        }
    },

    localV1ToV2(payload) {
        try {
            if (payload.topic != undefined) {
                let return_payload = {
                    topic: payload.topic
                };
                switch (payload.topic) {
                    case 'status':
                        return_payload.content = Converter.statusV1ToV2(payload);
                        return return_payload;
                    case 'config':
                        return_payload.content = Converter.configV1ToV2(payload);
                        return return_payload;
                    default:
                        break;
                }
            }
        } catch (e) {
            throw new Error('Error ' + e);
        }
    }
};

module.exports = Converter;
