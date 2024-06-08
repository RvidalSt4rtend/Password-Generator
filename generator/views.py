from django.shortcuts import render
from django.http import JsonResponse
import secrets
import string

def home(request):
    return render(request, 'index.html')


def generate_password(request):
    try:
        length = int(request.GET.get('length', 12))
        if length < 8 or length > 100:  # Validación del rango de longitud
            return JsonResponse({'error': 'Length must be between 8 and 100'}, status=400)
    except ValueError:
        return JsonResponse({'error': 'Invalid length'}, status=400)
    
    include_numbers = request.GET.get('numbers', 'off') == 'on'
    include_special = request.GET.get('special', 'off') == 'on'

    characters = string.ascii_letters
    password = []

    if include_numbers:
        characters += string.digits
        password.append(secrets.choice(string.digits))  # Asegura al menos un número

    if include_special:
        characters += string.punctuation
        password.append(secrets.choice(string.punctuation))  # Asegura al menos un símbolo

    # Genera el resto de la contraseña
    password.extend(secrets.choice(characters) for _ in range(length - len(password)))
    
    # Mezcla la contraseña para evitar patrones predecibles
    secrets.SystemRandom().shuffle(password)
    
    return JsonResponse({'password': ''.join(password)})