from django.urls import re_path, path, include

from apis.adapters.sento.views import SentosView
from apis.adapters.user.views import (
    UserMissionsBySentoView,
    CompleteUserMissionView,
    LoggedInUserView,
)

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
    path("auth/", include("allauth.urls")),
    path("auth/user/", LoggedInUserView.as_view(), name="logged-in-user"),
    path("auth/registration/", include("dj_rest_auth.registration.urls")),
    path("auth/social/", include("allauth.socialaccount.urls")),
    path("auth/social/signup/", include("allauth.socialaccount.urls")),
]
