# Generated by Django 4.1.4 on 2023-01-06 01:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0003_alter_movie_movieimg'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='MovieIMG',
            field=models.ImageField(upload_to='Images/'),
        ),
    ]
