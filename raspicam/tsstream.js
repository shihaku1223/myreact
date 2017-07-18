'use strict'

const { spawn } = require('child_process')
const FFMPEG_BIN = '/home/pi/git/ffmpeg/ffmpeg'

import FilterStream from './filterstream'

class TSStream extends FilterStream
{

    constructor(stream, serviceName = 'KINA-PI', serviceProvider = 'KINA-PI',
            serviceID = 1, startPID = '0x0100', pmtPID = '0x1000',
            streamCallback = (data) => {} ) {
        super(stream)
        console.log('Create MPEG-TS Stream')

        this._serviceName = serviceName
        this._serviceProvider = serviceProvider
        this._serviceID = serviceID
        this._startPID = startPID
        this._pmtPID = pmtPID

        this._streamCallback = streamCallback
    }

    /* setter/getter */
    get serviceName() {
        return this._serviceName
    }

    get serviceProvider() {
        return this._serviceProvider
    }

    get serviceID() {
        return this._serviceID
    }

    get startPID() {
        return this._startPID
    }

    get pmtPID() {
        return this._pmtPID
    }

    set serviceName(serviceName) {
        this._serviceName = serviceName
    }

    set serviceProvider(provider) {
        this._serviceProvider = provider
    }

    set serviceID(id) {
        this._serviceID = id
    }

    set startPID(pid) {
        this._startPID = pid
    }

    set pmtPID(pid) {
        this._pmtPID = pid
    }

    set streamCallback(cb) {
        this._streamCallback = cb
    }

    /* public */
    openStream() {
        super.openStream()
        this.openTSStream()
    }

    closeStream() {
        this.closeTSStream()
        super.closeStream()
    }

    /* private */
    openTSStream() {
        let args = [
               '-i', 'pipe:0',
               '-codec', 'copy',
               '-f', 'mpegts',
               '-mpegts_start_pid', `${this.startPID}`,
               '-mpegts_pmt_start_pid', `${this.pmtPID}`,
               '-mpegts_service_id', `${this.serviceID}`,
               '-metadata', `service_privider=${this.serviceProvider}`,
               '-metadata', `service_name=${this.serviceName}`,
               'pipe:1'
            ]

        console.log(args)

        this.ffmpeg = spawn(FFMPEG_BIN,
                args, {
                    stdio: ['pipe', 'pipe', 'inherit']
                })
        this.ffmpegPid = this.ffmpeg.pid

        this.ffmpeg.stdout.on('data', this._streamCallback)
        this.ffmpeg.stdout.on('error', (data) => {
            console.log(err);
        })

        this.stream.stream.pipe(this.ffmpeg.stdin)
    }

    closeTSStream() {
        this.stream.stream.unpipe(this.ffmpeg.stdin)
        this.ffmpeg.kill('SIGHUP')
    }
}

export default TSStream
