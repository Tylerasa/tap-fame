from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from django.db import models
class Movie(models.Model):
    title = models.CharField(max_length=100)
    comment = models.TextField()
    synopsis = models.TextField()
    rating = models.FloatField(default=0)
    your_rating = models.FloatField(default=0)
    reviewed = models.BooleanField(default=False)
    release_date = models.DateField('release date')
    # user = models.ForeignKey(User, related_name="movies", on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.title

class Actor(models.Model):
    movie = models.ForeignKey(Movie, default='Movie',  on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class CustomUser(AbstractUser):
    fav_color = models.CharField(blank=True, max_length=120)