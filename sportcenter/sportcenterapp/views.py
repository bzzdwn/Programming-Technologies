from django.shortcuts import render
from rest_framework import generics, permissions
from .serializers import *
from .models import Visitor
from django.contrib.auth import get_user_model
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import TokenAuthentication

user = get_user_model()


# Visitor
class VisitorCreateView(generics.CreateAPIView):
    serializer_class = VisitorDetailSerializer


class VisitorsListView(generics.ListAPIView):
    serializer_class = VisitorsListSerializer
    queryset = Visitor.objects.all()
    permission_classes = (IsAdminUser,)


class VisitorDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = VisitorDetailSerializer
    queryset = Visitor.objects.all()
    permission_classes = [permissions.IsAuthenticated, ]


# Session
class SessionCreateView(generics.CreateAPIView):
    serializer_class = SessionDetailSerializer


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


class PassportsListView(generics.ListAPIView):
    serializer_class = PassportsListSerializer
    queryset = Passport.objects.all()
    permission_classes = (IsAdminUser,)


class PassportDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAdminUser, )
    serializer_class = PassportDetailSerializer
    queryset = Coach.objects.all()


# VisitorToSession
class VisitorToSessionCreateView(generics.CreateAPIView):
    serializer_class = VisitorToSessionDetailSerializer


class VisitorToSessionListView(generics.ListAPIView):
    serializer_class = VisitorToSessionListSerializer
    queryset = Passport.objects.all()
    permission_classes = (IsAdminUser,)


class VisitorToSessionDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, )
    serializer_class = VisitorToSessionDetailSerializer
    queryset = Coach.objects.all()