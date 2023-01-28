from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import MovieSerializer, TheaterSerializer, UserSerializer, ShowSerializer, BookingSerializer
from .models import Movie, Theater, Booking, User, Show

# Create your views here.


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MovieSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer


class TheaterViewSet(viewsets.ModelViewSet):
    queryset = Theater.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TheaterSerializer


class ShowViewSet(viewsets.ModelViewSet):
    queryset = Show.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = ShowSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = BookingSerializer
