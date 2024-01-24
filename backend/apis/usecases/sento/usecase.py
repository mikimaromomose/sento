from dataclasses import dataclass

import inject
from dataclasses_json import dataclass_json

from apis.domain.sento.entities import BathTypeEnum
from apis.usecases.sento.query_service import ISentoQueryService, SentoListModel


@dataclass(frozen=True)
class GetSentosInputDto:
    name: str | None
    bath_types: list[BathTypeEnum] | None
    nearest_station: str | None
    limit: int
    offset: int


@dataclass_json
@dataclass(frozen=True)
class GetSentosOutputDto:
    sentos: list[SentoListModel]


class GetSentosUseCase:
    @inject.params(
        sento_query_service=ISentoQueryService,
    )
    def __init__(
        self,
        sento_query_service: ISentoQueryService,
    ):
        self.sento_query_service = sento_query_service

    def execute(self, input_dto: GetSentosInputDto):
        sentos = self.sento_query_service.get_sentos(
            name=input_dto.name,
            bath_types=input_dto.bath_types,
            nearest_station=input_dto.nearest_station,
            limit=input_dto.limit,
            offset=input_dto.offset,
        )

        return GetSentosOutputDto(sentos)
