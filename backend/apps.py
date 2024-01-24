from django.apps import AppConfig


class MyAppConfig(AppConfig):
    name = "backend"

    def ready(self) -> None:
        from config import injection_config  # noqa: F401
