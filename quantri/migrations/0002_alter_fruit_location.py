# Generated by Django 4.2.5 on 2023-11-25 14:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('quantri', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='fruit',
            name='Location',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fruits', to='quantri.location', verbose_name='Địa điểm trồng'),
        ),
    ]