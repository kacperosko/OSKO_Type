# -*- encoding: utf-8 -*-
from django.urls import path, re_path

from game import views

urlpatterns = [
    path('', views.index, name='home'),

    # The home page
    # path('', views.home_page, name='home'),
    path("game.html", views.Game.as_view()),
    # path("cal", views.Calendar.as_view()),
    # path("cal-add.html", views.cal_add),
    # path("cal-add", views.cal_add),
    # path("add-user.html", views.add_user),
    # path("add-user", views.add_user),
    # path("manage", views.ShowStudents.as_view()),
    # path("register/<token>", views.change_password),
    # Matches any html file
    re_path(r'^.*\.*', views.pages, name='pages'),
]

