from django.db import models


class Cariekle(models.Model):
    isim = models.CharField(max_length=100)
    tc_no = models.IntegerField()
    vergi_no = models.IntegerField(blank=True)
    email = models.EmailField(max_length=255, blank=True)
    tel_no = models.CharField(max_length=13, blank=True)
    adres = models.CharField(max_length=255, blank=True)
    posta_kodu = models.IntegerField(blank=True)

    def __str__(self):
        return self.isim
