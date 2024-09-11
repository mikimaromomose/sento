import datetime
import uuid
from dataclasses import dataclass
from enum import Enum


class DaysOfWeeksEnum(Enum):
    MONDAY = (1, "月曜日")
    TUESDAY = (2, "火曜日")
    WEDNESDAY = (3, "水曜日")
    THURSDAY = (4, "木曜日")
    FRIDAY = (5, "金曜日")
    SATURDAY = (6, "土曜日")
    SUNDAY = (7, "日曜日")

    def __init__(self, num, label):
        self.num = num
        self.label = label

    def __str__(self):
        return self.label


@dataclass(frozen=True)
class OperatingHour:
    """
    営業時間
    """

    day_of_week: DaysOfWeeksEnum
    open_time: datetime.datetime
    close_time: datetime.datetime


class BathTypeEnum(Enum):
    PLAIN_WATER = (1, "白湯")
    MEDICATED_BATH = (2, "薬湯")
    COLD_WATER = (3, "水風呂")
    NATURAL_HOT_SPRING = (4, "天然温泉")
    HOT_WATER = (5, "あつ湯")
    JET_BATH = (6, "ジェットバス")
    CARBONATED_SPRING = (7, "炭酸泉")

    def __init__(self, num, label):
        self.num = num
        self.label = label

    def __str__(self):
        return self.label


@dataclass(frozen=True)
class Bath:
    """
    お風呂
    """

    temperature: int
    types: list[BathTypeEnum]


@dataclass(frozen=True)
class Sento:
    """
    銭湯
    """

    id: uuid.UUID
    name: str
    nearest_station: str
    walking_time: int
    address: str
    operating_hours_remarks: str


@dataclass(frozen=True)
class Mission:
    """
    ミッション
    """

    id: uuid.UUID
    sento_id: uuid.UUID
    title: str
    description: str
    expiration_at: datetime.datetime
