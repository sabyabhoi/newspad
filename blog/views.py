from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from .models import Blog

# Create your views here.
def index(request):
    blog_list = Blog.objects.order_by('-pub_date')
    template = loader.get_template('blog/index.html')
    context = {
        'blog_list': blog_list
    }
    return HttpResponse(template.render(context, request))

def single(request, blog_id):
    return HttpResponse('You are viewing Blog number: {}'.format(blog_id))