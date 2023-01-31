from django.db import models

# Create your models here.


class Movie(models.Model):
    #  list = ('MovieId','MovTitle','MovImg','MovDesc','Book')
    # MovieId = models.AutoField(primary_key=True)
    # D:\DbmsProject\BookMyShow\frontend\src\Images
    MovieTitle = models.CharField(max_length=255, unique=True)
    MovieIMG = models.ImageField(
        upload_to='images/', default='New movie', null=True)
    MovieIntro = models.CharField(max_length=100)
    MovieDesc = models.TextField()
    # Book = models.BooleanField()

    def __str__(self):
        return self.MovieTitle


class Theater(models.Model):
    TName = models.CharField(max_length=255)
    TAddress = models.TextField()
    TCity = models.CharField(max_length=255)

    def __str__(self):
        return self.TName

# You can override DateTimeField's value_to_string method and add the changes there. For example:


class CustomDateTimeField(models.DateTimeField):
    def value_to_string(self, obj):
        val = self.value_from_object(obj)
        if val:
            val.replace(microsecond=0)
            return val.strftime("%d %b %Y %H:%M:%S")
        return ''


class Show(models.Model):
    Tid = models.ForeignKey(Theater, on_delete=models.CASCADE)
    Mid = models.ForeignKey(Movie, on_delete=models.CASCADE)
    StartTime = CustomDateTimeField()
    Seats = models.IntegerField(default=0)
    # def __str__(self):
    #     return self.id


class User(models.Model):
    UserName = models.EmailField()
    Password = models.CharField(max_length=20)


# class Booking(models.Model):
#     Uid = models.EmailField()
#     Tid = models.ForeignKey(Theater, on_delete=models.CASCADE)
#     Mid = models.ForeignKey(Movie, on_delete=models.CASCADE)
#     Sid = models.ForeignKey(Show, on_delete=models.CASCADE)
#     # Stime = models.DateTimeField()
#     SeatNo = models.IntegerField()

class Booking(models.Model):
    Uid = models.CharField(max_length=255)
    Tid = models.CharField(max_length=255)
    Mid = models.CharField(max_length=255)
    Sid = models.CharField(max_length=255)
    # Stime = models.DateTimeField()
    SeatNo = models.IntegerField()

    # def __str__(self):
    #     return self.id
