import uuid

from django.db import models


class Sento(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    nearest_station = models.CharField(max_length=255)
    walking_time = models.IntegerField(default=0)
    address = models.CharField(max_length=255)
    operating_hours_remarks = models.CharField(max_length=255, blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.address}"


class OperatingHour(models.Model):
    DAYS_OF_WEEKS = [
        (1, "月曜日"),
        (2, "火曜日"),
        (3, "水曜日"),
        (4, "木曜日"),
        (5, "金曜日"),
        (6, "土曜日"),
        (7, "日曜日"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sento = models.ForeignKey(
        Sento, on_delete=models.CASCADE, related_name="operating_hours"
    )

    day_of_week = models.IntegerField(choices=DAYS_OF_WEEKS)
    open_time = models.TimeField()
    close_time = models.TimeField()


class Bath(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    sento = models.ForeignKey(Sento, on_delete=models.CASCADE, related_name="baths")

    temperature = models.DecimalField(max_digits=4, decimal_places=2, default=0.0)

    def __str__(self):
        return f"{self.sento} - {self.temperature}"


class BathType(models.Model):
    BathTypes = [
        (1, "白湯"),
        (2, "薬湯"),
        (3, "水風呂"),
        (4, "天然温泉"),
        (5, "あつ湯"),
        (6, "ジェットバス"),
        (7, "炭酸泉"),
    ]

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    bath = models.ForeignKey(Bath, on_delete=models.CASCADE)
    type = models.IntegerField(choices=BathTypes)
