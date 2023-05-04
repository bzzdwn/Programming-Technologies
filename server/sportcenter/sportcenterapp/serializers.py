from rest_framework import serializers
from .models import *

class SessionDetailSerializer(serializers.ModelSerializer):
    visitor = serializers.PrimaryKeyRelatedField(queryset=Visitor.objects.all(), many=True)
    class Meta:
        model = Session
        fields = '__all__'


class SessionsListSerializer(serializers.ModelSerializer):
    visitor = serializers.PrimaryKeyRelatedField(queryset=Visitor.objects.all(), many=True)
    class Meta:
        model = Session
        fields = ('id', 'visitor', 'type', 'time', 'date')

class VisitorDetailSerializer(serializers.ModelSerializer):
    # user = serializers.HiddenField(default=serializers.CurrentUserDefault())
    session_list = SessionDetailSerializer(many=True, read_only=True)
    class Meta:
        model = Visitor
        fields = '__all__'


class VisitorsListSerializer(serializers.ModelSerializer):
    session_list = SessionDetailSerializer(many=True, read_only=True)
    class Meta:
        model = Visitor
        fields = ('name', 'phone', 'email', 'session_list')

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

#class UserRegisterSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = UserModel
#        fields = '__all__'
#    def create(self, clean_data):
#        user_obj = UserModel.objects.create_user(email=clean_data['email'],
#                                                 password=clean_data['password'])
