from rest_framework import serializers
from .models import *


class VisitorDetailSerializer(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Visitor
        fields = '__all__'


class VisitorsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visitor
        fields = ('id', 'name', 'phone', 'email')


class SessionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'


class SessionsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ('id', 'type', 'time', 'date')


class CoachDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = '__all__'

class CoachesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields =('id', 'name', 'position', 'phone')

class PassportDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passport
        fields ='__all__'

class PassportsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Passport
        fields =('series', 'number', 'date', 'given')

class VisitorToSessionDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitorToSession
        fields ='__all__'

class VisitorToSessionListSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitorToSession
        fields =('series', 'number', 'date', 'given')