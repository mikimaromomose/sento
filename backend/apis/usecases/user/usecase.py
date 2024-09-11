import uuid
from dataclasses import dataclass

import inject
from dataclasses_json import dataclass_json, LetterCase

from apis.domain.sento.entities import BathTypeEnum
from apis.domain.user.entities import UserMission
from apis.domain.user.irepository import IUserRepository
from apis.usecases.sento.query_service import ISentoQueryService, SentoListModel


@dataclass(frozen=True)
class GetUserMissionsBySentoInputDto:
    user_id: int
    sento_id: uuid.UUID


@dataclass_json(letter_case=LetterCase.CAMEL)
@dataclass(frozen=True)
class GetUserMissionsBySentoOutputDto:
    user_missions: list[UserMission]


class GetUserMissionsBySentoUseCase:
    @inject.params(
        user_repository=IUserRepository,
    )
    def __init__(
        self,
        user_repository: IUserRepository,
    ):
        self.user_repository = user_repository

    def execute(self, input_dto: GetUserMissionsBySentoInputDto):
        user_missions = (
            self.user_repository.fetch_user_missions_by_user_id_and_sento_id(
                input_dto.user_id,
                input_dto.sento_id,
            )
        )

        return GetUserMissionsBySentoOutputDto(user_missions)


@dataclass(frozen=True)
class CompleteUserMissionInputDto:
    user_mission_id: uuid.UUID
    user_id: int


class CompleteUserMissionUseCase:
    @inject.params(
        user_repository=IUserRepository,
    )
    def __init__(self, user_repository: IUserRepository):
        self.user_repository = user_repository

    def execute(self, input_dto: CompleteUserMissionInputDto) -> None:
        user_mission = self.user_repository.fetch_user_mission_by_id_and_user_id(
            input_dto.user_mission_id, input_dto.user_id
        )
        user_mission.complete_mission()
        self.user_repository.save(user_mission)
