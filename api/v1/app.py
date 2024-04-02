#!/usr/bin/python3
'''
This script sets up a Flask application and integrates the blueprint app_views into it.
'''

from os import environ
from flask import Flask, jsonify
from flask_cors import CORS
from models import storage
from api.v1.views import app_views

app = Flask(__name__)

# Enable CORS and specify allowed origins:
cors = CORS(app, resources={"/*": {"origins": "0.0.0.0:"}})

# Register the blueprint app_views with the Flask app and make URLs non-strict:
app.register_blueprint(app_views)
app.url_map.strict_slashes = False

@app.teardown_appcontext
def teardown_appcontext(exception):
    '''
    Cleans up the current SQLAlchemy Session object after each request.
    '''
    storage.close()


if __name__ == '__main__':
    HOST = environ.get('HBNB_API_HOST', '0.0.0.0')
    PORT = int(environ.get('HBNB_API_PORT', 5000))
    app.run(host=HOST, port=PORT, threaded=True)

