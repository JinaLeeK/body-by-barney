/**
 * Update the PR body with Barney.
 * @param {import('actions-toolkit').Toolkit} tools
 */
module.exports = async function updatePR (tools) {
  const barney_img = 'https://user-images.githubusercontent.com/1390106/66919899-3a406900-eff0-11e9-83ba-4e6c4c3dbfaf.jpg';
  return tools.github.pulls.update({
    ...tools.context.repo,
    pull_number: tools.context.payload.pull_request.number,
    body: '![image](' + barney_img + ')'
  })
}
