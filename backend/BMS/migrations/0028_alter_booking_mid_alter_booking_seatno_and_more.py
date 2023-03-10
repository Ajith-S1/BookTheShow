# Generated by Django 4.1.5 on 2023-01-31 21:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('BMS', '0027_alter_booking_mid_alter_booking_seatno_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='booking',
            name='Mid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BMS.movie'),
        ),
        migrations.AlterField(
            model_name='booking',
            name='SeatNo',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='booking',
            name='Sid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BMS.show'),
        ),
        migrations.AlterField(
            model_name='booking',
            name='Tid',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='BMS.theater'),
        ),
        migrations.AlterField(
            model_name='booking',
            name='Uid',
            field=models.EmailField(max_length=254),
        ),
    ]
