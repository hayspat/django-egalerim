from django.shortcuts import render
from .models import Cariler, Stoklar
from rest_framework import viewsets
from .serializers import CarilerSerializer, StoklarSerializer


class CarilerViewSet(viewsets.ModelViewSet):
    serializer_class = CarilerSerializer

    def get_queryset(self, *args, **kwargs):
        queryset_list = Cariler.objects.filter(added_by=self.request.user)
        return queryset_list

    def pre_save(self, obj):
        obj.added_by = self.request.user

    def perform_create(self, serializer):
        serializer.save(added_by=self.request.user)

    def perform_update(self, serializer):
        serializer.save(added_by=self.request.user)


class StoklarViewSet(viewsets.ModelViewSet):
    serializer_class = StoklarSerializer

    def get_queryset(self, *args, **kwargs):
        queryset_list = Stoklar.objects.filter(added_by=self.request.user)
        return queryset_list

    def pre_save(self, obj):
        obj.added_by = self.request.user

    def perform_create(self, serializer):
        serializer.save(added_by=self.request.user)

    def perform_update(self, serializer):
        serializer.save(added_by=self.request.user)
