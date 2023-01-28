# Generated by Django 4.1.5 on 2023-01-08 15:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0013_alter_movie_movieimg'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='MovieIntro',
            field=models.CharField(default=django.utils.timezone.now, max_length=100),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='movie',
            name='MovieIMG',
            field=models.ImageField(default='New movie', null=True, upload_to='images/'),
        ),
    ]
