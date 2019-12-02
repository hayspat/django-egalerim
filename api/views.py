from django.shortcuts import render
from .models import Cariler
from rest_framework import viewsets
from .serializers import CarilerSerializer


class CarilerViewSet(viewsets.ModelViewSet):
    serializer_class = CarilerSerializer

    def get_queryset(self, *args, **kwargs):
        print(self.request.user)
        queryset_list = Cariler.objects.filter(added_by=self.request.user.id)
        return queryset_list
