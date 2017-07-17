'use strict'

import RaspiCam from './raspicam' 

const raspiCam = new RaspiCam()
raspiCam.openStream()


setTimeout(() => {
    console.log('close stream')
    raspiCam.closeStream()
}, 10000)
