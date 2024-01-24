from django.db.models import Q

from apis.domain.sento.entities import BathTypeEnum
from apis.infrastructure.sento.repository import (
    convert_to_bath_entity,
    convert_to_operating_hour_entity,
)
from apis.models import Sento
from apis.usecases.sento.query_service import ISentoQueryService, SentoListModel


class SentoQueryService(ISentoQueryService):
    def get_sentos(
        self,
        name: str | None,
        bath_types: list[BathTypeEnum] | None,
        nearest_station: str | None,
        limit: int = 100,
        offset: int = 0,
    ) -> list[SentoListModel]:
        # フィルタ条件を構築
        query_conditions = Q()

        if name:
            query_conditions &= Q(name=name)

        if nearest_station:
            query_conditions &= Q(nearest_station=nearest_station)

        if bath_types:
            bath_type_values = [bath_type.value for bath_type in bath_types]
            query_conditions &= Q(baths__types__in=bath_type_values)

        query = Sento.objects.filter(query_conditions)[offset : offset + limit]
        sentos = query.prefetch_related("baths", "operating_hours").all()

        # SentoListModelのリストを作成
        return [self._to_list_model(sento) for sento in sentos]

    def _to_list_model(self, sento: Sento) -> SentoListModel:
        return SentoListModel(
            id=sento.id,
            name=sento.name,
            nearest_station=sento.nearest_station,
            walking_time=sento.walking_time,
            address=sento.address,
            operating_hours_remarks=sento.operating_hours_remarks,
            operating_hours=[
                convert_to_operating_hour_entity(operating_hour)
                for operating_hour in sento.operating_hours.all()
            ],
            baths=[convert_to_bath_entity(bath) for bath in sento.baths.all()],
        )
