from django.apps import AppConfig


class ApisConfig(AppConfig):
    default_auto_field = "django.db.models.BigAutoField"
    name = "apis"

    def ready(self) -> None:
        from config import injection_config  # noqa: F401
