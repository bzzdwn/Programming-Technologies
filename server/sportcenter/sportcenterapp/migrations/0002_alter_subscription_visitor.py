# Generated by Django 4.1.7 on 2023-05-09 16:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sportcenterapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscription',
            name='visitor',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='visitor', to='sportcenterapp.visitor'),
        ),
    ]
