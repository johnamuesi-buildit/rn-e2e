import pytest
import os
from appium import webdriver


@pytest.fixture(scope="function")
def driver():
    driver = webdriver.Remote(
        command_executor='http://127.0.0.1:4723/wd/hub',
        desired_capabilities={
            'app': os.path.expanduser(
                './android/app/build/outputs/apk/app-debug.apk'),
            'platformName': 'Android',
            'deviceName': 'Android Emulator'
        })

    yield driver  # Test code runs after this line

    # Teardown
    driver.quit()