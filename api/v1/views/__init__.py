from flask import Blueprint

app_views = Blueprint("app_views", __name__, url_prefix="/api/v1")

# Import the routes defined in index.py
from api.v1.views.index import *

