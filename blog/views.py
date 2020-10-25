from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse('You are at the Blog Index')

def single(request, blog_id):
    return HttpResponse('You are viewing Blog number: {}'.format(blog_id))