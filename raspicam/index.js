'use struct'

const { spawn } = require('child_process')

class RaspiCam
{
    constructor() {
        console.log('Create RaspiCam')
    }

    /* private */
    initRaspivid() {
        let raspividArgs =
            ['-n', '-ih',
            '-w', '800', '-h', '600',
            '-o', '-', '-t', '0']

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

    /* public */
    openStream() {
        this.initRaspivid()
    }

    closeStream() {
        this.raspivid.kill('SIGHUP')
    }
}

export default RaspiCam
