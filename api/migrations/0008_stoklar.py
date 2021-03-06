# Generated by Django 2.2.3 on 2019-12-02 23:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('api', '0007_auto_20191202_2230'),
    ]

    operations = [
        migrations.CreateModel(
            name='Stoklar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('plaka', models.CharField(max_length=20)),
                ('marka', models.CharField(blank=True, max_length=50, null=True)),
                ('model', models.CharField(blank=True, max_length=50, null=True)),
                ('yil', models.CharField(blank=True, max_length=4, null=True)),
                ('ruhsatno', models.CharField(blank=True, max_length=8, null=True)),
                ('alistarihi', models.DateField(blank=True, null=True)),
                ('motorno', models.CharField(blank=True, max_length=7, null=True)),
                ('saseno', models.CharField(blank=True, max_length=17, null=True)),
                ('alisfiyati', models.CharField(blank=True, max_length=100, null=True)),
                ('kdv', models.CharField(blank=True, max_length=5, null=True)),
                ('toplam', models.CharField(blank=True, max_length=100, null=True)),
                ('aracresimleri', models.TextField(blank=True, max_length=5, null=True)),
                ('ruhsatresimleri', models.TextField(blank=True, max_length=5, null=True)),
                ('added_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='stok_added_by', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
