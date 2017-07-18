'use strict'

const { spawn } = require('child_process')

const FFMPEG_BIN = '/home/pi/git/ffmpeg/ffmpeg'

import FilterStream from './filterstream'

class TSStream extends FilterStream
{

    constructor(stream, serviceName = 'KINA-PI', serviceProvider = 'KINA-PI',
            serviceID = 1, startPID = '0x0100', pmtPID = '0x1000') {
        super(stream)
        console.log('Create MPEG-TS Stream')

        this.serviceName = serviceName
        this.serviceProvider = serviceProvider
        this.serviceID = serviceID
        this.startPID = startPID
        this.pmtPID = pmtPID
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

    /* public */
    openStream() {
        super.openStream()
        this.openTSStream()
    }

    closeStream() {
        super.closeStream()
    }

/*
    -codec copy \
    -f mpegts \
    -r 90 \
    -mpegts_original_network_id 0x1000 \
    -mpegts_transport_stream_id 0x1000 \
    -mpegts_service_id 0x7788 \
    -mpegts_pmt_start_pid 0x1500 \
    -mpegts_start_pid 0x150 \
    -metadata service_provider="KINA-PI" \
    -metadata service_name="KINA-PI" \
    out.ts
 */

    /* private */
    openTSStream() {
        let args = [
               '-codec', 'copy',
               '-f', 'mpegts',
               '-mpegts_start_pid', `${this.startPID}`,
               '-mpegts_pmt_start_pid', `${this.pmtPID}`,
               '-mpegts_service_id', `${this.serviceID}`,
               '-metadata', 'service_privider=', `${this.serviceProvider}`,
               '-metadata', 'service_name=`', `${this.serviceName}`
            ]
        console.log(args)
    }
}

export default TSStream
