from django.http import HttpResponse, Http404
from django.shortcuts import render, get_object_or_404 
from django.urls import reverse_lazy
from django.views import generic
from .models import Blog, Comment
from .forms import CommentForm

# Create your views here.
class BlogList(generic.ListView):
    queryset = Blog.objects.order_by('-pub_date')
    template_name = 'blog/index.html'

class BlogDetail(generic.DetailView):
    model = Blog
    template_name = 'blog/detail.html'

class AddComment(generic.CreateView):
    model = Comment
    form_class = CommentForm
    template_name = 'blog/add_comment.html'

    def form_valid(self, form):
        form.instance.blog_id = self.kwargs['pk']
        return super().form_valid(form)

    def get_success_url(self):
        return reverse_lazy('blog:detail', kwargs={'pk': self.kwargs['pk']})