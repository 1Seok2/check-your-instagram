import selenium
from selenium import webdriver

BASE_URL = "https://instagram.com"


def crawler_instagram(insta_id):
    driver = webdriver.Chrome(executable_path='./chromedriver')

    URL = "%s/%s" % (BASE_URL, insta_id)
    driver.get(url=URL)

    sleep(10)

    driver.close()


if __name__ == "__main__":
    print("-" * 60)
    print("  crawler is start")
    print("-" * 60)

    crawler_instagram("__re.mind.er__")
