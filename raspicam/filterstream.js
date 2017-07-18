'use strict'

import Stream from './stream'

class FilterStream extends Stream
{
    constructor(stream) {
        super()
        this.stream = stream
        console.log('Create FilterStream')
    }

    get stream() {
        return this._stream
    }

    set stream(stream) {
        this._stream = stream
    }

    openStream() {
        this._stream.openStream()
    }

    closeStream() {
        this._stream.closeStream()
    }
}

export default FilterStream
