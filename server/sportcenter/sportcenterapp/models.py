from django.db import models


class Visitor(models.Model):
    name = models.CharField(max_length=255, unique=True)
    address = models.CharField(max_length=255)
    phone = models.BigIntegerField(unique=True)
    email = models.EmailField(unique=True)


class Session(models.Model):
    time = models.TimeField()
    canceled = models.BooleanField()
    minutes = models.IntegerField()
    price = models.IntegerField()
    date = models.DateField()
    ACTIVITIES = (
            (1, 'фитнес'),
            (2, 'аэробика'),
            (3, 'стрейчинг'),
            (4, 'пилатес'),
            (5, 'батуты'),
            (6, 'бассейн'),
            (7, 'тренажерный зал'),
            (8, 'йога')
    )
    type = models.IntegerField(choices=ACTIVITIES)
    coach = models.ForeignKey('Coach', related_name='session_coach', on_delete=models.CASCADE, null=True)
    visitor = models.ManyToManyField(Visitor, related_name='sessions')

class Subscription(models.Model):
    visitor = models.ManyToManyField(Visitor, related_name='subscriptions')
    freeze = models.BooleanField(default=False)
    freeze_days = models.IntegerField(null=True)
    price = models.IntegerField()
    buying_date = models.DateField()
    expiration_date = models.DateField()
    type = models.CharField(max_length=255)
    people = models.CharField(max_length=255, null=True)
    age = models.CharField(max_length=255, null=True)
    visits = models.CharField(max_length=255, null=True)
    coach = models.ForeignKey('Coach', related_name='subscription_coach', on_delete=models.CASCADE, null=True)


class Coach(models.Model):
    name = models.CharField(max_length=255, unique=True)
    address = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    phone = models.BigIntegerField(unique=True)
    passport = models.OneToOneField('Passport', related_name='passport', on_delete=models.CASCADE)


class Passport(models.Model):
    series = models.CharField(max_length=2)
    number = models.IntegerField(primary_key=True, unique=True)
    date = models.DateField()
    given = models.CharField(max_length=255)
