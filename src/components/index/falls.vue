<template>
  <div class="waterfall">
    <div class="item">
      <img src="../../../static/image/index/tuone.png" alt=""/>
      <p>
        夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚夫子庙的夜晚</p>
      <div class="boxes">
        <div class="boxesone">
          <img src="../../../static/image/login/mao.jpg" alt=""/>
          <span>讲真的</span>
        </div>
        <div class="boxestwo">
          <img src="../../../static/image/index/iconxing.png" alt=""/>
          <span>269</span>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="../../../static/image/index/tutwo.png" alt=""/>
      <p>秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮河的故事秦淮事秦淮河的故事</p>
      <div class="boxes">
        <div class="boxesone">
          <img src="../../../static/image/login/mao.jpg" alt=""/>
          <span>讲真的</span>
        </div>
        <div class="boxestwo">
          <img src="../../../static/image/index/iconxing.png" alt=""/>
          <span>269</span>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="../../../static/image/index/tuthree.png" alt=""/>
      <p>集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光集贤亭的风光</p>
      <div class="boxes">
        <div class="boxesone">
          <img src="../../../static/image/login/mao.jpg" alt=""/>
          <span>讲真的</span>
        </div>
        <div class="boxestwo">
          <img src="../../../static/image/index/iconxing.png" alt=""/>
          <span>269</span>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="../../../static/image/index/tufour.png" alt=""/>
      <p>茅家铺的清新茅家铺的清</p>
      <div class="boxes">
        <div class="boxesone">
          <img src="../../../static/image/login/mao.jpg" alt=""/>
          <span>讲真的</span>
        </div>
        <div class="boxestwo">
          <img src="../../../static/image/index/iconxing.png" alt=""/>
          <span>269</span>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="../../../static/image/index/tufive.png" alt=""/>
      <p>美丽洲的神秘</p>
      <div class="boxes">
        <div class="boxesone">
          <img src="../../../static/image/login/mao.jpg" alt=""/>
          <span>讲真的</span>
        </div>
        <div class="boxestwo">
          <img src="../../../static/image/index/iconxing.png" alt=""/>
          <span>269</span>
        </div>
      </div>
    </div>
    <div class="item">
      <img src="../../../static/image/index/tusix.png" alt=""/>
      <p>曲院风荷的优雅曲院风荷的优雅曲院风荷的优雅</p>
      <div class="boxes">
        <div class="boxesone">
          <img src="../../../static/image/login/mao.jpg" alt=""/>
          <span>讲真的</span>
        </div>
        <div class="boxestwo">
          <img src="../../../static/image/index/iconxing.png" alt=""/>
          <span>269</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style scoped lang="less">
  .waterfall {
    width: 702px/2;
    column-count: 2;
    margin: 0 auto;

    .item {
      width: 340px/2;
      border-radius: 8px/2;
      break-inside: avoid;

      img {
        width: 100%;
        height: auto;
        border-radius: 8px/2;
      }

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        font-size: 24px/2;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
        line-height: 36px/2;
      }

      .boxes {
        display: flex;
        justify-content: space-between;
        font-size: 24px/2;
        color: #999;
        margin-top: 24px/2;
        margin-bottom: 50px/2;

        .boxesone {
          display: flex;
          justify-content: space-between;

          img {
            width: 30px/2;
            height: 30px/2;
            border-radius: 50%;
            margin-right: 10px/2;
          }
        }

        .boxestwo {
          display: flex;
          justify-content: space-between;

          img {
            width: 28px/2;
            height: 27px/2;
            margin-right: 10px/2;
          }
        }
      }
    }
  }


</style>
