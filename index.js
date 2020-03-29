const { Toolkit } = require('actions-toolkit')
const getPR = require('./lib/get-pr')
const updatePR = require('./lib/update-pr')

Toolkit.run(async tools => {
  const pr_result = await getPR(tools)
  tools.log.debug("PR_BODY=" + pr_result.data.body);
  if (!pr_result.data.body) {
    await updatePR(tools);
    tools.log.success('Barney has been applied.')
  } else {
    tools.log.success('No Barney needed.')
  }
}, {
  event: ['pull_request.opened'],
  secrets: ['GITHUB_TOKEN']
})
