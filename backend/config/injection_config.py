import inject

from apis.domain.user.irepository import IUserRepository
from apis.infrastructure.sento.query_service import SentoQueryService
from apis.infrastructure.user.repository import UserRepository
from apis.usecases.sento.query_service import ISentoQueryService


def injection_config(binder):
    binder.bind(ISentoQueryService, SentoQueryService())
    binder.bind(IUserRepository, UserRepository())


inject.configure_once(injection_config)
