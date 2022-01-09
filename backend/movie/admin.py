from django.contrib import admin
from .models import Movie


admin.site.site_header="Movie Admin"




class MovieAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields':['title', 'comment', 'synopsis', 'rating', 'your_rating', 'reviewed', 'release_date']}),
    ]




admin.site.register(Movie, MovieAdmin)