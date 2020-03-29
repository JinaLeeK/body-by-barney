/**
 * Return the PR.
 * @param {import('actions-toolkit').Toolkit} tools
 */
module.exports = async function getPR (tools) {
  return tools.github.pulls.get({
    ...tools.context.repo,
    pull_number: tools.context.payload.pull_request.number,
  })
}
