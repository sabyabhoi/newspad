from django.urls import path

from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.BlogList.as_view(), name='index'),
    path('<int:pk>/', views.BlogDetail.as_view(), name='detail'),
    path('<int:pk>/comments/', views.AddComment.as_view(), name='add_comment')
]