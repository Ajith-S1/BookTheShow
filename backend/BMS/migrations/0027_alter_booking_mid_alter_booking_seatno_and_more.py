# Generated by Django 4.1.5 on 2023-01-31 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0026_alter_booking_uid_alter_show_starttime'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='Mid',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='booking',
            name='SeatNo',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='booking',
            name='Sid',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='booking',
            name='Tid',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='booking',
            name='Uid',
            field=models.CharField(max_length=255),
        ),
    ]
