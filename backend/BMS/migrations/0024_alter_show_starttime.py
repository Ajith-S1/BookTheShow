# Generated by Django 4.1.5 on 2023-01-21 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0023_alter_show_starttime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='StartTime',
            field=models.DateTimeField(default='21 Jan 2023 , 07:11:22'),
        ),
    ]
