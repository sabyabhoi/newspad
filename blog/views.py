from django.http import HttpResponse, Http404
from django.shortcuts import render, get_object_or_404    
from django.views import generic
from .models import Blog

# Create your views here.
class BlogList(generic.ListView):
    queryset = Blog.objects.order_by('-pub_date')
    template_name = 'blog/index.html'

class BlogDetail(generic.DetailView):
    model = Blog
    template_name = 'blog/detail.html'