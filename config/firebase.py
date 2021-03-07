from pyrebase import pyrebase
import os
from config.key import *

config = {
    "apiKey": FIREBASE_APIKEY,
    "authDomain": FIREBASE_AUTHDOMAIN,
    "projectId": FIREBASE_PROJECTID,
    "storageBucket": FIREBASE_STORAGEBUCKET,
    "messagingSenderId": FIREBASE_MESSAGINGSENDERID,
    "appId": FIREBASE_APPID,
    "databaseURL": FIREBASE_DATABASEURL,
    "measurementId": FIREBASE_MEASUREMENTID
}

firebase = pyrebase.initialize_app(config)

db = firebase.database()

def update_data(user_insta_id ,followers, followings):
    insta_id = user_insta_id.replace('_','').replace('.','')

    data = {
        "followings" : followings,
        "followers" : followers
    }

    db.child("insta").child(insta_id).update(data)
