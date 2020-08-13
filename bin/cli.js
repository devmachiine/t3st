#!/usr/bin/env node
(async () => {

    const parse = require('./parse')
    const conf = parse(process.argv.slice(2))

    if (conf.errors) {
        console.log('Invalid t3st input')
        console.log('-'.repeat(18))
        conf.errors.forEach(e => console.log(e))
        console.log(`\nSee 't3st help'`)
        require('process').exitCode = 1
        return
    }

    const nop = () => { }

    const display = !conf.opt.silent && console || {
        log: nop,
        time: nop,
        timeEnd: nop,
        clear: nop
    }

    conf.opt.clear && display.clear()

    if (conf.opt.test) {
        const target_dir = conf.arg.dir || 'tests'

        const test = require('./commands/test')

        await test(display, target_dir)
    }
    else if (conf.opt.watch) {
        require('./commands/watch')(conf)
    }
    else if (conf.opt.help) {
        require('./commands/help')(conf.arg.help)
    }
    else if (conf.opt.gen) {
        require('./commands/gen')(conf)
    }
    else if (conf.opt.init) {
        require('./commands/init')()
    }

})()

// TODO, don't recursively walk dir if any have package.json, stop going down that path.
// for example
// projects         <- here, stop
// |
// | - zest         <- t3st zest/tests
// |   | - tests    <- t3st zest/tests
// |   | - stuff
// | - other
// |   | - tests
// |   | - stuff