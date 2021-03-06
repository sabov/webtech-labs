$(function () {

    var canvases = $('canvas');

    canvases.each(function(key, value){
        renderCanvas(value);
    });

    function renderCanvas(canvas) {
        ctx = canvas.getContext('2d');
        var sit = {};
        sit.num = 9;
        sit.size = 34;
        sit.distance = 40;
        sit.startX = 30;
        sit.startY = 70;
        canvas.width  = 450;
        canvas.height = 450;
        var price = 0;

        var sits = [];
        for (var i = 0; i < sit.num; i++){
            sits[i] = [];
            for (var j = 0; j < sit.num; j++){
                sits[i][j] = false;
        }}


        function renderSits(canvas, mouseX, mouseY, eventType){
            ctx = canvas.getContext('2d');

            ctx.strokeStyle = 'gray';

            priceHolder = document.getElementById('price');

            //sits
            for (i = 0; i < sit.num; i += 1)
                for (j = 0; j < sit.num; j += 1) {
                    if (sits[i][j])
                        ctx.fillStyle = 'red';
                    else
                        ctx.fillStyle = '#'+j+'9'+9+j+'AA';

                    if ((mouseX > (sit.startX + i * sit.distance)) &&
                        (mouseX < (sit.startX + i * sit.distance + sit.size)) &&
                        (mouseY > (sit.startY + j * sit.distance)) &&
                        (mouseY < (sit.startY + j * sit.distance + sit.size))){

                        if (eventType == "mousedown"){
                            ctx.fillStyle = '#E60000';
                            sits[i][j] = !sits[i][j];
                            price = sits[i][j]? price + 7 : price - 7;
                            priceHolder.innerHTML = '$'+price;
                        }
                        if (eventType == "mousemove")
                            ctx.fillStyle = '#FFFF19';
                    }
                    ctx.fillRect(sit.startX + i * sit.distance, sit.startY + j * sit.distance, sit.size, sit.size);
                    ctx.fillStyle = 'black';
                    ctx.fillText(i+1, 43 + i * 40, 91 + j * 40);
                }

        };

        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        };

        canvas.addEventListener('mousemove', function(evt) {
            var mousePos = getMousePos(canvas, evt);
            renderSits(canvas, mousePos.x, mousePos.y, evt.type);
        }, false);

        canvas.addEventListener("mousedown", function(evt){
            var mousePos = getMousePos(canvas, evt);
            renderSits(canvas, mousePos.x, mousePos.y, evt.type);
        }, false);


        renderSits(canvas, 0, 0);

        //screen
        ctx.beginPath();
        ctx.moveTo(50,20);
        ctx.quadraticCurveTo(180,5,320,20);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#1943BF';
        ctx.stroke();
    };

});

// renderCanvas(canvas);
