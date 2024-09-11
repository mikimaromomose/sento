import datetime
import uuid
from dataclasses import dataclass

from django.core.exceptions import ValidationError
from django.utils import timezone

from apis.domain.sento.entities import Mission


@dataclass
class UserProfile:
    id: uuid.UUID
    user_id: int
    email: str
    title: str


@dataclass
class UserMission:
    id: uuid.UUID
    user_id: int
    mission: Mission
    is_completed: bool
    completed_at: datetime.datetime

    def complete_mission(self):
        if self.is_completed:
            raise ValidationError("既に達成済みのミッションです。")
        self.is_completed = True
        self.completed_at = timezone.now()
