from rest_framework.routers import DefaultRouter
from .views import CarilerViewSet, StoklarViewSet, AracResimleriViewSet, RuhsatResimleriViewSet

router = DefaultRouter()
router.register(r'cariler', CarilerViewSet, base_name='cariler')
router.register(r'stoklar', StoklarViewSet, base_name='stoklar')
router.register(r'aracresimleri', AracResimleriViewSet,
                base_name='aracresimleri')
router.register(r'ruhsatresimleri', RuhsatResimleriViewSet,
                base_name='ruhsatresimleri')

urlpatterns = router.urls
