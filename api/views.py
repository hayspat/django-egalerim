from django.shortcuts import render
from .models import Cariler
from rest_framework import viewsets
from .serializers import CarilerSerializer


class CarilerViewSet(viewsets.ModelViewSet):
    queryset = Cariler.objects.all()
    serializer_class = CarilerSerializer
