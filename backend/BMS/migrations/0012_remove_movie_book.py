# Generated by Django 4.1.5 on 2023-01-07 12:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0011_rename_password_user_password'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movie',
            name='Book',
        ),
    ]
