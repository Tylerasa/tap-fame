from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100, default='Movie Title')
    comment = models.TextField(null=True)
    synopsis = models.TextField(null=True)
    rating = models.FloatField(default=0)
    your_rating = models.FloatField(default=0)
    reviewed = models.BooleanField(default=False)
    release_date = models.DateField('release date')

    def __str__(self):
        return self.title

class Actor(models.Model):
    movie = models.ForeignKey(Movie, default='Movie',  on_delete=models.CASCADE)
    name = models.CharField(max_length=100, default="Actor Name")

    def __str__(self):
        return self.name

