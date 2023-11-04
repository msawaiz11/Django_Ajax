from django.contrib import admin
from .models import Students
# Register your models here.

modelslist = [Students]

admin.site.register(modelslist)