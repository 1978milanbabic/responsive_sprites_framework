function RespSprites(Obj) {

    var cssClass = Obj["cssclass"];
    var img_source = Obj["img_source"];

    var total_width = Obj["total_width"];
    var total_height = Obj["total_height"];

    var picsObjs = Obj["imgs"];

    var unused = [];

    this.create = function () {

        for (var imgname in picsObjs) {
            var curClass = cssClass + "-" + imgname;
            var curElems = document.getElementsByClassName(curClass);

            if (curElems && curElems.length > 0) { //element exists
                for (var i = 0; i < curElems.length; i++) { //for each of that class

                    curElems[i].style.display = "inline-block";
                    var curElemDefWidth = curElems[i].offsetWidth;

                    var contW, defW, defH;

                    //find default img width and height
                    defW = picsObjs[imgname]["width"];
                    defH = picsObjs[imgname]["height"];

                    if (curElemDefWidth && curElemDefWidth > 0) { //predefined width in css
                        contW = curElemDefWidth;
                    } else { //default img sizes
                        contW = defW;
                        curElems[i].style.width = contW + "px";
                    }

                    //******** create inner pic elem ******
                    //css vars
                    var objW = picsObjs[imgname]["width"];
                    var objH = picsObjs[imgname]["height"];
                    var objX = picsObjs[imgname]["x"];
                    var objY = picsObjs[imgname]["y"];
                    //also usable => total_width  total_height

                    //var spanW = 100%;
                    var spanH = ((objH / objW) * 100); //padding-bottom in %
                    var picW = ((total_width / objW) * 100); //pic width in %
                    //var picH = auto;

                    var xperc = (objX / total_width) * 100;
                    var yperc = (objY / total_height) * 100;

                    //create span element (dimensions + overflow: hidden)
                    var innerSpan = document.createElement("span");
                    innerSpan.style.cssText = "display: block; position: relative; overflow: hidden; width: 100%; height: 0; padding-bottom: " + spanH + "%";
                    curElems[i].appendChild(innerSpan);

                    //create inner pic
                    var innerPic = document.createElement("img");
                    innerPic.src = img_source;
                    innerPic.alt = "";
                    innerPic.style.cssText = "position: absolute; top: 0; left: 0; width: " + picW + "%; height: auto; transform: translate(-" + xperc + "%, -" + yperc + "%); ";

                    innerSpan.appendChild(innerPic);

                }
            } else {
                unused.push(curClass);
            }

        }
        if (unused.length > 0) {
            console.log("UNUSED PICS: .", unused); //Unused Pics Log for developers
        }
    };
}
