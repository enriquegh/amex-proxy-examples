*** Settings ***
Library  SeleniumLibrary

*** Variables ***

&{sauce_options}    name=MyTest    username=%{SAUCE_USERNAME}    accessKey=%{SAUCE_ACCESS_KEY}    build=Python-Robot-Selenium-VDC
&{capabilities}     browserName=${browserName}    browserVersion=latest    platformName=${platform}    sauce:options=${sauce_options}

${browser}          ${browserName}

*** Keywords ***

Open login page
    Open browser  https://www.saucedemo.com/v1/  browser=${browser}
    ...  remote_url=https://ondemand.us-west-1.saucelabs.com/wd/hub
    ...  desired_capabilities=${capabilities}

Open inventory page
    Open browser  https://www.saucedemo.com/v1/inventory.html  browser=${browserName}
    ...  remote_url=https://ondemand.us-west-1.saucelabs.com/wd/hub
    ...  desired_capabilities=${capabilities}

Login As Standard User

    Input text  id:user-name  standard_user
	Input text  id:password  secret_sauce
	Click button  class:btn_action


Login As Invalid User

    Input text  id:user-name  invalid
	Input text  id:password  invalid
	Click button  class:btn_action

Add Item To Cart

    Click button  class:btn_primary


Remove Item From Cart

	Click button  class:btn_secondary


Has Items In Cart

	Page should contain element  class:shopping_cart_badge

End Session
    Run Keyword If  '${TEST_STATUS}'== 'PASS'  Execute Javascript  sauce:job-result=passed
    ...  ELSE  Execute Javascript  sauce:job-result=failed
    Close Browser
