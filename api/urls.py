from rest_framework.routers import DefaultRouter
from .views import CarilerViewSet, StoklarViewSet

router = DefaultRouter()
router.register(r'cariler', CarilerViewSet, base_name='cariler')
router.register(r'stoklar', StoklarViewSet, base_name='stoklar')
urlpatterns = router.urls
