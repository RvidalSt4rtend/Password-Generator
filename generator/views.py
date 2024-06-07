from django.shortcuts import render
from django.http import HttpResponse
import random
import string

def home(request):
    return render(request, 'index.html')

def generate_password(request):
    length = int(request.GET.get('length', 12))
    difficulty = request.GET.get('difficulty', 'medium')

    characters = string.ascii_lowercase
    if difficulty == 'medium':
        characters += string.ascii_uppercase
    elif difficulty == 'hard':
        characters += string.ascii_uppercase + string.digits + string.punctuation

    password = ''.join(random.choice(characters) for _ in range(length))
    return render(request, 'password.html', {'password': password})
