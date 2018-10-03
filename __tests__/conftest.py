import pytest
import os
from appium import webdriver


@pytest.fixture(scope="function")
def driver():
    driver = webdriver.Remote(
        command_executor='http://127.0.0.0:4723/wd/hub',
        desired_capabilities={
            #  "app": os.path.expanduser(
            # "./ios/DerivedData/app/Build/Products/Debug-iphonesimulator/app.app"),
            # "platformName": "iOS",
            # "deviceName": "iphone 6",
            # "automationName": "XCUITest",
            # "udid": "B5492678-FD7A-4FE3-AFA0-0C7CBD37E01C",
         
         'app': os.path.expanduser(
                './android/app/build/outputs/apk/app-debug.apk'),
            'platformName': 'Android',
            'deviceName': 'Pixel_XL2_API_27'
        })

    yield driver  # Test code runs after this line

    # Teardown
    driver.quit()