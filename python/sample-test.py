import os
from selenium import webdriver
import logging
import urllib3
import certifi


logging.basicConfig()
# logging.getLogger().setLevel(logging.DEBUG)
# req_log = logging.getLogger('requests.packages.urllib3')
# req_log.setLevel(logging.DEBUG)
# req_log.propagate = True

capabilities = {
  'browserName': 'chrome',
  'browserVersion': 'latest',
  'platformName': 'macOS 12',
  'sauce:options': {
    'extendedDebugging':True
  }
}
username = os.environ["SAUCE_USERNAME"]
accessKey = os.environ["SAUCE_ACCESS_KEY"]

sauce_url = 'https://{}:{}@ondemand.us-west-1.saucelabs.com/wd/hub'.format(username, accessKey)
try:

    driver = webdriver.Remote(command_executor=sauce_url, desired_capabilities=capabilities)
    driver.get('https://www.saucedemo.com')
    driver.title
    driver.quit()

except urllib3.exceptions.MaxRetryError as err:
    print('SSL Error. Adding custom certs to Certifi store...')
    cafile = certifi.where()
    with open('./certificate.pem', 'rb') as infile:
        customca = infile.read()
    with open(cafile, 'ab') as outfile:
        outfile.write(customca)
    print('That might have worked.')

