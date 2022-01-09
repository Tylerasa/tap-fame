from .models import  Movie
from rest_framework import serializers
from .models import User

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model  = Movie
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active', ]
        read_only_field = ['is_active',  ]