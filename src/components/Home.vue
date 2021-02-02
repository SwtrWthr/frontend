<template>
  <div class="home">
    <slot>
    <header>
      <div class="header-logo">
        <img id="logo" src="../assets/images/logo.png">
        <img id="banner" src="../assets/images/banner.png">
      </div>
      
    </header>
    <nav>
        <a href="#">Home</a>
        <router-link :to="{name: 'second'}">Second</router-link>
        <a href="#">Contact</a>
        <a href="#news">News</a>
        <a href="#">Music</a>
        <a href="#">games</a>
        <a href="#">Pictures</a>
        <a href="#">Videos</a>
        <a href="#">Nothing</a>
      </nav>
    <article>
      <img src="../assets/images/image_1.jpg">
      <section class="article_info">
        <span class="article_type">Business > Gamification</span>
        <h2>Abra Kadabra</h2>
        <span class="upload_info">Posted by <b>Peter</b> 2 hours ago | <b>36 comments</b></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus laudantium aliquam in non reprehenderit, beatae! Dolorem odio aperiam voluptate eligendi, unde at! Aspernatur amet totam, laudantium. Molestias, sapiente et fugit.</p>
      </section>
      <hr>
      <img src="../assets/images/image_2.jpg">
      <section class="article_info">
        <span class="article_type">Business > Gamification</span>
        <h2>GAMES</h2>
        <span class="upload_info">Posted by <b>Peter</b> 2 hours ago | <b>36 comments</b></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus laudantium aliquam in non reprehenderit, beatae! Dolorem odio aperiam voluptate eligendi, unde at! Aspernatur amet totam, laudantium. Molestias, sapiente et fugit.</p>
      </section>
      <hr>
      <img src="../assets/images/image_3.jpg">
      <section class="article_info">
        <span class="article_type">Business > Gamification</span>
        <h2>SCHOOL</h2>
        <span class="upload_info">Posted by <b>Peter</b> 2 hours ago | <b>36 comments</b></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus laudantium aliquam in non reprehenderit, beatae! Dolorem odio aperiam voluptate eligendi, unde at! Aspernatur amet totam, laudantium. Molestias, sapiente et fugit.</p>
      </section>
      <hr>
      <img src="../assets/images/image_4.jpg">
      <section class="article_info">
        <span class="article_type">Business > Gamification</span>
        <h2>Apple</h2>
        <span class="upload_info">Posted by <b>Peter</b> 2 hours ago | <b>36 comments</b></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus laudantium aliquam in non reprehenderit, beatae! Dolorem odio aperiam voluptate eligendi, unde at! Aspernatur amet totam, laudantium. Molestias, sapiente et fugit.</p>
      </section>
      <hr>
      <img src="../assets/images/image_5.jpg">
      <section class="article_info" id="news">
        <span class="article_type">Business > Gamification</span>
        <h2>News</h2>
        <span class="upload_info">Posted by <b>Peter</b> 2 hours ago | <b>36 comments</b></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus laudantium aliquam in non reprehenderit, beatae! Dolorem odio aperiam voluptate eligendi, unde at! Aspernatur amet totam, laudantium. Molestias, sapiente et fugit.</p>
      </section>
      <img src="../assets/images/4767bae052faeda8c1cbba3dd37557ef.png" style="border: 0;width:400px; max-width:2000px; height:40px;margin-bottom: 20px "/>
    </article>
    <aside>
        <p style="float: left;margin: 0;font-size: 15px; "><b>SEARCH</b>   </p><hr class="line" style="width: 70%">
        <br>
        <br>
        <input type="text" placeholder="Search here..." />
        <button></button>
        <br>
        <br>
        <p style="float: left;margin: 0;font-size: 15px; "><b>SPONSORS</b>   </p><hr class="line" style="width: 63%">
        <br>
        <br>
        
      <div class="column">
        <img src="../assets/images/banner_1.jpg" alt="">
        <img src="../assets/images/banner_2.jpg" alt="">
        <img src="../assets/images/banner_3.jpg" alt="">
        <img src="../assets/images/banner_4.jpg">
      </div>

      <br>
        <br>
        <p style="float: left;margin: 0;font-size: 15px; "><b>RIDE MAGAZINE NEWS</b>   </p><hr class="line" style="width: 36%">
        <br>
        <br>
        <input type="text" placeholder="Enter email..." />
        <button class="but_sub"></button>
         <br>
        <br>
        <p style="float: left;margin: 0;font-size: 15px; "><b>CATEGORIES</b>   </p><hr class="line" style="width: 60%">
        <br>
        <br>
        <div class="cat">
          <div>
          <p>Facebook</p><hr>
          <p>YouTube</p><hr>
          <p>FaceIT</p><hr>
          <p>Twitter</p><hr>
          <p>Reddit</p>
          </div>
          <div>
            <p>Facebook</p><hr>
          <p>YouTube</p><hr>
          <p>FaceIT</p><hr>
          </div>
        </div>
    </aside>
    <footer>
      <div class="top_footer">
        <br>
      </div>
      <div class="mid_footer">
        <div>
          <div class="footer-logo">
          <img id="logo" src="../assets/images/logo_footer.png">
          </div>
          <p>Bla bla bla bla bla</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quae, fugiat iure labore impedit ipsa ea corrupti laudantium. Dignissimos autem consequatur porro odio quam explicabo dolorum, delectus facilis est numquam.</p>
        </div>
        <div>
          <p style="float: left;margin: 0;font-size: 15px;">RECENT POSTS   </p><hr class="line">
          
          <br>
          <br>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <hr>
           <p> Ea commodi, impedit tempore libero distinctio, nesciunt explicabo </p><hr>
           <p> quae hic eum quis beatae rerum maiores quas reiciendis tenetur</p><hr>
           <p>  dicta. Voluptates, quos cupiditate.</p>
        </div>
        <div>
          <p style="float: left;margin: 0;font-size: 15px;">OUR ARCHIVES</p><hr class="line"><br><br>
          <p>March 2012</p><hr>
          <p>April 2012</p><hr>
          <p>May 2012</p><hr>
          <p>July 2012</p><hr>
          <p>December 2012</p>
        </div>
        
      </div>
      <div class="bot_footer">
        <p>Copyright@2020. All right Reserved <span>Designed by <i style="color: #999999">S.T</i></span></p>
        
      </div>
    </footer>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Home',
   metaInfo: {
    meta: [
      { charset: 'utf-8' },
      // { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  }
}
</script>


<style scoped>

</style>
