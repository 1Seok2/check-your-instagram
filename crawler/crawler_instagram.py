import time
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from config.admin import ID, PW, LOCAL_PROJECT_PATH
from config.URLs import INSTAGRAM_URL
from config.firebase import update_data

def check_people(driver, type):
    result = []
    navigations = driver.find_elements_by_class_name('-nal3')

    if type == "followers":
        navigations[1].click()
    elif type == "following":
        navigations[2].click()
    time.sleep(2)

    elem = driver.find_elements_by_css_selector('.Jv7Aj ._0imsa')
    for obj in elem:
        result.append(obj.text)

    return result


def login(driver):
    elem = driver.find_elements_by_css_selector('._9GP1n .f0n8F ._2hvTZ')
    time.sleep(1)

    elem[0].send_keys(ID)
    elem[1].send_keys(PW)

    elem[1].send_keys(Keys.RETURN)
    time.sleep(1)


def get_list(insta_id, driver):
    # check followers
    followers_list = check_people(driver, "followers")

    # close followers
    driver.find_element_by_css_selector('.WaOAr .wpO6b').click()
    time.sleep(1)

    # check following
    following_list = check_people(driver, "following")

    # update at firebase
    data = {
        "followers" : followers_list,
        "following" : following_list,
        "insta_id" : insta_id
    }
    update_data(insta_id, data)

    return data


def crawler_instagram(insta_id):
    options = Options()
    # options.add_argument("--headless")
    options.add_argument("window-size=1920,1080")
    driver = webdriver.Chrome(chrome_options=options, executable_path=LOCAL_PROJECT_PATH + '/crawler/chromedriver')
    driver.get(url=INSTAGRAM_URL)
    time.sleep(2)

    print('hi')
    login(driver)
    print('by')
    time.sleep(2)

    url="%s/%s"%(INSTAGRAM_URL, insta_id)
    driver.get(url=url)
    time.sleep(2)

    data = {};

    try:
        isPrivate = driver.find_element_by_class_name('rkEop').text
    except Exception as e:
        isPrivate = ""
        pass

    # account is private
    if isPrivate:
        print('private!!')
    else:
        data = get_list(insta_id, driver)

    driver.close()

    return data


if __name__ == "__main__":
    print("-" * 60)
    print("  crawler is start")
    print("-" * 60)

    crawler_instagram("__re.mind.er__")
