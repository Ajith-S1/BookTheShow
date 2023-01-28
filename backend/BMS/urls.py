from rest_framework import routers
from .views import MovieViewSet, TheaterViewSet, BookingViewSet, ShowViewSet, UserViewSet


router = routers.DefaultRouter()
router.register(r'Movie', MovieViewSet, 'Movie')
router.register(r'Theater', TheaterViewSet, 'Theater')
router.register(r'Show', ShowViewSet, 'Show')
router.register(r'Booking', BookingViewSet, 'Booking')
router.register(r'User', UserViewSet, 'User')

urlpatterns = router.urls
