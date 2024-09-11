from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from apis.usecases.sento.usecase import GetSentosUseCase, GetSentosInputDto


class SentosView(APIView):
    permission_classes = [AllowAny]

    def get(self, request: Request) -> Response:
        sentos = GetSentosUseCase().execute(
            GetSentosInputDto(
                name=request.GET.get("name"),
                bath_types=request.GET.get("bath_types"),
                nearest_station=request.GET.get("nearest_station"),
                limit=int(
                    request.GET.get(
                        "limit",
                        "100",
                    )
                ),
                offset=int(request.GET.get("offset", "0")),
            )
        )
        return Response(
            data=sentos.to_dict(),
        )
