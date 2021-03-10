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


def id_encrypt(user_insta_id):
    return user_insta_id.replace('_', '').replace('.', '')


def update_data(user_insta_id, data):
    insta_id = id_encrypt(user_insta_id)

    db.child("insta").child(insta_id).update(data)


def get_data_by_id(user_insta_id):
    insta_id = id_encrypt(user_insta_id)

    data = {};
    try:
        data = db.child("insta").child(insta_id).get()
    except Exception as e:
        print(e)
        return {
            'result' : 'no'
        }
    finally:
        if data:
            return data.val()
        else:
            return {
                'followers': [],
                'following': []
            }

