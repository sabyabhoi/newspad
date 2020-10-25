from django.http import HttpResponse, Http404
from django.shortcuts import render, get_object_or_404    
from .models import Blog

# Create your views here.
def index(request):
    blog_list = Blog.objects.order_by('-pub_date')
    return render(request, 'blog/index.html', context={ 'blog_list': blog_list })

def detail(request, blog_id):
    blog = get_object_or_404(Blog, pk=blog_id)
    return render(request, 'blog/detail.html', {'blog': blog})