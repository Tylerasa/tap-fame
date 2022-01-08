from rest_framework import viewsets, permissions
from .serilalizers import MovieSerializer
from .models import Movie

class MovieView(viewsets.ModelViewSet):
    serializer_class  = MovieSerializer
    queryset = Movie.objects.all()

    permissions_classes =[
        permissions.IsAuthenticated
    ]

    def get_queryset(self):
        return self.request.user.movies.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)