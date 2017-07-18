'use strict'

import RaspiCam from './raspicam' 
import TSStream from './raspicam/tsstream.js'

const raspiCam = new RaspiCam()
const tsStream = new TSStream(raspiCam)
let stream = tsStream

stream.streamCallback = (data) => {
    console.log(`Received ${data.length} bytes of data.`);
}

stream.openStream()

setTimeout(() => {
    console.log('close stream')
    stream.closeStream()
}, 5000)
