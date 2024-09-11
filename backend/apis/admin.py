from django.contrib import admin

from apis.models import (
    Sento,
    OperatingHour,
    Bath,
    BathType,
    UserProfile,
    Mission,
    UserMission,
    UserSentoStatus,
)


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = [
        "user",
        "title",
    ]


@admin.register(Sento)
class SentoAdmin(admin.ModelAdmin):
    list_display = [
        "name",
        "nearest_station",
        "walking_time",
        "address",
    ]


@admin.register(OperatingHour)
class OperatingHourAdmin(admin.ModelAdmin):
    list_display = ["sento", "day_of_week", "open_time", "close_time"]


@admin.register(Bath)
class BathAdmin(admin.ModelAdmin):
    list_display = [
        "sento",
        "temperature",
    ]


@admin.register(BathType)
class BathTypeAdmin(admin.ModelAdmin):
    list_display = [
        "bath",
        "type",
    ]


@admin.register(Mission)
class MissionAdmin(admin.ModelAdmin):
    list_display = [
        "sento",
        "title",
        "description",
        "expiration_at",
    ]


@admin.register(UserMission)
class UserMissionAdmin(admin.ModelAdmin):
    list_display = [
        "user",
        "mission",
        "is_completed",
        "completed_at",
    ]


@admin.register(UserSentoStatus)
class UserSentoStatusAdmin(admin.ModelAdmin):
    list_display = [
        "user",
        "sento",
        "visit_count",
        "points",
        "last_visit_date",
    ]
