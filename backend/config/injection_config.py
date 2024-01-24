import inject

from apis.infrastructure.sento.query_service import SentoQueryService
from apis.usecases.sento.query_service import ISentoQueryService


def injection_config(binder):
    binder.bind(ISentoQueryService, SentoQueryService())


inject.configure_once(injection_config)
