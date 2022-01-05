from rest_framework import serializers
from .models import Actor, Movie


class ActorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Actor()
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):
    actor = ActorSerializer()

    class Meta:
        model  = Movie
        fields = ('title', 'comment', 'synopsis', 'rating', 'your_rating', 'reviewed', 'release_date', 'actor')
