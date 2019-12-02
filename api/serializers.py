from rest_framework import serializers
from .models import Cariler


class CarilerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cariler
        fields = "__all__"
