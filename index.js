const { Toolkit } = require('actions-toolkit')
const { context, github: { request } } = new Toolkit()
context.repo
const pull_number = context.payload.pull_request.number;
const barney = 'https://user-images.githubusercontent.com/1390106/66919899-3a406900-eff0-11e9-83ba-4e6c4c3dbfaf.jpg'

console.log("This is barney");
console.log(context);


setTimeout(function() {
    console.log("In setTimeout");
    request('GET /repos/:owner/:repo/pulls/:pull_number', context.repo({
        pull_number: pull_number
    })).then(function (pr_ressult) {
        console.log(pr_result);
        if (!pr_result.body) {
            request('PATCH /repos/:owner/:repo/pulls/:pull_number/', context.repo({
                pull_number: pull_number,
                body: `![Barnard](${barney})`
            }))
        }
    })
    console.log("after setTimeout");
}, 10000);

