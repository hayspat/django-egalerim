from django.shortcuts import render
from .models import Cariler, Stoklar
from rest_framework import viewsets
from .serializers import CarilerSerializer, StoklarSerializer


class CarilerViewSet(viewsets.ModelViewSet):
    serializer_class = CarilerSerializer

    def get_queryset(self, *args, **kwargs):
        print(self.request.user)
        queryset_list = Cariler.objects.filter(added_by=self.request.user.id)
        return queryset_list

    def pre_save(self, obj):
        obj.added_by = self.request.user.id


class StoklarViewSet(viewsets.ModelViewSet):
    serializer_class = StoklarSerializer

    def get_queryset(self, *args, **kwargs):
        print(self.request.user)
        queryset_list = Stoklar.objects.filter(added_by=self.request.user.id)
        return queryset_list

    def pre_save(self, obj):
        obj.added_by = self.request.user.id
