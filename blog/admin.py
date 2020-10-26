from django.contrib import admin

from .models import Blog, Comment

# Register your models here.
@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    prepopulated_fields = { 'slug': ('title', )}
    list_display = ('title', 'author', 'pub_date')
    list_filter = ('pub_date', 'author')
    search_fields = ('title', 'author', 'pub_date')

admin.site.register(Comment)