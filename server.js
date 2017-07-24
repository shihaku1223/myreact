'use strict'

import RaspiCam from './raspicam' 
import TSStream from './raspicam/tsstream.js'

const raspiCam = new RaspiCam()
const tsStream = new TSStream(raspiCam)

let stream = tsStream

raspiCam.streamCallback = (data) => {
    console.log(`Received h264 ${data.length} bytes of data.`);
}

stream.streamCallback = (data) => {
    console.log(`Received TS ${data.length} bytes of data.`);
}

stream.openStream()

setTimeout(() => {
    console.log('close stream')
    stream.closeStream()
}, 10000)
