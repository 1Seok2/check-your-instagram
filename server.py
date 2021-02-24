import os

from config.firebase import db

print("-" * 60)

db.child("name").push({"company": "google"})
