'use strict'

class Stream
{
    constructor() {
        console.log('Create Stream')
    }

    get stream() {
    }

    set stream(stream) {
    }

    set streamCallback(cb) {
        this._streamCallback = cb
    }

    openStream() {
    }

    closeStream() {
    }
}

export default Stream
