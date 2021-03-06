module.exports = async ({ test, throws, equal, check }) => {

    // const unit = require('...')

    const _flatn7 = (obj, flat = Object.create(null), name) =>
        typeof obj === 'object'
        && obj !== null
        && !Array.isArray(obj)
        && Object.keys(obj).length
        && Object.entries(obj).reduce((acc, [k, v]) => ({
            ...flatn(v, flat, name ? `${name}.${k}` : k)
            , ...acc
        }), flat) || (name ? { [name]: obj, ...flat } : obj)

    const flatn = (obj, flat = Object.create(null), name) => {
        const props =
            typeof obj === 'object'
            && obj !== null
            && !Array.isArray(obj)
            && Object.entries(obj)

        return (props.length) ?
            props.reduce((acc, [k, v]) => ({
                ...flatn(v, flat, name ? `${name}.${k}` : k)
                , ...acc
            }), flat)
            : name ? { [name]: obj, ...flat } : obj
    }

    return [
        test("non-equal NaN", () => {
            const NE = test("NaN", () => equal(NaN, NaN))
            equal(true, !!NE.trace)
        })
        , test("equal primitives", () => {
            equal(1, 1)
            equal(``, "")
        })
        , test("equal objects", () => {
            equal({}, {})
            equal({ name: 'mark', age: 80 }, { name: 'mark', age: 80 })
        })
        , test("equal functions", () => {
            const f = () => 1
            equal(f, f)
            equal(() => 1, () => 1)
        })
        , test("equal arrays", () => {
            equal([0, 1, 2, 3], [...Array(4).keys()])
        })
        , test("equal objects", () => {
            const a = { name: 'mark', address: { city: 'LA', zip: 90210 }, lucky_numbers: [1, 2, '3', { n: 4 }] }
            const b = { address: { city: 'LA', zip: 90210 }, lucky_numbers: [1, 2, '3', { n: 4 }], name: 'mark' }

            equal(a, b)
            equal(b, a)
        })
        , test("flatten object", () => {
            const nested = {
                name: 'mark',
                empty: {},
                address: {
                    city: 'LA',
                    zip: 90210,
                    home: {
                        type: 'house',
                        room: 2,
                        empty: {},
                        null: null
                    }
                },
                lucky_numbers: [1, 2, '3', { n: 4 }],
                ['dot.prop']: { b: 1 }
            }

            const flat = flatn(nested)

            equal(flat, {
                'dot.prop.b': 1,
                lucky_numbers: [1, 2, '3', { n: 4 }],
                'address.home.null': null,
                'address.home.empty': {},
                'address.home.room': 2,
                'address.home.type': 'house',
                'address.zip': 90210,
                'address.city': 'LA',
                empty: {},
                name: 'mark'
            })

            equal({}, flatn({}))
            equal({ e: {} }, flatn({ e: {} }))
        })
        , test("equal nulls", () => equal(null, null))
        , throws("null is not equal to object", () => equal(null, {}))
        , throws("object is not equal to null", () => equal({}, null))
        , test("manual demo", () => {
            // console.log('Evaluation: equal({object},null)')
            // const obja = { k: 'tub', sub: { bub: 7, dub: { chub: 'gub' } } }
            // const ocja = { r: 'tub', sub: { bulb: 7, dub: { chub: 'stub' } } }
            // console.log(JSON.stringify(obja, null, 2))
            check('eslint', () => true)

            // check(1,2,() => false)
            // check(1, 2, () => { })
            // check(1, 2, true)
            // equal(3, '3')
            // equal(obja, null)
            // equal(obja, ocja)
        })
        // , test("equal shows useful message", () => {
        //     equal({
        //         name: 'mark',
        //         age: 80,
        //         vessel: 'boat',
        //         par: {
        //             sub1: [1, 2],
        //             sub2: 'diff',
        //             fsame: (x) => 1,
        //             fdiff: (y) => 9
        //         }
        //     }, {
        //         name: 'joe',
        //         age: 80,
        //         fruit: 'banana',
        //         par: {
        //             sub1: [1, 2],
        //             sub2: 'difff',
        //             fsame: (x) => 1,
        //             sub3: {
        //                 sub4: { subsub: [1, 2, 3] }
        //             }
        //         }
        //     })
        // })
        // , test("after", () => { throw 'printed after previous test table' })
    ]
}