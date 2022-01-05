from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.utils import serializer_helpers
from .serilalizers import MovieSerializer
from .models import Movie


class MovieView(viewsets.ModelViewSet):
    serializer_class  = MovieSerializer
    queryset = Movie.objects.all()