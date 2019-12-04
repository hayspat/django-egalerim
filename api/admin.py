from django.contrib import admin

from .models import Cariler, Stoklar, AracResimleri, RuhsatResimleri


class AracResimleriInline(admin.StackedInline):
    model = AracResimleri
    verbose_name = 'Araç Resimleri'


class RuhsatResimleriInline(admin.StackedInline):
    model = RuhsatResimleri
    verbose_name = 'Ruhsat Resimleri'


class StoklarAdmin(admin.ModelAdmin):
    inlines = (AracResimleriInline, RuhsatResimleriInline)


admin.site.register(Cariler)
admin.site.register(Stoklar, StoklarAdmin)
