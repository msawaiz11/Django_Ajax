from rest_framework.views import APIView
from .serializer import StudentSerializer
from .models import Students
from rest_framework.response import Response
from rest_framework.views import status


class StudentView(APIView):
    def post(self, request):
        data = request.data
        serializer = StudentSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return Response('data saved success', status= status.HTTP_200_OK)
        return Response('Not added', status=status.HTTP_404_NOT_FOUND)
    
    