from abc import ABC, abstractmethod
from dataclasses import dataclass
from dataclasses_json import dataclass_json


from apis.domain.sento.entities import Sento, Bath, BathTypeEnum


@dataclass_json
@dataclass(frozen=True)
class SentoListModel(Sento):
    """
    銭湯一覧モデル
    """

    baths: list[Bath]


class ISentoQueryService(ABC):
    @abstractmethod
    def get_sentos(
        self,
        name: str | None,
        bath_types: list[BathTypeEnum] | None,
        nearest_station: str | None,
        limit: int = 100,
        offset: int = 0,
    ) -> list[SentoListModel]:
        raise NotImplementedError
