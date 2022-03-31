from django.urls import path
from . import views

urlpatterns = [
    path("articles/", views.show_articles, name = "show_articles"),
    path("articles/create/", views.create_article, name = "show_article"),
    path("articles/delete/<int:id>/", views.delete_article, name = "delete_article"),
    path("articles/update/<int:id>/", views.update_article, name = "update_article")
]
