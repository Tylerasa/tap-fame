from rest_framework import viewsets
from .serilalizers import MovieSerializer
from .models import Movie
from .serilalizers import UserSerializer
from .models import User
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from rest_framework import filters
from rest_framework.authentication import SessionAuthentication, BasicAuthentication, TokenAuthentication
from rest_framework import generics, mixins

class MovieView(viewsets.ModelViewSet):
    # authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)
    serializer_class  = MovieSerializer
    queryset = Movie.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)



# class UserViewSet(viewsets.ModelViewSet):
#     http_method_names = ['get']
#     serializer_class = UserSerializer
#     permission_classes = (IsAuthenticated,)
#     filter_backends = [filters.OrderingFilter]
#     authentication_classes = (SessionAuthentication, BasicAuthentication, TokenAuthentication)

#     def get_queryset(self):
#         if self.request.user.is_superuser:
#             return User.objects.all()

#     def get_object(self):
#         lookup_field_value = self.kwargs[self.lookup_field]

#         obj = User.objects.get(lookup_field_value)
#         self.check_object_permissions(self.request, obj)

#         return obj




class UserList(mixins.ListModelMixin,viewsets.GenericViewSet):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = User.objects.all()
    serializer_class = UserSerializer