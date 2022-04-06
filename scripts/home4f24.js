(() => {
    "use strict";
    new (function () {
        function a() {
            var a = this;
            this.roadmapContainer = document.querySelector(".roadmap"),
                this.roadmapCanvas = document.getElementById("roadmap-bg-canvas"),
                this.roadmapVideo = document.getElementById("roadmap-bg-video"),
                this.roadMapCtx = this.roadmapCanvas.getContext("2d"),
                this.roadmapVideo.onloadedmetadata = function () {
                    a.initRoadmapBg()
                }
                ,
                setTimeout((function () {
                    return a.initRoadmapBg()
                }
                ), 500)
        }
        return a.prototype.initRoadmapBg = function () {
            var a = this;
            this.roadmapVideoWidth = this.roadmapVideo.videoWidth,
                this.roadmapVideoHeight = this.roadmapVideo.videoHeight,
                this.roadmapCanvas.width = this.roadmapVideo.offsetWidth,
                this.roadmapCanvas.height = this.roadmapVideo.offsetHeight,
                this.drawingLoop(),
                this.roadmapVideo.muted = !0,
                this.roadmapVideo.play(),
                setTimeout((function () {
                    a.setRoadmapBgColor(a.roadmapVideo)
                }
                ), 500)
        }
            ,
            a.prototype.drawingLoop = function () {
                var a = this;
                window.requestAnimationFrame((function () {
                    return a.drawingLoop()
                }
                )),
                    this.roadMapCtx.drawImage(this.roadmapVideo, 0, 0, this.roadmapVideoWidth, this.roadmapVideoHeight, 0, 0, this.roadmapCanvas.width, this.roadmapCanvas.height)
            }
            ,
            a.prototype.setRoadmapBgColor = function (a) {
                var t = this
                    , o = document.createElement("canvas");
                o.width = 8,
                    o.height = 8;
                var i = o.getContext("2d");
                i.drawImage(a, 0, 0, 8, 8);
                var e = i.getImageData(0, 0, 8, 8).data;
                0 === e[60] && 0 === e[61] && 0 === e[62] ? setTimeout((function () {
                    return t.setRoadmapBgColor(a)
                }
                ), 500) : this.roadmapContainer.style.backgroundColor = "rgb(" + e[60] + "," + e[61] + "," + e[62] + ")"
            }
            ,
            a
    }())
}
)();
