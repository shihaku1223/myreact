'use strict'

import Stream from './stream'

class FilterStream extends Stream
{
    constructor(stream) {
        super()
        this._stream = stream
        console.log('Create FilterStream')
    }

    get stream() {
        return this._stream
    }

    openStream() {
        this._stream.openStream()
    }

    closeStream() {
        this._stream.closeStream()
    }
}

export default FilterStream
