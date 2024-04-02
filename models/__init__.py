#!/usr/bin/python3
"""
initialize the models package
"""

from os import getenv

storage_t = getenv("HBNB_TYPE_STORAGE")

if storage_t == "db":
    from models.engine.db_storage import DBStorage
    storage = DBStorage()
else:
    from models.engine.file_storage import FileStorage
    storage = FileStorage()

# Check if the storage type supports reload before calling it
if hasattr(storage, 'reload'):
    storage.reload()

