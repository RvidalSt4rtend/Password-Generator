

import os

from django.core.wsgi import get_wsgi_application
from whitenoise.django import DjangoWhiteNoise

settings_module = "core.settings.deployment" if 'WEBSITE_HOSTNAME' in os.environ else 'core.settings.local'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

application = get_wsgi_application()
application = DjangoWhiteNoise(application)