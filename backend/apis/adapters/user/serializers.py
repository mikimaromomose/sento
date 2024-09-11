from rest_framework import serializers


class GetSentosSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100, required=False)
    bath_types = serializers.CharField(max_length=200, required=False)
    nearest_station = serializers.CharField(max_length=100, required=False)
    limit = serializers.IntegerField(default=100)
    offset = serializers.IntegerField(default=0)
