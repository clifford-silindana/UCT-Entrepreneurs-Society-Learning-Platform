from django.db import models

# Create your models here.

class Article(models.Model):
    title = models.CharField(max_length = 100)
    author = models.CharField(max_length = 100)
    body = models.TextField()
    date_created = models.DateField(auto_now_add= True)

    def __str__(self):
        return self.title + ", " + self.author

