const { Toolkit } = require('actions-toolkit')
const { context, github: { request } } = new Toolkit()

const prNumber = context.payload.pull_request.number;
const barney = 'https://user-images.githubusercontent.com/1390106/66919899-3a406900-eff0-11e9-83ba-4e6c4c3dbfaf.jpg'

setTimeout(function() {
    request('GET /repos/:owner/:repo/pulls/:pull_number', context.repo({
        pull_number: prNumber
    })).then(function (prResult) {
        if (!prResult.body) {
            request('PATCH /repos/:owner/:repo/pulls/:pull_number/', context.repo({
                pull_number: prNumber,
                body: `![Barnard](${barney})`
            }))
        }
    })

    

}, 10000);

