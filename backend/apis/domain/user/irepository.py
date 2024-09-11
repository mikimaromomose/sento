import uuid
from abc import abstractmethod, ABC

from apis.domain.user import entities


class IUserRepository(ABC):
    @abstractmethod
    def fetch_user_missions_by_user_id_and_sento_id(
        self,
        user_id: int,
        sento_id: uuid.UUID,
    ) -> list[entities.UserMission]:
        raise NotImplementedError

    @abstractmethod
    def fetch_user_mission_by_id_and_user_id(
        self, id: uuid.UUID, user_id: int
    ) -> entities.UserMission:
        raise NotImplementedError

    @abstractmethod
    def save(self, user_mission: entities.UserMission):
        raise NotImplementedError
