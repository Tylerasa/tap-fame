from django.contrib import admin
from django.db import models
from .models import Movie, Actor
from .models import CustomUser


admin.site.site_header="Movie Admin"


class ActorInline(admin.TabularInline):
    model = Actor
    extra = 2


class MovieAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields':['title', 'comment', 'synopsis', 'rating', 'your_rating', 'reviewed', 'release_date']}),
    ]
    inlines =[ActorInline]



class CustomUserAdmin(admin.ModelAdmin):
    model = CustomUser

admin.site.register(CustomUser, CustomUserAdmin)

admin.site.register(Movie, MovieAdmin)