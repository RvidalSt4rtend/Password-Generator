import os
from django.core.wsgi import get_wsgi_application
from whitenoise import WhiteNoise

# Selecciona el módulo de configuración en función de la presencia de la variable de entorno 'WEBSITE_HOSTNAME'
settings_module = "core.settings.deployment" if 'WEBSITE_HOSTNAME' in os.environ else 'core.settings.local'
os.environ.setdefault('DJANGO_SETTINGS_MODULE', settings_module)

# Inicializa la aplicación WSGI de Django
application = get_wsgi_application()

# Envuelve la aplicación WSGI con WhiteNoise para servir archivos estáticos
application = WhiteNoise(application)
