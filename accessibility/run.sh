python isochrones.py --profile=driving --minutes=30 --generalize=0 --token=$MAPBOX_ACCESS_TOKEN sample_data/points.geojson
python analyze.py --pop_tiff=sample_data/pop.tiff --points=sample_data/points.geojson --output=accessibility.geojson points_isochrone_driving_30.json