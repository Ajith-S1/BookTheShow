# Generated by Django 4.1.5 on 2023-01-21 07:21

import BMS.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0024_alter_show_starttime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='show',
            name='StartTime',
            field=BMS.models.CustomDateTimeField(auto_now_add=True),
        ),
    ]
