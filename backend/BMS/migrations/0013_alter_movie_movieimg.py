# Generated by Django 4.1.5 on 2023-01-08 15:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0012_remove_movie_book'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='MovieIMG',
            field=models.ImageField(upload_to='images/'),
        ),
    ]