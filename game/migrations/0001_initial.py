# Generated by Django 4.0.6 on 2022-07-17 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Text',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
            ],
            options={
                'verbose_name': 'Text',
                'verbose_name_plural': 'Texts',
            },
        ),
    ]
