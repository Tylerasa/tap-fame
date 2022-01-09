from .models import Actor, Movie
from rest_framework import serializers
from .models import User
class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):
    actor = ActorSerializer(source='actor_set', many=True)

    class Meta:
        model  = Movie
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active', ]
        read_only_field = ['is_active',  ]