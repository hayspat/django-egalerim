from django.db import models
from users.models import User


class Cariler(models.Model):
    isim = models.CharField(max_length=100)
    tc_no = models.CharField(max_length=11)
    vergi_no = models.CharField(max_length=10, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    tel_no = models.CharField(max_length=13, blank=True, null=True)
    adres = models.CharField(max_length=255, blank=True, null=True)
    posta_kodu = models.CharField(max_length=5, blank=True, null=True)
    added_by = models.ForeignKey(
        'users.User', related_name='added_by', on_delete=models.CASCADE)

    def __str__(self):
        return self.isim
