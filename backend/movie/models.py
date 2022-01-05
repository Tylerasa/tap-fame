from django.db import models

class Movie(models.Model):
    title = models.CharField(max_length=100)
    comment = models.TextField()
    synopsis = models.TextField()
    rating = models.FloatField(default=0)
    your_rating = models.FloatField(default=0)
    reviewed = models.BooleanField(default=False)
    release_date = models.DateField()

    def __str__(self):
        return self.title

class Actor(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

