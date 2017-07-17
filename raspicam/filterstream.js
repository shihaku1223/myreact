'use strict'

import Stream from './stream'

class FilterStream extends Stream
{
    constructor(stream) {
        super()
        this.stream = stream
        console.log('Create FilterStream')
    }

    get Stream() {
        return this.stream
    }

    openStream() {
        this.stream.openStream()
    }

    closeStream() {
        this.stream.closeStream()
    }
}

export default FilterStream
