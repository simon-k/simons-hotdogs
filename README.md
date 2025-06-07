# simons-hotdogs
Demo website for a hotdog stand

See the public website at https://simon-k.github.io/simons-hotdogs/


## Running website and the NLWeb server locally

1. Follow the guide here: https://github.com/microsoft/NLWeb/blob/main/docs/nlweb-hello-world.md

    Use the rss.xml feed for feeding the NLWeb some data.

    Modify the `WebServer.py` to disable the CORS check. Comment line 131: `if CONFIG.server.enable_cors and 'Origin' in headers:`. This is needed because we want to run the hotdog page on port 8001.

2. Run the NLWeb REST API from the NLWeb repo `python app-file.py`. This will serve the API on localhost:8000

3. Start the webserver from the simons-hotdogs repo like this: `python3 -m http.server 8001`

4. You should now be able to access the website from `localhost:8001`and ask the chatbot about hotdogs...
