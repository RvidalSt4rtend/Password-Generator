from django.shortcuts import render
from django.http import JsonResponse
import random
import string

def home(request):
    return render(request, 'index.html')

def generate_password(request):
    length = int(request.GET.get('length', 12))
    include_numbers = request.GET.get('numbers', 'off') == 'on'
    include_special = request.GET.get('special', 'off') == 'on'

    characters = string.ascii_letters
    if include_numbers:
        characters += string.digits
    if include_special:
        characters += string.punctuation

    password = ''.join(random.choice(characters) for _ in range(length))
    print(password)
    return JsonResponse({'password': password})