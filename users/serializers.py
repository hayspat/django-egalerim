from rest_framework import serializers
from .models import User, Profile
from rest_framework.authtoken.models import Token
from api.serializers import CarilerSerializer
from api.models import Cariler
from rest_auth.registration.serializers import RegisterSerializer


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ('name', 'firma', 'tc', 'tel')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'active',
                  'confirmed_email', 'profile',)
    profile = ProfileSerializer(read_only=True)


class TokenSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Token
        fields = ('key', 'user')
