from django.urls import re_path
from apis.adapters.sento.views import SentoView

urlpatterns = [
    re_path(
        "sentos/",
        SentoView.as_view(),
    ),
]
