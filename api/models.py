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
        User, related_name='added_by', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.isim


class Stoklar(models.Model):
    plaka = models.CharField(max_length=20)
    marka = models.CharField(max_length=50, blank=True, null=True)
    model = models.CharField(max_length=50, blank=True, null=True)
    yil = models.CharField(max_length=4, blank=True, null=True)
    tur = models.CharField(max_length=20, blank=True, null=True)
    ruhsat_no = models.CharField(max_length=8, blank=True, null=True)
    alis_tarihi = models.DateField(blank=True, null=True)
    motor_no = models.CharField(max_length=7, blank=True, null=True)
    sase_no = models.CharField(max_length=17, blank=True, null=True)
    alis_fiyati = models.CharField(max_length=100, blank=True, null=True)
    kdv = models.CharField(max_length=5, blank=True, null=True)
    toplam = models.CharField(max_length=100, blank=True, null=True)
    aciklama = models.TextField(blank=True, null=True)
    arac_resimleri = models.TextField(max_length=5, blank=True, null=True)
    ruhsat_resimleri = models.TextField(max_length=5, blank=True, null=True)
    added_by = models.ForeignKey(
        'users.User', related_name='stok_added_by', on_delete=models.CASCADE)

    def __str__(self):
        return self.plaka
