from django.contrib import admin
from .models import Movie, Theater, User, Show, Booking


class MovieAdmin(admin.ModelAdmin):
    list = '__all__'


class TheaterAdmin(admin.ModelAdmin):
    list = '__all__'


class ShowAdmin(admin.ModelAdmin):
    list = '__all__'


class UserAdmin(admin.ModelAdmin):
    list = '__all__'


class BookingAdmin(admin.ModelAdmin):
    list = '__all__'
# Register your models here.


admin.site.register(Movie, MovieAdmin)
admin.site.register(Theater, TheaterAdmin)
admin.site.register(Show, ShowAdmin)
admin.site.register(Booking, BookingAdmin)
admin.site.register(User, UserAdmin)
