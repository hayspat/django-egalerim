from django.contrib import admin

from .models import Cariler, Stoklar, AracResimleri, RuhsatResimleri

admin.site.register(Cariler)
admin.site.register(Stoklar)
admin.site.register(AracResimleri)
admin.site.register(RuhsatResimleri)
