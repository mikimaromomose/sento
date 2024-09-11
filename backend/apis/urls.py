from django.urls import re_path, path, include

from apis.adapters.sento.views import SentosView
from apis.adapters.user.views import UserMissionsBySentoView, CompleteUserMissionView

urlpatterns = [
    re_path(
        r"^sentos/$",
        SentosView.as_view(),
    ),
    path(
        "user/missions/<uuid:user_mission_id>/",
        CompleteUserMissionView.as_view(),
    ),
    path(
        "user/missions/sentos/<uuid:sento_id>/",
        UserMissionsBySentoView.as_view(),
    ),
    path("auth/", include("dj_rest_auth.urls")),
    path("auth/registration/", include("dj_rest_auth.registration.urls")),
]
