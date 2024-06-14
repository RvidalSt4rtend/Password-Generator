from .base import *
from dotenv import load_dotenv
import os
load_dotenv()

DEBUG=False
SECRET_KEY = os.getenv('SECRET_KEY')
ALLOWED_HOSTS=os.getenv('ALLOWED_HOSTS').split(',')
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

STATIC_URL = 'static/'
