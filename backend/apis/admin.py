from django.contrib import admin

from apis.models import Sento, OperatingHour, Bath, BathType


# Register your models here.
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
class BathType(admin.ModelAdmin):
    list_display = [
        "bath",
        "type",
    ]
