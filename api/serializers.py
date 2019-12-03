from rest_framework import serializers
from .models import Cariler, Stoklar


class CarilerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cariler
        fields = "__all__"


class StoklarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stoklar
        fields = "__all__"
