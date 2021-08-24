<?php include 'header.php' ?>

<div class="container">
        <a href="https://www.codewithharry.com/blogpost/css-cheatsheet"><h3>codewithharry</h3></a>
        <h1 class="text-center bg-dark">Media Queries</h1>
        <p>Media-type SS in laptop</p>
        <pre class="language-css"><code class="codeBox">@media media-type and (media-feature-expression){  css rule  }</code></pre>
        <p>We can have a totally different design for printing through @media print{}</p>
        <h1 class="text-center bg-dark">Aggregations</h1>
        <p>We can use below code to specify media features.</p>
        <pre class="language-css"><code class="codeBox">
          @media(width: 800px){}
        </code></pre>
        <p>For all screen widths less than or equal to 799px</p>
        <pre class="language-css"><code class="codeBox">
          @media(max-width: 799px){}
        </code></pre>
        <p>Similarly min-width, min-height, max-height is applied.</p>
        <pre class="language-css"><code class="codeBox">
          @media(orientation: landscape){}
        </code></pre>
        <p>Similarly (orientation: portrait) can also be applied.</p>
        <h3>Logical Operations</h3>
        <pre class=""><code class="codeBox">
          @media(cond1) and (cond2) {}
        </code></pre>
        <pre class=""><code class="codeBox">
          @media not screen (cond1) and (cond2) {} 
        </code></pre>
        <p>NOT will include everything which doesn't fall under the written conditions and apply styling to that only.It is must to use media-type (screen here) to use NOT operator.</p>
        <pre class=""><code class="codeBox">
          /*This will work like OR condition*/
          @media(), () {} 
        </code></pre>
        <p>display : none, is same as bootstraps d-none class.</p>
        <h1 class="text-center bg-dark">CSS Flexbox</h1>
        <h3>Sizing and overflow</h3>
        <h4>Intrinsic Size</h4>
        <p>Default size of any html element say image, paragraph, heading or button</p>
        <h4>Extrinsic Size</h4>
        <p>Sizing we apply on different elements through styles to fit them in the web page.</p>
        <p>Order-sm-1 and so Order-sm-2 will change order of items.</p>
    </div>
<?php include 'footer.php'?>
