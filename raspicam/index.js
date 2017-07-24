'use strict'

const { spawn } = require('child_process')

import Stream from './stream'

class RaspiCam extends Stream
{
    constructor(streamCallback = (data) => {} ) {
        super()
        console.log('Create RaspiCam')

        this._streamCallback = streamCallback
    }

    /* private */
    initRaspivid() {
        let raspividArgs = [
            '-n', '-ih',
            '-rot', '0',
            '-pf', 'main',
            '-lev', '4.2',
            '-md', '6',
            '-w', '1280', '-h', '720',
            '-b', '17000000',
            '-fps', '90',
            '-t', '0',
            '-o', '-']

        this.raspivid = spawn('raspivid',
                raspividArgs, {
                    stdio: ['ignore', 'pipe', 'inherit']
                })
        this.raspividPid = this.raspivid.pid

        this.raspivid.on('exit', (code, signal) => {
            console.log('raspivid exit with code: '
                    + code + ' signal: ' + signal)
        })

        console.log('raspivid running on ' + this.raspividPid)
    }

    get stream() {
        return this._stream
    }

    set stream(stream) {
        this._stream = stream
    }

    /* public */
    openStream() {
        this.initRaspivid()
        this.stream = this.raspivid.stdout

        this.raspivid.stdout.on('data', this._streamCallback)
        this.raspivid.stdout.on('error', (data) => {
            console.log(err);
        })
    }

    closeStream() {
        this.raspivid.kill('SIGHUP')
    }
}

export default RaspiCam
