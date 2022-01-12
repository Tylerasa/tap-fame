from .models import  Movie
from rest_framework import serializers
from .models import User
class MovieSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    class Meta:
        model  = Movie
        # fields = ['title', 'comment', 'synopsis', 'rating', 'your_rating', 'reviewed', 'release_date', 'owner']
        fields = ' __all__'

class UserSerializer(serializers.ModelSerializer):
    movies = serializers.PrimaryKeyRelatedField(many=True, queryset=Movie.objects.all())

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'movies' ]


    

