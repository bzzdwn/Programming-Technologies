# Generated by Django 4.1.7 on 2023-05-10 05:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sportcenterapp', '0004_subscription_age_subscription_people_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='coach',
            name='specialization',
            field=models.CharField(default='нет', max_length=255),
            preserve_default=False,
        ),
    ]