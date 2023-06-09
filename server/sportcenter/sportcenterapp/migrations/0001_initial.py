# Generated by Django 4.1.7 on 2023-05-09 16:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Coach',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('address', models.CharField(max_length=255)),
                ('position', models.CharField(max_length=255)),
                ('phone', models.BigIntegerField(unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Passport',
            fields=[
                ('series', models.CharField(max_length=2)),
                ('number', models.IntegerField(primary_key=True, serialize=False, unique=True)),
                ('date', models.DateField()),
                ('given', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='Visitor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, unique=True)),
                ('address', models.CharField(max_length=255)),
                ('phone', models.BigIntegerField(unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('freeze', models.BooleanField(default=False)),
                ('freeze_days', models.IntegerField(null=True)),
                ('price', models.IntegerField()),
                ('buying_date', models.DateField()),
                ('expiration_date', models.DateField()),
                ('type', models.CharField(max_length=255)),
                ('coach', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='subscription_coach', to='sportcenterapp.coach')),
                ('visitor', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='subscription_visitor', to='sportcenterapp.visitor')),
            ],
        ),
        migrations.CreateModel(
            name='Session',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('time', models.TimeField()),
                ('canceled', models.BooleanField()),
                ('minutes', models.IntegerField()),
                ('price', models.IntegerField()),
                ('date', models.DateField()),
                ('type', models.IntegerField(choices=[(1, 'фитнес'), (2, 'аэробика'), (3, 'стрейчинг'), (4, 'пилатес'), (5, 'батуты'), (6, 'бассейн'), (7, 'тренажерный зал'), (8, 'йога')])),
                ('coach', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='session_coach', to='sportcenterapp.coach')),
                ('visitor', models.ManyToManyField(related_name='sessions', to='sportcenterapp.visitor')),
            ],
        ),
        migrations.AddField(
            model_name='coach',
            name='passport',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='passport', to='sportcenterapp.passport'),
        ),
    ]
