# Generated by Django 4.1.5 on 2023-01-31 20:14

import BMS.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0025_alter_show_starttime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='Uid',
            field=models.EmailField(max_length=254),
        ),
        migrations.AlterField(
            model_name='show',
            name='StartTime',
            field=BMS.models.CustomDateTimeField(),
        ),
    ]
