from flask import Flask, render_template, request, redirect, jsonify, make_response


import logging

# app = Flask(__name__)

#try:
#    from evora import andor
#except(ImportError):
#    print("COULD NOT GET DRIVERS/SDK, STARTING IN DUMMY MODE")
    # TODO: add dummy server if necessary

def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)

    logging.basicConfig(level=logging.DEBUG)

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)
    

    app.logger.info(f"Server started!")

    # a simple page that says hello
    @app.route('/query')
    def route_query():
        if request.method == "POST":
            req = request.get_json(force=True)


        return 


    return app

app = create_app()


if __name__ == '__main__':
    app.run(port=3000)
