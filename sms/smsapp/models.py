from django.db import models

# Create your models here.

class Students(models.Model):
    stdId = models.AutoField(primary_key=True)
    email = models.CharField(max_length=100)
    extractText = models.CharField(max_length=100)
    image = models.FileField(upload_to='FilesData')
    docxText = models.TextField(null=True)