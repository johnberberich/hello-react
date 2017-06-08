const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(function({Given, When, Then}) {
  Given('I am on the home page', function () {
    return client
      .url(client.launchUrl)
      .waitForElementVisible('body', 1000)
  })

  // When('I click on {stringInDoubleQuotes}', function (text) {
  //   return this.driver.findElement({linkText: text}).then(function(element) {
  //     return element.click()
  //   })
  // })

  Then(/^the title is "(.*?)"$/, (text) => {
    return client.assert.title(text)
  })

  Then('I should see {stringInDoubleQuotes}', (text) => {
    return client.assert.containsText('body', text)
  })
})
