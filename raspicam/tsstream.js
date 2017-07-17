'use strict'

const { spawn } = require('child_process')

import FilterStream from './filterstream'

class TSStream extends FilterStream
{
    constructor(stream) {
        super(stream)
        console.log('Create MPEG-TS Stream')
    }

    /* public */
    openStream() {
        super.openStream()
    }

    closeStream() {
        super.closeStream()
    }
}

export default TSStream
