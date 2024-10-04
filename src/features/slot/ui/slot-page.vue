<template>
  <main class="main">
    <div class="el-game-wrapper router-view">
      <div class="re-bg">
        <div class="el-header__bg"></div>
      </div>
      <div class="el-game-wrapper__content">
        <div class="el-container-wrap">
          <div class="ele_container">
            <div class="ele_wrap">
              <div class="tabs">
                <div class="ele-item tab active" onclick="showContent('content1')">
                  <div class="l-icon joker">
                    <img src="/image/game/icon_1726200127_Tqwym8irnC.png">
                  </div>
                  <span>JILI NỔ HŨ</span>
                </div>
                <div class="ele-item tab" onclick="showContent('content2')">
                  <div class="l-icon joker">
                    <img src="/image/game/icon_1726203333_hvfqpmaTWr.png">
                  </div>
                  <span>FC NỔ HŨ</span>
                </div>
                <div class="ele-item tab" onclick="showContent('content3')">
                  <div class="l-icon joker">
                    <img src="/image/game/icon_1726203052_bOSDdBb2P6.png">
                  </div>
                  <span>PG NỔ HŨ</span>
                </div>
                <div class="ele-item tab" onclick="showContent('content4')">
                  <div class="l-icon joker">
                    <img src="/image/game/icon_1726204038_2DNpbnDNhH.png">
                  </div>
                  <span>AG NỔ HŨ</span>
                </div>
              </div>
            </div>
          </div>
          <div class="game-content-list">
            <div class="content active" id="content1">
              <div class="game-type-tab">
                <div class="sub-tabs">
                  <div class="sub-tab active l-list" onclick="showSubContent('subContent1-1')">
                    <img src="/image/game/all.png">
                    <span>Tất cả các trò chơi</span>
                  </div>
                  <div class="sub-tab l-list l_two" onclick="showSubContent('subContent1-2')">
                    <img src="/image/game/star-all.png">
                    <span>Bộ sưu tập của tôi</span>
                  </div>
                </div>
                <div class="search-box"><input type="text" maxlength="8" placeholder="Vui lòng nhập tên trò chơi"
                    class="r-search">
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <div class="game-tab-wrapper">
                <div id="subContent1-1" class="sub-content active">
                  <div class="game-sub-tab-content">
                    <div class="game-tab-content">
                      <div class="collect">
                        <div class="group">
                          <a href="javascript:;"> Nhập game </a>
                          <div class="sc">
                            <img src="/image/game/star-all.png" alt="sxwj">
                            <span>Bộ sưu tập</span>
                          </div><!---->
                        </div>
                      </div>
                      <div class="tp">
                        <div class="el-image transImg">
                          <img src="/image/game/api_game_1726201121_QMQ8s00UmQ.png" class="el-image__inner"
                            style="object-fit: cover;"><!---->
                        </div>
                      </div>
                      <span class="one">
                        <p>JILI NỔ HŨ</p>
                      </span>
                      <p class="two">JILI1 games</p>
                    </div>
                    <div class="game-tab-content">
                      <div class="collect">
                        <div class="group">
                          <a href="javascript:;"> Nhập game </a>
                          <div class="sc">
                            <img src="/image/game/star-all.png" alt="sxwj">
                            <span>Bộ sưu tập</span>
                          </div><!---->
                        </div>
                      </div>
                      <div class="tp">
                        <div class="el-image transImg">
                          <img src="/image/game/api_game_1726227207_T0J7V6XUq5.png" class="el-image__inner"
                            style="object-fit: cover;"><!---->
                        </div>
                      </div>
                      <span class="one">
                        <p>Boxing King</p>
                      </span>
                      <p class="two">JILI1 games</p>
                    </div>
                    <div class="game-tab-content">
                      <div class="collect">
                        <div class="group">
                          <a href="javascript:;"> Nhập game </a>
                          <div class="sc">
                            <img src="/image/game/star-all.png" alt="sxwj">
                            <span>Bộ sưu tập</span>
                          </div><!---->
                        </div>
                      </div>
                      <div class="tp">
                        <div class="el-image transImg">
                          <img src="/image/game/api_game_1726227207_T0J7V6XUq5.png" class="el-image__inner"
                            style="object-fit: cover;"><!---->
                        </div>
                      </div>
                      <span class="one">
                        <p>Boxing King</p>
                      </span>
                      <p class="two">JILI1 games</p>
                    </div>
                  </div>
                </div>
                <div id="subContent1-2" class="sub-content">

                </div>
              </div>

            </div>
            <div class="content" id="content2">
              <div class="game-type-tab">
                <div class="sub-tabs">
                  <div class="sub-tab l-list" onclick="showSubContent('subContent2-1')">
                    <img src="/image/game/all.png">
                    <span>Tất cả các trò chơi</span>
                  </div>
                  <div class="sub-tab l-list l_two" onclick="showSubContent('subContent2-2')">
                    <img src="/image/game/star-all.png">
                    <span>Bộ sưu tập của tôi</span>
                  </div>
                </div>
                <div class="search-box"><input type="text" maxlength="8" placeholder="Vui lòng nhập tên trò chơi"
                    class="r-search">
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <div class="game-tab-wrapper">
                <div id="subContent2-1" class="sub-content active">
                  <div class="game-sub-tab-content">
                    <div class="game-tab-content">
                      <div class="collect">
                        <div class="group">
                          <a href="javascript:;"> Nhập game </a>
                          <div class="sc">
                            <img src="/image/game/star-all.png" alt="sxwj">
                            <span>Bộ sưu tập</span>
                          </div><!---->
                        </div>
                      </div>
                      <div class="tp">
                        <div class="el-image transImg">
                          <img src="/image/game/api_game_1726227454_wDBi9NSXvQ.png" class="el-image__inner"
                            style="object-fit: cover;"><!---->
                        </div>
                      </div>
                      <span class="one">
                        <p>Golden Genie</p>
                      </span>
                      <p class="two">FC1 games</p>
                    </div>
                    <div class="game-tab-content">
                      <div class="collect">
                        <div class="group">
                          <a href="javascript:;"> Nhập game </a>
                          <div class="sc">
                            <img src="/image/game/star-all.png" alt="sxwj">
                            <span>Bộ sưu tập</span>
                          </div><!---->
                        </div>
                      </div>
                      <div class="tp">
                        <div class="el-image transImg">
                          <img src="/image/game/api_game_1726227624_z5krCiznih.png" class="el-image__inner"
                            style="object-fit: cover;"><!---->
                        </div>
                      </div>
                      <span class="one">
                        <p>Zeus</p>
                      </span>
                      <p class="two">FC1 games</p>
                    </div>
                  </div>
                </div>
                <div id="subContent2-2" class="sub-content">

                </div>
              </div>
            </div>
            <div class="content" id="content3">
              <div class="game-type-tab">
                <div class="sub-tabs">
                  <div class="sub-tab l-list" onclick="showSubContent('subContent3-1')">
                    <img src="/image/game/all.png">
                    <span>Tất cả các trò chơi</span>
                  </div>
                  <div class="sub-tab l-list l_two" onclick="showSubContent('subContent3-2')">
                    <img src="/image/game/star-all.png">
                    <span>Bộ sưu tập của tôi</span>
                  </div>
                </div>
                <div class="search-box"><input type="text" maxlength="8" placeholder="Vui lòng nhập tên trò chơi"
                    class="r-search">
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <div class="game-tab-wrapper">
                <div id="subContent3-1" class="sub-content active">
                  <div class="game-sub-tab-content">
                    <div class="game-tab-content">
                      <div class="collect">
                        <div class="group">
                          <a href="javascript:;"> Nhập game </a>
                          <div class="sc">
                            <img src="/image/game/star-all.png" alt="sxwj">
                            <span>Bộ sưu tập</span>
                          </div><!---->
                        </div>
                      </div>
                      <div class="tp">
                        <div class="el-image transImg">
                          <img src="/image/game/api_game_1726227807_1YSXirIJG3.png" class="el-image__inner"
                            style="object-fit: cover;"><!---->
                        </div>
                      </div>
                      <span class="one">
                        <p>Vàng giả kim</p>
                      </span>
                      <p class="two">PG4 games</p>
                    </div>
                  </div>
                </div>
                <div id="subContent3-2" class="sub-content">

                </div>
              </div>
            </div>
            <div class="content" id="content4">
              <div class="game-type-tab">
                <div class="sub-tabs">
                  <div class="sub-tab l-list" onclick="showSubContent('subContent4-1')">
                    <img src="/image/game/all.png">
                    <span>Tất cả các trò chơi</span>
                  </div>
                  <div class="sub-tab l-list l_two" onclick="showSubContent('subContent4-2')">
                    <img src="/image/game/star-all.png">
                    <span>Bộ sưu tập của tôi</span>
                  </div>
                </div>
                <div class="search-box"><input type="text" maxlength="8" placeholder="Vui lòng nhập tên trò chơi"
                    class="r-search">
                  <i class="fas fa-search"></i>
                </div>
              </div>
              <div class="game-tab-wrapper">
                <div id="subContent4-1" class="sub-content active">
                  <div class="game-sub-tab-content">
                    <div class="game-tab-content">
                      <div class="collect">
                        <div class="group">
                          <a href="javascript:;"> Nhập game </a>
                          <div class="sc">
                            <img src="/image/game/star-all.png" alt="sxwj">
                            <span>Bộ sưu tập</span>
                          </div><!---->
                        </div>
                      </div>
                      <div class="tp">
                        <div class="el-image transImg">
                          <img src="/image/game/api_game_1726204430_yOALcLjIhA.png" class="el-image__inner"
                            style="object-fit: cover;"><!---->
                        </div>
                      </div>
                      <span class="one">
                        <p>Panda's Gold</p>
                      </span>
                      <p class="two">AG4 games</p>
                    </div>
                  </div>
                </div>
                <div id="subContent4-2" class="sub-content">

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>