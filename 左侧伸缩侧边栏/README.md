>演示地址：http://runjs.cn/detail/jmoullpw

## 1.HTML代码
```
<aside class="box" id="test">
        <button id="btn">三</button>
        <ul>
            <li>
                <h3>ZZES</h3>
            </li>
            <li><a href="#">MENU TITLE 1</a></li>
            <li><a href="#">MENU TITLE 2</a></li>
            <li><a href="#">MENU TITLE 3</a></li>
            <li><a href="#">MENU TITLE 4</a></li>
            <li><a href="#">MENU TITLE 5</a></li>
            <li><a href="#">MENU TITLE 6</a></li>
            <li><a href="#">MENU TITLE 7</a></li>
        </ul>
    </aside>
    <section>
        <h1>Main Content</h1>
    </section>
```

## 2.CSS代码
```
        * {
            margin: 0;
            padding: 0;
        }
        
        body {
            max-width: 1920px;
        }
        
        #btn {
            position: absolute;
            top: 22%;
            left: 298px;
            height: 75px;
            border: 0;
            border-left: 1px solid rgb(23, 32, 43, 0.2);
            background: #AA3344;
            color: #fff;
            cursor: pointer;
        }
        
        .box {
            float: left;
            position: relative;
            left: 0;
            height: 1000px;
            width: 300px;
            margin-left: 0;
            display: block;
            background-color: #a34;
            -moz-transition: margin-left 2s;
            transition: margin-left 2s;
        }
        
        aside ul li {
            height: 40px;
            line-height: 40px;
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            list-style-type: none;
            text-align: center;
        }
        
        aside ul li a {
            width: 100%;
            height: 100%;
            text-decoration-line: none;
            color: #fff;
            display: block;
        }
        
        aside ul li a:hover {
            background: #d3d;
        }
        
        section {
            width: 100%;
            height: 100%;
            background: #d4d4d4;
            height: 1000px;
        }
        
        section h1 {
            text-align: center;
            border-bottom: 1px solid #fff;
        }
```

## 3.JavaScript代码
```
        var box = document.getElementById("test")
        var btn = document.getElementById("btn")
        btn.onclick = function() {
            if (box.offsetLeft == 0) {
                box.style['margin-left'] = -300 + "px"
            } else {
                box.style['margin-left'] = 0 + "px"
            }
        }
```

![](http://upload-images.jianshu.io/upload_images/2245742-4296f1cec83369c4.gif!thumbnail?imageMogr2/auto-orient/strip)