from django.db import models
from django.contrib.auth.models import User
from ckeditor.fields import RichTextField

class Blog(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=1)
    pub_date = models.DateTimeField('date published')
    content = RichTextField(blank=True, null=True)
    brief = models.TextField()

    def __str__(self):
        return self.title