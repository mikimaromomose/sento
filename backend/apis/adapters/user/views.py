import uuid

from django.core.exceptions import ValidationError
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView

from apis.usecases.user.usecase import (
    GetUserMissionsBySentoUseCase,
    GetUserMissionsBySentoInputDto,
    CompleteUserMissionUseCase,
    CompleteUserMissionInputDto,
)


class UserMissionsBySentoView(APIView):
    def get(self, request: Request, sento_id: uuid.UUID) -> Response:
        input_dto = GetUserMissionsBySentoInputDto(
            user_id=request.user.id,
            sento_id=sento_id,
        )
        user_missions = GetUserMissionsBySentoUseCase().execute(input_dto)
        return Response(
            data=user_missions.to_dict(),
        )


class CompleteUserMissionView(APIView):
    def post(self, request: Request, user_mission_id: uuid.UUID) -> Response:
        try:
            input_dto = CompleteUserMissionInputDto(
                user_mission_id=user_mission_id,
                user_id=request.user.id,
            )
            CompleteUserMissionUseCase().execute(input_dto)
            return Response({})
        except ValidationError as e:
            return Response({"message": e.message}, status=status.HTTP_400_BAD_REQUEST)
