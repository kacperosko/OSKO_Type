# Generated by Django 4.0.6 on 2022-07-17 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='text',
            name='title',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
