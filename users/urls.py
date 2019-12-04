from rest_framework.routers import DefaultRouter
from .views import UserViewSet
from django.urls import path, include

user_list = UserViewSet.as_view({
    'get': 'list'
})
user_detail = UserViewSet.as_view({
    'get': 'retrieve'
})


urlpatterns = [
    path('', user_list, name='user-list'),
    path('<int:pk>/', user_detail, name='user-detail')
]
