from apis import models
from apis.domain.sento import entities
from apis.domain.sento.entities import BathTypeEnum


def convert_to_bath_entity(bath: models.Bath):
    return entities.Bath(
        temperature=bath.temperature,
        types=bath.types,
    )


def convert_to_operating_hour_entity(operating_hour: models.OperatingHour):
    return entities.OperatingHour(
        day_of_week=BathTypeEnum(operating_hour.day_of_week),
        open_time=operating_hour.open_time,
        close_time=operating_hour.close_time,
    )
