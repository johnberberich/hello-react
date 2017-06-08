const seleniumServer = require('selenium-server')
const phantomjs = require('phantomjs-prebuilt')

require('nightwatch-cucumber')({
  cucumberArgs: [
    '--require', 'features/support/timeout.js',
    '--require', 'features/step_definitions',
    '--format', 'pretty',
    '--format', 'json:reports/cucumber.json',
    '--format-options', '{"colorsEnabled":true}',
    'features'
  ]
})

module.exports = {
  output_folder: 'reports',
  custom_assertions_path: '',
  live_output: false,
  disable_colors: false,
  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    host: '127.0.0.1',
    port: 4444
  },
  test_settings: {
    default: {
      launch_url: 'http://localhost:5000',
      selenium_port: 4444,
      selenium_host: '127.0.0.1',
      desiredCapabilities: {
        browserName: 'phantomjs',
        javascriptEnabled: true,
        acceptSslCerts: true,
        'phantomjs.binary.path': phantomjs.path
      }
    },

    integration: {
      launch_url: 'http://test.helloreact.local'
    }
  }
}

