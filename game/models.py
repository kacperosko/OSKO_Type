from django.db import models

# Create your models here.

class Text(models.Model):
    title = models.CharField(blank=True, max_length=100)
    content = models.TextField(blank=False)

    

    class Meta:
        verbose_name = ("Text")
        verbose_name_plural = ("Texts")


