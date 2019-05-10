# Responsive Sprites Framework


### Handles sprites images in unique way.
    This way displayed images are much more accurate and responsive while framework does all the calculating.

    Handling images is simple and reminds of popular font-awesome:

```html
<i class="sprites-imgname"></i>
```


### The easiest way is to visit [RSF website](http://responsive-sprites.com) and follow the instructions - (THIS WAY IS MUCH EASIER AND YOU WILL AVOID MANUAL "SPRITING")

![example](https://github.com/1978milanbabic/responsive_sprites_framework/blob/master/example.png)


## Or You could do it manually. (This is the principle how this framework works):

### 1. Implement Framework (Constructor Function) somewhere in the head section
```html
<script src="/res-sprites.min.js"></script>
```

### 2. Obtain your images data thru some of sprites generating engines/websites
You should create data object following this scheme:
```javascript
var pngs_data = {
    cssclass: "sprites",
    img_source: "./img/sprites.png",
    total_width: 404,
    total_height: 404,
    imgs: {
        "imageName1": {
            x : 0,
            y : 0,
            width : 128,
            height : 128
        },
        "imageName2": {
            x : 138,
            y : 0,
            width : 128,
            height : 128
        },
        "imageName3": {
            x : 0,
            y : 138,
            width : 128,
            height : 128
        },
        "imageName4": {
            x : 138,
            y : 138,
            width : 128,
            height : 128
        }
    }
};
```

### 3. Last step: Create Your Sprites either on document ready, either on window load (DOM needs to be loaded)
```javascript
//create sprites
var pngs = new RespSprites(pngs_data);
pngs.create();
```
