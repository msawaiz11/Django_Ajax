from django.urls import path, include
from .serializer import StudentSerializer
from .models import Students
from .views import StudentView

urlpatterns = [
    path("students/", StudentView.as_view()),
]

