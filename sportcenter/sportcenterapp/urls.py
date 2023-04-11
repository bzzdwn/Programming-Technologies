from django.contrib import admin
from django.urls import path, include
from .views import *

app_name = 'sportcenter'

urlpatterns = [
    # visitors views
    path('create/visitor/', VisitorCreateView.as_view()),
    path('show/visitor/', VisitorsListView.as_view()),
    path('details/visitor/<int:pk>', VisitorDetailView.as_view()),
    # sessions urls
    path('create/session/', SessionCreateView.as_view()),
    path('show/session/', SessionsListView.as_view()),
    path('details/session/<int:pk>', SessionDetailView.as_view()),
    # coaches urls
    path('create/coach/', CoachCreateView.as_view()),
    path('show/coach/', CoachesListView.as_view()),
    path('details/coach/<int:pk>', CoachDetailView.as_view()),
    # passport urls
    path('create/passport/', PassportCreateView.as_view()),
    path('show/passport/', PassportsListView.as_view()),
    path('details/passport/<int:pk>', PassportDetailView.as_view()),
    # visitorToSession urls
    path('create/visitor-to-session/', VisitorToSessionCreateView.as_view()),
    path('show/visitor-to-session/', VisitorToSessionListView.as_view()),
    path('details/visitor-to-session/<int:pk>', VisitorToSessionDetailView.as_view()),
]