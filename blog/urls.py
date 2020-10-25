from django.urls import path

from . import views

app_name = 'blog'
urlpatterns = [
    path('', views.BlogList.as_view(), name='index'),
    path('<slug:slug>/', views.BlogDetail.as_view(), name='detail')
]