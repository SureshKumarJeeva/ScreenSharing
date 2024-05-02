<html>
    <head>
        <title> Screen Sharing</title>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <style type="text/css">
            #screen-container{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            #video-container{
                max-width: 100%;
                max-height: 100%;
            }
        </style>
    </head>
    <body>
        <div>
            <button id="start-screen-share">Start Screen Share</button>
            <div id="video-container">
                <video id="screen_sharer" autoplay></video>
            </div>
        </div>
        <script type="text/javascript" src="assets/js/screen_share.js"></script>
    </body>
</html>

