from django.contrib.admin.options import ModelAdmin
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from .admin import MovieAdmin

class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model  = ModelAdmin
        fields = ('title', 'comment', 'synopsis', 'rating', 'your_rating', 'reviewed', 'release_date')