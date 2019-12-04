from rest_framework import serializers
from .models import Cariler, Stoklar, AracResimleri, RuhsatResimleri


class CarilerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cariler
        fields = "__all__"


class AracResimleriSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AracResimleri
        fields = '__all__'


class RuhsatResimleriSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = RuhsatResimleri
        fields = '__all__'


class StoklarSerializer(serializers.HyperlinkedModelSerializer):
    id = serializers.ReadOnlyField()
    arac_resimleri = AracResimleriSerializer(
        source='aracresimleri', many=True, read_only=True)
    ruhsat_resimleri = AracResimleriSerializer(
        source='ruhsatresimleri', many=True, read_only=True)

    class Meta:
        model = Stoklar
        fields = "__all__"

    def create(self, validated_data):
        images_data = self.context.get('view').request.FILES
        stoklar = Stoklar.objects.create(
            plaka=validated_data.get('plaka'),
            marka=validated_data.get('marka'),
            model=validated_data.get('model'),
            yil=validated_data.get('yil'),
            tur=validated_data.get('tur'),
            ruhsat_no=validated_data.get('ruhsat_no'),
            alis_tarihi=validated_data.get('alis_tarihi'),
            motor_no=validated_data.get('motor_no'),
            sase_no=validated_data.get('sase_no'),
            alis_fiyati=validated_data.get('alis_fiyati'),
            kdv=validated_data.get('kdv'),
            toplam=validated_data.get('toplam'),
            aciklama=validated_data.get('aciklama'),
            added_by=validated_data.get('added_by'))

        for image_data in images_data.values():
            AracResimleri.objects.create(stoklar=stoklar, image=image_data)
        return stoklar
