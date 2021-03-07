import time
import selenium
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from config.admin import ID, PW
from config.URLs import INSTAGRAM_URL
from config.firebase import update_data

def check_people(driver, type):
    result = []

    navigations = driver.find_elements_by_class_name('-nal3')

    if type == "followers":
        navigations[1].click()
    elif type == "following":
        navigations[2].click()
    time.sleep(1)

    elem = driver.find_elements_by_css_selector('.Jv7Aj ._0imsa')
    for obj in elem:
        result.append(obj.text)

    return result


def login(driver):
    elem = driver.find_elements_by_css_selector('._9GP1n .f0n8F ._2hvTZ')
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

    # check followings
    following_list = check_people(driver, "following")

    update_data(insta_id, followers_list, following_list)


def crawler_instagram(insta_id):
    driver = webdriver.Chrome(executable_path='/Users/choewonseog/Documents/check-your-instagram/crawler/chromedriver')
    driver.get(url=INSTAGRAM_URL)
    time.sleep(4)

    login(driver)
    time.sleep(5)

    url="%s/%s"%(INSTAGRAM_URL, insta_id)
    driver.get(url=url)
    time.sleep(2)

    try:
        isPrivate = driver.find_element_by_class_name('rkEop').text
    except Exception as e:
        isPrivate = ""
        pass

    # 비공개 계정인 경우
    if isPrivate:
        print('private!!')
    # 공개 계정인 경우
    else:
        get_list(insta_id, driver)

    driver.close()


if __name__ == "__main__":
    print("-" * 60)
    print("  crawler is start")
    print("-" * 60)

    crawler_instagram("__re.mind.er__")
