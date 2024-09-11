import uuid

from apis import models
from apis.domain.user import entities
from apis.domain.user.irepository import IUserRepository
from django.utils import timezone

from apis.infrastructure.sento.repository import convert_to_mission_entity


def convert_to_user_mission_entity(
    user_mission: models.UserMission,
) -> entities.UserMission:
    return entities.UserMission(
        id=user_mission.id,
        user_id=user_mission.user.id,
        mission=convert_to_mission_entity(user_mission.mission),
        is_completed=user_mission.is_completed,
        completed_at=user_mission.completed_at,
    )


class UserRepository(IUserRepository):
    def fetch_user_missions_by_user_id_and_sento_id(
        self,
        user_id: int,
        sento_id: uuid.UUID,
    ) -> list[entities.UserMission]:
        user_missions = models.UserMission.objects.filter(
            mission__sento_id=sento_id,
            user_id=user_id,
            mission__expiration_at__gt=timezone.now(),  # expiration_atが現在時刻より後
        ).select_related("mission", "user")

        return [
            convert_to_user_mission_entity(user_mission)
            for user_mission in user_missions
        ]

    def fetch_user_mission_by_id_and_user_id(
        self, id: uuid.UUID, user_id: int
    ) -> entities.UserMission:
        user_mission = models.UserMission.objects.get(
            id=id,
            user_id=user_id,
        )
        return convert_to_user_mission_entity(user_mission)

    def save(self, user_mission: entities.UserMission):
        user_mission_model = models.UserMission.objects.get(id=user_mission.id)
        user_mission_model.is_completed = user_mission.is_completed
        user_mission_model.completed_at = user_mission.completed_at
        user_mission_model.save()
