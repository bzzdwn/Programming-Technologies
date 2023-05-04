from django.shortcuts import render
from rest_framework import generics, permissions, viewsets
from .serializers import *
from .models import Visitor
from django.contrib.auth import get_user_model
from django.shortcuts import render, get_object_or_404
from .permissions import IsOwnerOrReadOnly, IsThatUserPermission
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication

user = get_user_model()


# Visitor
class VisitorCreateView(generics.CreateAPIView):
    serializer_class = VisitorDetailSerializer
    permission_classes = (permissions.IsAuthenticated, )


class VisitorsListView(generics.ListAPIView):
    serializer_class = VisitorsListSerializer
    queryset = Visitor.objects.all()
    permission_classes = (IsAdminUser,)


class VisitorDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = VisitorDetailSerializer
    queryset = Visitor.objects.all()
    #permission_classes = (permissions.IsAuthenticated, )


# Session
class SessionCreateView(generics.CreateAPIView):
    serializer_class = SessionDetailSerializer
    permission_classes = (permissions.IsAuthenticated, )


class SessionsListView(generics.ListAPIView):
    serializer_class = SessionsListSerializer
    queryset = Session.objects.all()
    permission_classes = (IsAdminUser,)


class SessionDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = SessionDetailSerializer
    queryset = Session.objects.all()


# Coach
class CoachCreateView(generics.CreateAPIView):
    permission_classes = (IsAdminUser,)
    serializer_class = CoachDetailSerializer


class CoachesListView(generics.ListAPIView):
    serializer_class = CoachesListSerializer
    queryset = Coach.objects.all()
    permission_classes = (IsAuthenticated, )


class CoachDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAdminUser, )
    serializer_class = CoachDetailSerializer
    queryset = Coach.objects.all()


# Passport
class PassportCreateView(generics.CreateAPIView):
    serializer_class = PassportDetailSerializer
    permission_classes = (IsAdminUser,)


class PassportsListView(generics.ListAPIView):
    serializer_class = PassportsListSerializer
    queryset = Passport.objects.all()
    permission_classes = (IsAdminUser,)


class PassportDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAdminUser, )
    serializer_class = PassportDetailSerializer
    queryset = Coach.objects.all()